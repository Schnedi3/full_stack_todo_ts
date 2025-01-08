import { useMutation } from '@tanstack/react-query';

import { baseURL } from './baseURL';

export const useSaveUser = () => {
  return useMutation({
    mutationFn: ({
      id,
      fullName,
      email,
    }: {
      id: string;
      fullName: string | null;
      email: string | null;
    }) => {
      return fetch(`${baseURL}/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, fullName, email }),
      });
    },
  });
};
