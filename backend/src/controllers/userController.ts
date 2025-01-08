import { Request, Response } from 'express';

import { saveUserDB } from '../database/userDB';

export const saveUser = async (req: Request, res: Response) => {
  const { id, fullName, email } = req.body;

  try {
    await saveUserDB(id, fullName, email);

    res.status(200).json({ message: 'User saved succesfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
