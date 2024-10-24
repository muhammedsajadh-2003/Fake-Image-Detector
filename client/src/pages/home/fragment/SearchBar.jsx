import React, { useEffect, useRef } from 'react';
import { Box, InputBase, IconButton, Button } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
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
          maxWidth: '600px',
          padding: '5px 15px',
          mr: 3
        }}
      >
        <InputBase
          placeholder="Search Your Media..."
          fullWidth
          sx={{ ml: 1, color: '#A3A3A3' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }}>
          <Search sx={{ color: '#A3A3A3' }} />
        </IconButton>
      </Box>
      <Button
        ref={buttonRef}
        sx={{
          borderRadius: '30px',
          backgroundColor: "#ff4081",
          color: 'white',
          fontWeight: 'bold',
          width: '150px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          }
        }}
      >
        Detect
      </Button>
    </>
  );
};

export default SearchBar;
