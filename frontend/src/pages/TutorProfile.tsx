import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Container,
} from '@mui/material';

const TutorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Hồ Sơ Giáo Viên #{id}
      </Typography>
      <Typography variant="body1">
        Chi tiết hồ sơ giáo viên sẽ được phát triển tiếp...
      </Typography>
    </Container>
  );
};

export default TutorProfile;
