import express, { Request, Response } from 'express';
import Product from '../models/Product';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const products = await Product.fetchAll();
  res.json(products);
});

router.post('/', async (req: Request, res: Response) => {
  const { title, price, description } = req.body;
  const product = new Product(null, title, price, description);
  await product.save();
  res.send(`Product created: ${title}`);
});

export default router;