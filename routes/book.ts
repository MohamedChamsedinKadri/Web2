import express from 'express';
import { getBooks, getBookById, save, update, deleteById } from '../controllers/book';

const router = express.Router();

router.get('/', getBooks);
router.get('/:bookId', getBookById);
router.post('/', save);
router.put('/:bookId', update);
router.delete('/:bookId', deleteById);

export default router;
