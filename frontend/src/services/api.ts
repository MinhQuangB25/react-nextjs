import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export interface Tutor {
  id: number;
  name: string;
  email: string;
  profileImage?: string;
  bio: string;
  specialties: string[];
  hourlyRate: number;
  rating: number;
  totalStudents: number;
  experience: string;
  languages: string[];
  education: string[];
  certifications: string[];
  availability: TimeSlot[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
}

export interface Booking {
  id: number;
  tutorId: number;
  studentName: string;
  studentEmail: string;
  scheduledTime: Date;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export const tutorApi = {
  getAllTutors: async (): Promise<Tutor[]> => {
    const response = await api.get('/tutors');
    return response.data;
  },

  getTutorById: async (id: number): Promise<Tutor> => {
    const response = await api.get(`/tutors/${id}`);
    return response.data;
  },

  searchTutors: async (params: {
    specialty?: string;
    minRating?: number;
    maxRate?: number;
  }): Promise<Tutor[]> => {
    const response = await api.get('/tutors/search', { params });
    return response.data;
  },
};

export const bookingApi = {
  createBooking: async (bookingData: {
    tutorId: number;
    studentName: string;
    studentEmail: string;
    scheduledTime: Date;
    duration: number;
    notes?: string;
  }): Promise<Booking> => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },

  getBookingsByTutor: async (tutorId: number): Promise<Booking[]> => {
    const response = await api.get(`/bookings/tutor/${tutorId}`);
    return response.data;
  },
};

export default api;
