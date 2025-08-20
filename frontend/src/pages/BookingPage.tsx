import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Container,
} from '@mui/material';

const BookingPage: React.FC = () => {
  const { tutorId } = useParams<{ tutorId: string }>();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Đặt Lịch Học với Giáo Viên #{tutorId}
      </Typography>
      <Typography variant="body1">
        Trang đặt lịch học sẽ được phát triển tiếp...
      </Typography>
    </Container>
  );
};

export default BookingPage;
