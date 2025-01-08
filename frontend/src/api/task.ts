import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import { toast } from 'react-toastify';

import { baseURL } from './baseURL';

export const useGetTasks = () => {
  const { userId } = useAuthStore();

  return useQuery({
    queryKey: ['tasks', userId],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/task`, {
        method: 'GET',
        headers: { userId },
      });
      return response.json();
    },
    initialData: [],
  });
};

export const useAddTask = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuthStore();

  return useMutation({
    mutationFn: (task: string) => {
      return fetch(`${baseURL}/task`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, userId }),
      });
    },
    onSuccess: () => {
      toast.success('Task added');
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

export const useCompleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ completed, id }: { completed: boolean; id: number }) => {
      return fetch(`${baseURL}/task/complete/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
      });
    },
    onSuccess: () => {
      toast.success('Task completed');
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ updatedTask, id }: { updatedTask: string; id: number }) => {
      return fetch(`${baseURL}/task/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updatedTask }),
      });
    },
    onSuccess: () => {
      toast.success('Task updated');
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      return fetch(`${baseURL}/task/${id}`, { method: 'DELETE' });
    },
    onSuccess: () => {
      toast.success('Task deleted');
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
