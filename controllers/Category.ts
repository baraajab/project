

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../db/entities/Category.js';

export const createCategory = async (req: Request, res: Response) => {
  const categoryRepository = getRepository(Category);
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required.' });
  }

  const category = categoryRepository.create({ name });
  await categoryRepository.save(category);
  return res.status(201).json(category);
};

export const getAllCategories = async (req: Request, res: Response) => {
  const categoryRepository = getRepository(Category);
  const categories = await categoryRepository.find();
  res.json(categories);
};
