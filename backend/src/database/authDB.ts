import { pool } from './db';

export const saveUserDB = async (
  id: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  const saveUserQuery = `
    INSERT INTO users (id, first_name, last_name, email)
    ON CONFLICT (id) DO NOTHING
    VALUES ($1, $2, $3, $4)
    RETURNING *`;

  await pool.query(saveUserQuery, [id, firstName, lastName, email]);
};
