import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <SchoolIcon sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          EnglishTutor Pro
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            onClick={() => navigate('/tutors')}
          >
            Tìm Giáo Viên
          </Button>
          <Button 
            color="inherit" 
            variant="outlined"
          >
            Đăng Nhập
          </Button>
          <Button 
            color="secondary" 
            variant="contained"
          >
            Học Thử Miễn Phí
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
