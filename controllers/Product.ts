
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../db/entities/Product.js';

export const createProduct = async (req: Request, res: Response) => {
  const productRepository = getRepository(Product);
  const { name, price, shop } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required.' });
  }

  const product = productRepository.create({ name, price, shop });
  await productRepository.save(product);
  return res.status(201).json(product);
};

export const getAllProducts = async (req: Request, res: Response) => {
  const productRepository = getRepository(Product);
  const products = await productRepository.find();
  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const productRepository = getRepository(Product);
  const product = await productRepository.find()
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
