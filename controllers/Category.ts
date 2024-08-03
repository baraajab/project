import { Request, Response, NextFunction } from "express";
import { Category } from "../db/entities/Category";
import { getRepository } from "typeorm";

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const categoryRepo = getRepository(Category);
        const category = new Category();
        category.name = name;
        await categoryRepo.save(category);
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await getRepository(Category).find();
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};
