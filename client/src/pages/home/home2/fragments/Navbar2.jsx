import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { useUser } from "../../../../context/userContext";
import { useNavigate } from "react-router-dom";
import ProfilePage from "./ProfilePage "; // Ensure no extra space in the import path

const Navbar2 = () => {
  const { logout, user } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Control dialog state

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      logout();
      navigate("/");
      setIsLoading(false);
    }, 2000);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditProfile = () => {
    handleMenuClose();
    setIsDialogOpen(true); // Open the Profile dialog when clicking "Edit Profile"
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false); // Close dialog
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: "10px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "0 10px", sm: "0 20px", md: "0 40px" }, // Adjust padding for responsiveness
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                color: "#ff4081",
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }, // Adjust font size for different screen sizes
              }}
            >
              Fake Media Detector
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{ bgcolor: "#FF4C60", cursor: "pointer" }}
              onClick={handleAvatarClick}
            >
              {user ? user.firstName.charAt(0) : "U"}
            </Avatar>
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: "#ff4081" }} />
            ) : null}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ "& .MuiMenuItem-root": { color: "#FF4C60" } }}
            >
              <MenuItem onClick={handleEditProfile}>
                <ListItemIcon>
                  <EditIcon fontSize="small" sx={{ color: "#FF4C60" }} />
                </ListItemIcon>
                Edit Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" sx={{ color: "#FF4C60" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ProfilePage Dialog */}
      <ProfilePage isDialogOpen={isDialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default Navbar2;
