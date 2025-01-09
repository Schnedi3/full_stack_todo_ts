import { useState } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { Footer, Form, Item } from '../Routes';
import { ITask } from '../types/types';
import { useAuthStore } from '../store/authStore';
import styles from '../css/todo.module.css';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [filteredList, setFilteredList] = useState<ITask[]>([]);
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    navigate({ to: '/login' });
  }

  return (
    <section className={styles.todo}>
      <Form />
      <Item filteredList={filteredList} />
      <Footer setFilteredList={setFilteredList} />
    </section>
  );
}
