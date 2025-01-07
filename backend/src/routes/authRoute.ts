import { Router } from 'express';

import { saveUser } from '../controllers/authController';

const router = Router();

router.post('/login', saveUser);

export default router;
