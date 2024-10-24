import React, { useEffect, useRef } from 'react';
import { Box, InputBase, IconButton, Button } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar2 = () => {
  const boxRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.transform = 'scale(0)';
      boxRef.current.style.transition = 'transform 0.5s ease';
      requestAnimationFrame(() => {
        boxRef.current.style.transform = 'scale(1)';
      });
    }
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateZ(0)';
      buttonRef.current.style.transition = 'transform 0.5s ease';
      requestAnimationFrame(() => {
        buttonRef.current.style.transform = 'translateY(-5px)';
      });
    }
  }, []);

  return (
    <>
      <Box
        ref={boxRef}
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '30px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: { xs: '100%', sm: '450px', md: '600px' }, // Adjust width based on screen size
          padding: { xs: '3px 10px', sm: '5px 15px' }, // Adjust padding for smaller screens
          mr: { xs: 1, sm: 3 }, // Adjust margin
        }}
      >
        <InputBase
          placeholder="Search Your Media..."
          fullWidth
          sx={{ ml: 1, color: '#A3A3A3', fontSize: { xs: '0.9rem', sm: '1rem' } }} // Font size adjusts for small screens
        />
        <IconButton type="submit" sx={{ p: '5px' }}>
          <Search sx={{ color: '#A3A3A3' }} />
        </IconButton>
      </Box>

      <Button
        ref={buttonRef}
        sx={{
          borderRadius: '30px',
          backgroundColor: '#ff4081',
          color: 'white',
          fontWeight: 'bold',
          width: { xs: '120px', sm: '150px' }, // Adjust button width for smaller screens
          fontSize: { xs: '0.85rem', sm: '1rem' }, // Adjust font size for small screens
          padding: { xs: '8px 12px', sm: '10px 20px' }, // Adjust padding
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          ml: { xs: 1, sm: 3 }, // Adjust margin-left
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          },
        }}
      >
        Detect
      </Button>
    </>
  );
};

export default SearchBar2;
