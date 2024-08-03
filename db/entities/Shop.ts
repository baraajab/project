import { BeforeInsert, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.js";
import { Hotline } from "./Hotline.js";

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shopName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Product, product => product.shop)
  products: Product[];

  @OneToOne(() => Hotline, hotline => hotline.shop)
  hotline: Hotline;

}
