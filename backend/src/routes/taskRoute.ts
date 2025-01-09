import { Router } from 'express';
import {
  addTask,
  completeTask,
  deleteTask,
  getTasks,
  updateTask,
} from '../controllers/taskController';

const router = Router();

router.get('/', getTasks);
router.post('/', addTask);
router.put('/complete/:id', completeTask);
router.delete('/:id', deleteTask);
router.put('/update/:id', updateTask);

export default router;
