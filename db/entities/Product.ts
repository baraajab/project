import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category.js";
import { Shop } from "./Shop.js";

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
