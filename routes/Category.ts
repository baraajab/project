import { Router } from 'express';
import { createCategory, getAllCategories } from '../controllers/Category.js';


export const router = Router();

router.post('/', createCategory);
router.get('/', getAllCategories);

export default router