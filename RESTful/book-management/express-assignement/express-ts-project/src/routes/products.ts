import { Router } from 'express';
import Product from '../models/product';

const router = Router();

// GET request for products
router.get('/', (req, res) => {
  const allProducts = Product.fetchAll();
  res.json(allProducts);
});

// POST request to add a product
router.post('/', (req, res) => {
  const { id, title, price, description } = req.body;
  const newProduct = new Product(id, title, price, description);
  newProduct.save();
  res.redirect('/products');
});

export default router;
