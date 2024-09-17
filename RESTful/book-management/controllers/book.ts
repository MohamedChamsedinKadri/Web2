import { Request, Response } from 'express';
import Book from '../models/book';

const getBooks = (req: Request, res: Response) => {
    res.status(200).json(Book.fetchAll());
};

const getBookById = (req: Request, res: Response) => {
    res.status(200).json(Book.findById(Number(req.params.bookId)));
};

const save = (req: Request, res: Response) => {
    const book = req.body;
    const savedBook = new Book(-Infinity, book.title, book.ISBN, book.publishedDate, book.author).save();
    res.status(201).json(savedBook);
};

const update = (req: Request, res: Response) => {
    const book = req.body;
    const updatedBook = new Book(Number(req.params.bookId), book.title, book.ISBN, book.publishedDate, book.author).update();
    res.status(200).json(updatedBook);
};

const deleteById = (req: Request, res: Response) => {
    Book.deleteById(Number(req.params.bookId));
    res.status(200).end();
};

export {
    getBooks,
    getBookById,
    save,
    update,
    deleteById
};
