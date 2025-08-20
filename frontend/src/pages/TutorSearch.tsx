import React from 'react';
import {
  Typography,
  Container,
} from '@mui/material';

const TutorSearch: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Tìm Kiếm Giáo Viên
      </Typography>
      <Typography variant="body1">
        Trang tìm kiếm giáo viên sẽ được phát triển tiếp...
      </Typography>
    </Container>
  );
};

export default TutorSearch;
