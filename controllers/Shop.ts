import { Request, Response, NextFunction } from "express";
import { Shop } from "../db/entities/Shop";
import { getRepository } from "typeorm";

export const createShop = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { shopName, email, password } = req.body;
        const shopRepo = getRepository(Shop);
        const shop = new Shop();
        shop.shopName = shopName;
        shop.email = email;
        shop.password = password;
        await shopRepo.save(shop);
        res.status(201).json(shop);
    } catch (error) {
        next(error);
    }
};

export const getShopById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const shop = await getRepository(Shop).findOne(req.params.id);
        if (!shop) {
            return res.status(404).json({ message: "Shop not found" });
        }
        res.status(200).json(shop);
    } catch (error) {
        next(error);
    }
};

export const getAllShopsWithProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const shops = await getRepository(Shop).find({ relations: ["products"] });
        res.status(200).json(shops);
    } catch (error) {
        next(error);
    }
};
