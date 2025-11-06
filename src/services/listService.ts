import api from './api';
import { List } from '../types/list';

export const listService = {
  async getAllLists(): Promise<List[]> {
    const response = await api.get<List[]>('/lists');
    return response.data;
  },

  async getListById(id: string): Promise<List> {
    const response = await api.get<List>(`/lists/${id}`);
    return response.data;
  },

  async createList(list: Partial<List>): Promise<List> {
    const response = await api.post<List>('/lists', list);
    return response.data;
  },

  async updateList(id: string, list: Partial<List>): Promise<List> {
    const response = await api.put<List>(`/lists/${id}`, list);
    return response.data;
  },

  async deleteList(id: string): Promise<void> {
    await api.delete(`/lists/${id}`);
  },

  async shareList(listId: string, userEmail: string): Promise<void> {
    await api.post(`/lists/${listId}/share`, { userEmail });
  },
};
