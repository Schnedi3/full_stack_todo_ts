import { Request, Response } from 'express';

import { saveUserDB } from '../database/authDB';

export const saveUser = async (req: Request, res: Response) => {
  const { id, firstName, lastName, email } = req.body;

  try {
    await saveUserDB(id, firstName, lastName, email);

    res.status(200).json({ message: 'User saved succesfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
