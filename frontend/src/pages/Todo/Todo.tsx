import { useState } from 'react';

import { Footer, Form, Item } from '../../Routes';
import { ITask } from '../../types/types';
import styles from './todo.module.css';
// import { useSaveUser } from '../../api/auth';

export const Todo = () => {
  const [filteredList, setFilteredList] = useState<ITask[]>([]);
  // const { mutate: saveUser } = useSaveUser();

  return (
    <section className={styles.todo}>
      <Form />
      <Item filteredList={filteredList} />
      <Footer setFilteredList={setFilteredList} />
    </section>
  );
};
