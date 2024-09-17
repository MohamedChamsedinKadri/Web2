import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Users page!');
});

router.post('/', (req: Request, res: Response) => {
  const { name, email } = req.body;
  res.send(`User created: ${name} (${email})`);
});

export default router;