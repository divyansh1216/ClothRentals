export interface Dress {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  sizes: string[];
  colors: string[];
  isAvailable: boolean;
  isFeatured: boolean;
}

export interface BookingFormData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  dressId?: string;
  dressName?: string;
  eventDate: string;
  eventType: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  adminReply?: string;
  createdAt: string;
}

export interface CategoryFilter {
  id: string;
  name: string;
}

export interface AdminUser {
  email: string;
  role: 'admin';
}