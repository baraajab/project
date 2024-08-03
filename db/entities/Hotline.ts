import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "./Shop.js";

@Entity()
export class Hotline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shopId: number;

  @Column()
  hotlineNumber: string;

  @OneToOne(() => Shop, shop => shop.hotline)
  @JoinColumn({ name: "shopId" })
  shop: Shop;
}
