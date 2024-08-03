import { DataSource } from "typeorm";
import{Product} from "./entities/Product.js"

import { Category } from "./entities/Category.js";
import { Hotline } from "./entities/Hotline.js";
import { Shop } from "./entities/Shop.js";




const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "Shop-db",
    synchronize: true,
    logging: false,
    entities: [Shop,Product,Category,Hotline]

})

export default AppDataSource