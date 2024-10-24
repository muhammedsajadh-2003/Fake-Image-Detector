import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navbar2 from '../home/home2/fragments/Navbar2';


const AboutUs = () => {
  return (
    <>
    <Navbar2/>
    <Container sx={{ marginTop: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        We are a dedicated team committed to providing innovative solutions for fake image detection.
        Our goal is to help individuals and organizations ensure the authenticity of digital content,
        making the internet a more trustworthy place.
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Our mission is to empower everyone with the tools to easily detect and verify manipulated images,
          combating the spread of misinformation and promoting digital truth.
        </Typography>
      </Box>
    </Container>
    </>
    
  );
};

export default AboutUs;
