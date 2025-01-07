import express from 'express';
import cors from 'cors';

import { PORT } from './config/config';

import authRoutes from './routes/authRoute';
import taskRoutes from './routes/taskRoute';

export const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/task', taskRoutes);

app.listen(PORT);
console.log('Server running on port', PORT);
