import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Form, useNavigate } from "react-router-dom";

const ProfilePage = ({ isDialogOpen, onClose }) => {
  const [userInput, setUserInput] = useState({firstName: "", lastName: "", email: "", password: ""});
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {id, value} = e.target;
    setUserInput((preValue) => {
      return {...preValue, [id]: value};
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted ",userInput)
    setErrorMessage("");
    try {
      const response = await fetch(`/api/user/update/${user._id}`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!data.success) {
        setErrorMessage(data?.message);
      } else {
        alert("User updated successfully!");
        navigate("/"); // redirect to home or another page
      }
    } catch (error) {
      console.error("Error updating user:", error);
      setErrorMessage("An error occurred while updating the user.");
    }
  };

  console.log(userInput)

  return (
    <Dialog open={isDialogOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', color: '#FF4C60' }}>
        Edit Profile
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit} >
        <Box  sx={{ mt: 2 }}>
        {errorMessage && (
          <Typography sx={{mb:2}}>
            {errorMessage}
          </Typography> // Correctly close the div tag
        )}
          <TextField
            fullWidth
            variant="outlined"
            id="firstName"
            label="FIrst Name"
            placeholder="Enter your first name"
            type="text"
            onChange={handleChange}
            value={userInput.firstName}
            sx={{ mb: 2 }}
            required
            InputProps={{
              sx: {
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            id="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            type="text"
            onChange={handleChange}
            value={userInput.lastName}
            sx={{ mb: 2 }}
            required
            InputProps={{
              sx: {
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            id="email"
            label="Email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            value={userInput.email}
            sx={{ mb: 2 }}
            required
            InputProps={{
              sx: {
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            id="password"
            label="Password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            value={userInput.password}
            sx={{ mb: 2 }}
            required
            InputProps={{
              sx: {
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              },
            }}
          />
          {message && (
            <Alert severity={success ? "success" : "error"} sx={{ mt: 2 }}>
              {message}
            </Alert>
          )}
        </Box>
        </form>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={onClose} variant="outlined" color="secondary" sx={{  border:'1px solid #FF4C60',borderRadius: '20px', color: '#FF4C60', '&:hover': { bgcolor: '#FF2D40',color:'white' } }}>
          Cancel
        </Button>
        <Button 
          type="submit" 
          onClick={handleFormSubmit} 
          variant="contained" 
          color="secondary" 
          sx={{ borderRadius: '20px', bgcolor: '#FF4C60', '&:hover': { bgcolor: '#FF2D40' }, position: 'relative' }}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: '#fff' }} />
          ) : (
            "Edit"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfilePage;
