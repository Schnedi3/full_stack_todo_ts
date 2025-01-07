import { useMutation } from '@tanstack/react-query';

import { baseURL } from './baseURL';

export const useSaveUser = () => {
  return useMutation({
    mutationFn: () => {
      return fetch(`${baseURL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    },
  });
};
