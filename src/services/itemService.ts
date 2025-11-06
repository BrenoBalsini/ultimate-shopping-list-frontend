import api from './api';
import { Item } from '../types/item';

export const itemService = {
  async getItemsByListId(listId: string): Promise<Item[]> {
    const response = await api.get<Item[]>(`/lists/${listId}/items`);
    return response.data;
  },

  async createItem(listId: string, item: Partial<Item>): Promise<Item> {
    const response = await api.post<Item>(`/lists/${listId}/items`, item);
    return response.data;
  },

  async updateItem(listId: string, itemId: string, item: Partial<Item>): Promise<Item> {
    const response = await api.put<Item>(`/lists/${listId}/items/${itemId}`, item);
    return response.data;
  },

  async deleteItem(listId: string, itemId: string): Promise<void> {
    await api.delete(`/lists/${listId}/items/${itemId}`);
  },

  async toggleItemChecked(listId: string, itemId: string): Promise<Item> {
    const response = await api.patch<Item>(`/lists/${listId}/items/${itemId}/toggle`);
    return response.data;
  },
};
