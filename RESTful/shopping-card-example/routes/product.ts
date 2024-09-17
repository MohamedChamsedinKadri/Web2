import express from 'express';
import { getProducts, getProductById, save, update, deleteById } from '../controllers/products';

const router = express.Router();

router.get('/', getProducts);
router.get('/:prodId', getProductById);
router.post('/', save);
router.put('/:prodId', update);
router.delete('/:prodId', deleteById);

export default router;
