import { Router } from 'express';
import accountRouter from './accountRouter.js';
import usersRouter from './userRouter.js';

const router = Router();
router.use(usersRouter)
router.use(accountRouter)
export default router;