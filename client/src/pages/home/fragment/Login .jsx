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
import { useNavigate } from "react-router-dom";

const Login = ({ open, onClose }) => {
  const [userInput, setUserInput] = useState({});
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await fetch("/api/auth/user/sign-in", {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(userInput),
      });

      const data = await res.json();
      if (!res.ok) {
        setSuccess(false);
        setMessage(data.message);
      } else {
        setSuccess(true);
        setMessage("Sign In Successful");
        navigate('/landingpage');
      }
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', color: '#FF4C60' }}>
        Login
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            id="email"
            label="Email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
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
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={onClose} variant="outlined" color="secondary" sx={{  border:'1px solid #FF4C60',borderRadius: '20px', color: '#FF4C60', '&:hover': { bgcolor: '#FF2D40',color:'white' } }}>
          Cancel
        </Button>
        <Button 
          type="submit" 
          onClick={handleSubmit} 
          variant="contained" 
          color="secondary" 
          sx={{ borderRadius: '20px', bgcolor: '#FF4C60', '&:hover': { bgcolor: '#FF2D40' }, position: 'relative' }}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: '#fff' }} />
          ) : (
            "Login"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
