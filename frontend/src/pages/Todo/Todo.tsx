import { useState } from 'react';

import { Footer, Form, Item } from '../../Routes';
import { ITask } from '../../types/types';
import styles from './todo.module.css';

export default function Todo() {
  const [filteredList, setFilteredList] = useState<ITask[]>([]);

  return (
    <section className={styles.todo}>
      <Form />
      <Item filteredList={filteredList} />
      <Footer setFilteredList={setFilteredList} />
    </section>
  );
}
