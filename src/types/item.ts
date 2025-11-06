export interface Item {
  id: string;
  list_id: string;
  name: string;
  quantity?: number;
  unit?: string;
  price?: number;
  category?: string;
  is_purchased: boolean;
  created_at: Date;
  updated_at: Date;
}
