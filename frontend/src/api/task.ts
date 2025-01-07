import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { toast } from 'react-toastify';

export const useTask = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const response = await fetch('/task', { method: 'GET' });
      return response.json();
    },
  });
};

export const useAddTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (text: string) => {
      return fetch('/task', { method: 'POST', body: JSON.stringify({ text }) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
    },
  });
};

export const useCompleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ completed, id }: { completed: boolean; id: number }) => {
      return fetch(`/task/complete/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ updatedText, id }: { updatedText: string; id: number }) => {
      return fetch(`/task/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updatedText }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      return fetch(`/task/${id}`, { method: 'DELETE' });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
