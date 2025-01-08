import { useState } from 'react';

import { useAddTask } from '../../api/task';
import styles from './form.module.css';

export const Form = () => {
  const [task, setTask] = useState<string>('');
  const { mutate: addTask } = useAddTask();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task) {
      addTask(task);
    }

    setTask('');
  };

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <h1 className={styles.title}>todo</h1>
      <article className={styles.inputContainer}>
        <input
          className={styles.input}
          type='text'
          placeholder='Add a new task...'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {task && (
          <span className={styles.iconClear} onClick={() => setTask('')}>
            ✖
          </span>
        )}
      </article>
    </form>
  );
};
