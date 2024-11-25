import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box } from '@mui/material';
import { COLOR } from '@muc/constant';

export default function SearchField() {
  return (
    <Box
      component="form"
      border={`2px solid ${COLOR.lightGray}`}
      sx={{ display: 'flex', alignItems: 'center', }}
    >
    <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        
        placeholder="Search "
    
      />
      
    
    </Box>
  );
}
