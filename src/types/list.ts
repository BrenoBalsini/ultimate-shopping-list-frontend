export interface List {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  category?: string;
  is_active: boolean;
  itemCount?: number;
  created_at: Date;
  updated_at: Date;
}
