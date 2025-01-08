import { useState } from 'react';

import { useCompleteTask, useDeleteTask, useUpdateTask } from '../../api/task';
import { ITask } from '../../types/types';
import { iconTrash } from '../../Routes';
import styles from './item.module.css';

interface IItemProps {
  filteredList: ITask[];
}

export const Item = ({ filteredList }: IItemProps) => {
  const [editId, setEditId] = useState<number>(0);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [updatedTask, setUpdatedTask] = useState<string>('');

  const { mutate: updateTask } = useUpdateTask();
  const { mutate: completeTask } = useCompleteTask();
  const { mutate: deleteTask } = useDeleteTask();

  const handleCompleteTask = async (completed: boolean, id: number) => {
    completed = !completed;
    completeTask({ completed, id });
  };

  const handleUpdateTask = async (
    e: React.FormEvent<HTMLFormElement>,
    id: number
  ) => {
    e.preventDefault();

    if (updatedTask.trim() !== '') {
      updateTask(
        { updatedTask, id },
        {
          onSuccess: () => {
            setEditMode(false);
          },
        }
      );
    }
  };

  if (!filteredList || filteredList?.length === 0) {
    return (
      <section className={styles.empty}>
        <p className={styles.emptyText}>No pending tasks</p>
      </section>
    );
  }

  return (
    <ul>
      {filteredList.map((todo) => (
        <li className={styles.tasks} key={todo.id}>
          <input
            className={`${styles.checkbox} ${styles.checkboxBorder}`}
            type='checkbox'
            id={todo.task}
            checked={todo.completed}
            onChange={() => handleCompleteTask(todo.completed, todo.id)}
          />
          {editMode && editId === todo.id ? (
            <form onSubmit={(e) => handleUpdateTask(e, todo.id)}>
              <input
                className={styles.edit}
                type='text'
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
                autoFocus
              />
            </form>
          ) : (
            <p
              className={`${styles.taskText} ${
                todo.completed ? styles.taskCompleted : ''
              }`}
              onDoubleClick={() => {
                setEditMode(true),
                  setEditId(todo.id),
                  setUpdatedTask(todo.task);
              }}
            >
              {todo.task}
            </p>
          )}
          <button className={styles.button} onClick={() => deleteTask(todo.id)}>
            <img className={styles.icon} src={iconTrash} alt='delete task' />
          </button>
        </li>
      ))}
    </ul>
  );
};
