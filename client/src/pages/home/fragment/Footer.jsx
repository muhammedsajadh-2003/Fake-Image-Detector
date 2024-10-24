    import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

const navigate = useNavigate ()

const handleabotusClick = () => {
  navigate('/aboutus')
};

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#F5F5F5',
        padding: '20px 0',
        borderTop: '1px solid #E0E0E0',
        animation: 'fadeIn 1s ease-in-out',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Left Section - Logo or Name */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold' }}>
              Fake Media Detector
            </Typography>
            <Typography variant="body2" sx={{ color: '#A3A3A3' }}>
              Your trusted partner in digital media detection.
            </Typography>
          </Grid>

          {/* Right Section - Links and Social Media */}
          <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            {/* Links with Hover Animation */}
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, gap: 2 }}>
              {['About Us', 'Privacy Policy', 'Terms of Service', 'Contact'].map((text) => (
                <Link
                  key={text}
                  href={text === 'About Us' ? '#' : '#'} // Keep href for other links
                  color="inherit"
                  underline="none"
                  // onClick={text === 'About Us' ? handleabotusClick : undefined} // Add onClick for About Us
                  sx={{
                    position: 'relative',
                    color: '#A3A3A3',
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      color: '#FF4C60',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>

            {/* Social Media Icons with Hover Pop Effect */}
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, gap: 1, mt: 1 }}>
              {[
                { icon: <Facebook />, label: 'Facebook', hoverColor: '#3b5998' },
                { icon: <Twitter />, label: 'Twitter', hoverColor: '#1da1f2' },
                { icon: <Instagram />, label: 'Instagram', hoverColor: '#e1306c' },
                { icon: <LinkedIn />, label: 'LinkedIn', hoverColor: '#0077b5' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  aria-label={social.label}
                  sx={{
                    color: '#A3A3A3',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      color: social.hoverColor,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section - Copyright */}
        <Box sx={{ textAlign: 'center', marginTop: '20px', color: '#A3A3A3' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Fake Image Detector. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
