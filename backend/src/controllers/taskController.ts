import { Request, Response } from 'express';

import {
  addTaskDB,
  completeTaskDB,
  deleteTaskDB,
  getTasksDB,
  updateTaskDB,
} from '../database/taskDB';

export const getTasks = async (req: Request, res: Response) => {
  const { userid } = req.headers;

  try {
    const result = await getTasksDB(userid);

    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addTask = async (req: Request, res: Response) => {
  const { task, userId } = req.body;

  try {
    await addTaskDB(task, userId);

    res.status(200).json();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { updatedTask } = req.body;

  try {
    await updateTaskDB(updatedTask, id);

    res.status(200).json();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const completeTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { completed } = req.body;

  try {
    await completeTaskDB(completed, id);

    res.status(200).json();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await deleteTaskDB(id);

    res.status(200).json();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
