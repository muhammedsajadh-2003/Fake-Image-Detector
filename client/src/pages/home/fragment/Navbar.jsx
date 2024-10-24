import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './Login ';
import Register from './Register '

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile check

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '10px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Section - Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ color: '#ff4081' }}>
              Fake Media Detector
            </Typography>
          </Box>

          {/* Right Section - Buttons or Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile ? (
              // Mobile view: display menu icon with options
              <>
                <IconButton onClick={handleMenuOpen} sx={{ color: '#ff4081' }}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{ '& .MuiMenuItem-root': { color: '#ff4081' } }}
                >
                  <MenuItem onClick={handleOpenLogin}>Login</MenuItem>
                  <MenuItem onClick={handleOpenRegister}>Register</MenuItem>
                </Menu>
              </>
            ) : (
              // Desktop view: display buttons
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  onClick={handleOpenLogin}
                  variant="outlined"
                  sx={{
                    color: '#ff4081',
                    border: '1px solid #ff4081',
                    borderRadius: '30px',
                    '&:hover': { backgroundColor: 'rgba(255,64,129,0.1)' },
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={handleOpenRegister}
                  variant="contained"
                  sx={{ backgroundColor: '#ff4081', borderRadius: '30px' }}
                >
                  Register
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Login Modal */}
      <Login open={openLogin} onClose={handleCloseLogin} />

      {/* Register Modal */}
      <Register open={openRegister} onClose={handleCloseRegister} />
    </>
  );
};

export default Navbar;
