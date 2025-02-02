import User from "../models/user.model.js";
import bcyrptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const userSignUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter all required fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcyrptjs.hashSync(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "SignUp Successful",
      newUser,
    });
  } catch (error) {
    console.log("Registration error:", error);  // Log the error for debugging
    res.status(500).json({ success: false, message: "Registration failed", error: error.message });
  }
};

export const userSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All feilds are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isValid = await bcyrptjs.compareSync(password, user.password);

    const { password: pass, ...rest } = user._doc;

    if (isValid) {
      const token = jwt.sign(
        { id: user._id, isAdmin: false },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      const { password: pass, ...rest } = user._doc;

      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const adminSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All feilds are required" });
    }

    const admin = await User.findOne({ email, isAdmin: true });

    if (!admin) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Admin not found or wrong cretintials",
        });
    }

    const isValid = await bcyrptjs.compareSync(password, admin?.password);

    if (!isValid) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Admin cretintials are not valid",
        });
    }

    const token = jwt.sign(
      { id: admin._id, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { password: pass, ...rest } = admin._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const signOut = (req, res) => {
  try {
    res.clearCookie("access_token"); // Clears the "access_token" cookie set in the signIn function
    return res.status(200).json({ message: "Sign Out Success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
