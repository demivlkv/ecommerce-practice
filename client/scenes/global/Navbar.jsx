import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton } from '@mui/material';
import { PersonOutline, ShoppingBadOutlined, MenuOutlined, SesrchOutlined, SearchOffOutlined, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      width="100%"
      height="60px"
      display="flex"
      alignItems="center"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box onClick={() => navigate('/')} sx={{ '&:hover': { cursor: 'pointer' }}} color={shades.secondary[500]}>
          Liberté
        </Box>
        <Box
          display="flex"
          justifyContent="space=between"
          columnGap="1rem"
          zIndex="2"
        >
          <IconButton sx={{ color: 'black' }}>
            <SearchOffOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <PersonOutline />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <ShoppingBadOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;