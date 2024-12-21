import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
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
