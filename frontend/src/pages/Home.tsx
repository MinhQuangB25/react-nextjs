import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Chip,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { tutorApi, type Tutor } from '../services/api';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [featuredTutors, setFeaturedTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const tutors = await tutorApi.getAllTutors();
        setFeaturedTutors(tutors.slice(0, 3)); // Show first 3 tutors as featured
      } catch (error) {
        console.error('Error fetching tutors:', error);
        // Fallback to mock data if API fails
        setFeaturedTutors([
          {
            id: 1,
            name: 'Sarah Johnson',
            rating: 4.9,
            totalStudents: 150,
            experience: '5 năm',
            specialties: ['IELTS', 'Business English'],
            hourlyRate: 300000,
            profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format',
            email: 'sarah@example.com',
            bio: 'Experienced English teacher',
            languages: ['English', 'Vietnamese'],
            education: ['Master in TESOL'],
            certifications: ['IELTS Certified'],
            availability: [],
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'Michael Chen',
            rating: 4.8,
            totalStudents: 120,
            experience: '3 năm',
            specialties: ['Giao tiếp', 'Phát âm'],
            hourlyRate: 250000,
            profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
            email: 'michael@example.com',
            bio: 'Native English speaker',
            languages: ['English'],
            education: ['Bachelor in English Literature'],
            certifications: ['TEFL Certificate'],
            availability: [],
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            name: 'Emma Wilson',
            rating: 4.9,
            totalStudents: 200,
            experience: '7 năm',
            specialties: ['TOEFL', 'Academic English'],
            hourlyRate: 350000,
            profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format',
            email: 'emma@example.com',
            bio: 'Academic English specialist',
            languages: ['English'],
            education: ['PhD in Applied Linguistics'],
            certifications: ['TOEFL Certified'],
            availability: [],
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  const benefits = [
    {
      title: 'Học Thử Miễn Phí',
      description: 'Trải nghiệm 30 phút đầu tiên hoàn toàn miễn phí',
      icon: <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Giáo Viên Chất Lượng',
      description: 'Được tuyển chọn kỹ lưỡng với chứng chỉ quốc tế',
      icon: <PersonIcon color="primary" sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Lịch Học Linh Hoạt',
      description: 'Tự do chọn thời gian phù hợp với lịch trình',
      icon: <AccessTimeIcon color="primary" sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          p: 6,
          borderRadius: 2,
          mb: 6,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Học Tiếng Anh 1-1 với Giáo Viên Bản Ngữ
        </Typography>
        <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
          Nâng cao kỹ năng tiếng Anh hiệu quả với phương pháp cá nhân hóa
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/tutors')}
          >
            Tìm Giáo Viên Ngay
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
          >
            Học Thử Miễn Phí
          </Button>
        </Box>
      </Box>

      {/* Benefits Section */}
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
        Tại Sao Chọn EnglishTutor Pro?
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 6 }}>
        {benefits.map((benefit, index) => (
          <Box key={index} sx={{ flex: '1 1 300px', minWidth: '300px' }}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {benefit.icon}
              <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
                {benefit.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {benefit.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      {/* Featured Tutors */}
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
        Giáo Viên Nổi Bật
      </Typography>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 6 }}>
          {featuredTutors.map((tutor) => (
            <Box key={tutor.id} sx={{ flex: '1 1 300px', minWidth: '300px', maxWidth: '400px' }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={() => navigate(`/tutor/${tutor.id}`)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={tutor.profileImage || 'https://via.placeholder.com/150x150'}
                  alt={tutor.name}
                  sx={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {tutor.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <StarIcon color="warning" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">
                      {tutor.rating} ({tutor.totalStudents} học viên)
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Kinh nghiệm: {tutor.experience}
                  </Typography>
                  <Chip
                    label={tutor.specialties.join(', ')}
                    variant="outlined"
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" color="primary">
                    {tutor.hourlyRate.toLocaleString('vi-VN')} VNĐ/giờ
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      )}

      {/* CTA Section */}
      <Paper
        sx={{
          p: 4,
          textAlign: 'center',
          bgcolor: 'grey.50',
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Sẵn Sàng Bắt Đầu Hành Trình Học Tiếng Anh?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Đăng ký ngay để nhận được buổi học thử miễn phí với giáo viên phù hợp
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/tutors')}
        >
          Bắt Đầu Ngay
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
