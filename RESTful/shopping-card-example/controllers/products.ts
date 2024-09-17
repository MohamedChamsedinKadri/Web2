import { Request, Response } from 'express';
import Product from '../models/product';

const getProducts = (req: Request, res: Response) => {
    res.status(200).json(Product.fetchAll());
};

const getProductById = (req: Request, res: Response) => {
    res.status(200).json(Product.findById(Number(req.params.prodId)));
};

const save = (req: Request, res: Response) => {
    const prod = req.body;
    const savedProd = new Product(-Infinity, prod.title, prod.price, prod.description).save();
    res.status(201).json(savedProd);
};

const update = (req: Request, res: Response) => {
    const prod = req.body;
    const updatedProd = new Product(Number(req.params.prodId), prod.title, prod.price, prod.description).update();
    res.status(200).json(updatedProd);
};

const deleteById = (req: Request, res: Response) => {
    Product.deleteById(Number(req.params.prodId));
    res.status(200).end();
};

export {
    getProducts,
    getProductById,
    save,
    update,
    deleteById
};
