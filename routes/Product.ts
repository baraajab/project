

import { Router } from 'express';
import { createProduct, getAllProducts, getProductById } from '../controllers/Product.js';


const Prouter = Router();

Prouter.post('/', createProduct);
Prouter.get('/', getAllProducts);
Prouter.get('/:id', getProductById);

export default Prouter
