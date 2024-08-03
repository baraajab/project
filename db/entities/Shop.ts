import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, BeforeInsert } from "typeorm";
import { Product } from "./Product";
import { Hotline } from "./Hotline";
import * as bcrypt from 'bcrypt';

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
    @JoinColumn()
    hotline: Hotline;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
