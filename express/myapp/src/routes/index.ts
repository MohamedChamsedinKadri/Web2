import express, { Request, Response } from 'express';
import userRouter from './users';
import productRouter from './products';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my app!');
});

router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;