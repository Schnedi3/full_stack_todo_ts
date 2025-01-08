import { pool } from './db';

export const saveUserDB = async (
  id: string,
  fullName: string,
  email: string
) => {
  const saveUserQuery = `
    INSERT INTO users (id, full_name, email)
    VALUES ($1, $2, $3)
    ON CONFLICT (id) DO NOTHING
    RETURNING *`;

  await pool.query(saveUserQuery, [id, fullName, email]);
};
