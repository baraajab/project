import { Router } from 'express';

import { createShop, getAllShops, getShopById } from '../controllers/Shop.js';

const Srouter = Router();

Srouter.post('/', createShop);
Srouter.get('/', getAllShops);
Srouter.get('/:id', getShopById);

export default Srouter
