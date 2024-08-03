import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Shop } from '../db/entities/Shop.js';

export const createShop = async (req: Request, res: Response) => {
  const shopRepository = getRepository(Shop);
  const { shopName, email, password } = req.body;

  if (!shopName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const shop = shopRepository.create({ shopName, email, password });
 
  await shopRepository.save(shop);
  return res.status(201).json(shop);
};

export const getAllShops = async (req: Request, res: Response) => {
  const shopRepository = getRepository(Shop);
  const shops = await shopRepository.find({ relations: ['products'] });
  res.json(shops);
};

export const getShopById = async (req: Request, res: Response) => {
  const shopRepository = getRepository(Shop);
  const shop = await shopRepository.find();
  if (shop) {
    res.json(shop);
  } else {
    res.status(404).json({ message: 'Shop not found' });
  }
};
