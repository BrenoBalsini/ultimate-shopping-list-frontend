import { useState, useEffect } from 'react';
import { listService } from '../services/listService';
import type { List } from '../types/list';

export const useLists = () => {
  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLists = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await listService.getAllLists();
      setLists(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch lists');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const createList = async (list: Partial<List>) => {
    try {
      const newList = await listService.createList(list);
      setLists((prev) => [...prev, newList]);
      return newList;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create list');
      throw err;
    }
  };

  const updateList = async (id: string, list: Partial<List>) => {
    try {
      const updatedList = await listService.updateList(id, list);
      setLists((prev) => prev.map((l) => (l._id === id ? updatedList : l)));
      return updatedList;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update list');
      throw err;
    }
  };

  const deleteList = async (id: string) => {
    try {
      await listService.deleteList(id);
      setLists((prev) => prev.filter((l) => l._id !== id));
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to delete list');
      throw err;
    }
  };

  return {
    lists,
    loading,
    error,
    createList,
    updateList,
    deleteList,
    refreshLists: fetchLists,
        fetchLists,
  };
};
