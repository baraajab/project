import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Shop } from "./Shop";
import { Category } from "./Category";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @ManyToOne(() => Shop, shop => shop.products)
    shop: Shop;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];
}
