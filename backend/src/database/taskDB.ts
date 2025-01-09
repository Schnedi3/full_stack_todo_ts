import { pool } from './db';

export const getTasksDB = async (userid: string | string[] | undefined) => {
  const getTasksQuery = `
    SELECT id, task, completed
    FROM todo
    WHERE user_id = $1`;

  const result = await pool.query(getTasksQuery, [userid]);
  return result.rows;
};

export const addTaskDB = async (task: string, userId: string) => {
  const addTaskQuery = `
    INSERT INTO todo (task, user_id)
    VALUES ($1, $2)
    RETURNING *`;

  await pool.query(addTaskQuery, [task, userId]);
};

export const updateTaskDB = async (updatedTask: string, id: number) => {
  const updateTaskQuery = `
    UPDATE todo
    SET task = $1
    WHERE id = $2
    RETURNING *`;

  await pool.query(updateTaskQuery, [updatedTask, id]);
};

export const completeTaskDB = async (completed: boolean, id: number) => {
  const completeTaskQuery = `
    UPDATE todo
    SET completed = $1
    WHERE id = $2
    RETURNING *`;

  const result = await pool.query(completeTaskQuery, [completed, id]);
};

export const deleteTaskDB = async (id: number) => {
  const deleteTaskQuery = `
    DELETE FROM todo
    WHERE id = $1`;

  await pool.query(deleteTaskQuery, [id]);
};
