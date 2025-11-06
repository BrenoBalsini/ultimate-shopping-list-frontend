export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  language_preference: string;
  created_at: Date;
  updated_at: Date;
}

export interface AuthResponse {
  user: User;
  token?: string;
}
