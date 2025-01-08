import express from 'express';
import cors from 'cors';

import { PORT } from './config/config';

import userRoute from './routes/userRoute';
import taskRoutes from './routes/taskRoute';

export const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRoute);
app.use('/api/task', taskRoutes);

app.listen(PORT);
console.log('Server running on port', PORT);
