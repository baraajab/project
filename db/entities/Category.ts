import { BaseEntity, Column, Entity, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { ManyToMany } from "typeorm/browser";
import { Product } from "./Product.js";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Product, product => product.categories)
  products: Product[];
}
