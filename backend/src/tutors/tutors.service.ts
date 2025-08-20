import { Injectable } from '@nestjs/common';
import type { Tutor, CreateTutorDto, UpdateTutorDto } from './tutor.interface';

@Injectable()
export class TutorsService {
  private tutors: Tutor[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'Experienced English teacher with 5 years of teaching experience. Specialized in IELTS and Business English.',
      specialties: ['IELTS', 'Business English', 'Conversation'],
      hourlyRate: 300000,
      rating: 4.9,
      totalStudents: 150,
      experience: '5 years',
      languages: ['English', 'Vietnamese'],
      education: ['Master in TESOL from University of Sydney'],
      certifications: ['IELTS Certified', 'TESOL Certificate'],
      availability: [
        { day: 'Monday', startTime: '09:00', endTime: '17:00' },
        { day: 'Tuesday', startTime: '09:00', endTime: '17:00' },
        { day: 'Wednesday', startTime: '09:00', endTime: '17:00' },
      ],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael@example.com',
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'Native English speaker from Canada. Passionate about helping students improve their pronunciation and conversation skills.',
      specialties: ['Conversation', 'Pronunciation', 'Grammar'],
      hourlyRate: 250000,
      rating: 4.8,
      totalStudents: 120,
      experience: '3 years',
      languages: ['English'],
      education: ['Bachelor in English Literature from University of Toronto'],
      certifications: ['TEFL Certificate'],
      availability: [
        { day: 'Monday', startTime: '10:00', endTime: '18:00' },
        { day: 'Thursday', startTime: '10:00', endTime: '18:00' },
        { day: 'Friday', startTime: '10:00', endTime: '18:00' },
      ],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'Academic English specialist with extensive experience in TOEFL preparation and university-level English.',
      specialties: ['TOEFL', 'Academic English', 'Writing'],
      hourlyRate: 350000,
      rating: 4.9,
      totalStudents: 200,
      experience: '7 years',
      languages: ['English'],
      education: ['PhD in Applied Linguistics from Oxford University'],
      certifications: ['TOEFL Certified', 'Academic Writing Specialist'],
      availability: [
        { day: 'Tuesday', startTime: '14:00', endTime: '20:00' },
        { day: 'Wednesday', startTime: '14:00', endTime: '20:00' },
        { day: 'Saturday', startTime: '09:00', endTime: '15:00' },
      ],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: 'David Thompson',
      email: 'david@example.com',
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'British English teacher with expertise in Cambridge exams and business communication.',
      specialties: ['Cambridge Exams', 'Business English', 'British Accent'],
      hourlyRate: 320000,
      rating: 4.8,
      totalStudents: 95,
      experience: '4 years',
      languages: ['English'],
      education: ['Master in English Literature from Cambridge University'],
      certifications: ['Cambridge CELTA', 'Business English Specialist'],
      availability: [
        { day: 'Monday', startTime: '14:00', endTime: '22:00' },
        { day: 'Wednesday', startTime: '14:00', endTime: '22:00' },
        { day: 'Friday', startTime: '14:00', endTime: '22:00' },
      ],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      email: 'lisa@example.com',
      profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      bio: 'American English teacher specializing in conversational English and pronunciation improvement.',
      specialties: ['Conversation', 'American Accent', 'Pronunciation'],
      hourlyRate: 280000,
      rating: 4.7,
      totalStudents: 180,
      experience: '6 years',
      languages: ['English', 'Spanish'],
      education: ['Bachelor in Linguistics from UCLA'],
      certifications: ['TESOL Certificate', 'Pronunciation Specialist'],
      availability: [
        { day: 'Tuesday', startTime: '08:00', endTime: '16:00' },
        { day: 'Thursday', startTime: '08:00', endTime: '16:00' },
        { day: 'Saturday', startTime: '10:00', endTime: '18:00' },
      ],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Tutor[] {
    return this.tutors.filter(tutor => tutor.isActive);
  }

  findOne(id: number): Tutor | undefined {
    return this.tutors.find(tutor => tutor.id === id && tutor.isActive);
  }

  search(specialty?: string, minRating?: number, maxRate?: number): Tutor[] {
    let filteredTutors = this.tutors.filter(tutor => tutor.isActive);

    if (specialty) {
      filteredTutors = filteredTutors.filter(tutor =>
        tutor.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase()))
      );
    }

    if (minRating) {
      filteredTutors = filteredTutors.filter(tutor => tutor.rating >= minRating);
    }

    if (maxRate) {
      filteredTutors = filteredTutors.filter(tutor => tutor.hourlyRate <= maxRate);
    }

    return filteredTutors;
  }

  create(createTutorDto: CreateTutorDto): Tutor {
    const newTutor: Tutor = {
      id: this.tutors.length + 1,
      ...createTutorDto,
      rating: 0,
      totalStudents: 0,
      availability: [],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.tutors.push(newTutor);
    return newTutor;
  }

  update(id: number, updateTutorDto: UpdateTutorDto): Tutor | undefined {
    const tutorIndex = this.tutors.findIndex(tutor => tutor.id === id);
    if (tutorIndex === -1) {
      return undefined;
    }

    this.tutors[tutorIndex] = {
      ...this.tutors[tutorIndex],
      ...updateTutorDto,
      updatedAt: new Date(),
    };

    return this.tutors[tutorIndex];
  }

  remove(id: number): boolean {
    const tutorIndex = this.tutors.findIndex(tutor => tutor.id === id);
    if (tutorIndex === -1) {
      return false;
    }

    this.tutors[tutorIndex].isActive = false;
    this.tutors[tutorIndex].updatedAt = new Date();
    return true;
  }
}
