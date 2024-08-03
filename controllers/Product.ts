import { Request, Response, NextFunction } from "express";
import { Product } from "../db/entities/Product";
import { getRepository } from "typeorm";

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, price, shopId, categoryIds } = req.body;
        const productRepo = getRepository(Product);
        const product = new Product();
        product.name = name;
        product.price = price;
        product.shop = shopId;
        product.categories = categoryIds;
        await productRepo.save(product);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await getRepository(Product).find();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await getRepository(Product).findOne(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};
