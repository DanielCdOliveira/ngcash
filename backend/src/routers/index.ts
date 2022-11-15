import { Router } from 'express';
import accountRouter from './accountRouter.js';
import transactionRouter from './transactionRouter.js';
import usersRouter from './userRouter.js';

const router = Router();
router.use(usersRouter)
router.use(accountRouter)
router.use(transactionRouter)
export default router;