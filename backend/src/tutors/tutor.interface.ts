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

export interface CreateTutorDto {
  name: string;
  email: string;
  bio: string;
  specialties: string[];
  hourlyRate: number;
  experience: string;
  languages: string[];
  education: string[];
  certifications: string[];
}

export interface UpdateTutorDto {
  name?: string;
  bio?: string;
  specialties?: string[];
  hourlyRate?: number;
  experience?: string;
  languages?: string[];
  education?: string[];
  certifications?: string[];
  availability?: TimeSlot[];
  isActive?: boolean;
}
