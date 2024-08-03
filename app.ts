import { Request, Response, Express, Router } from "express";
import express from 'express'
import  env  from "dotenv";
import { customErrorHandler, DefaultErrorHandler } from "./middleware/errorHandles.js";
import {router} from "./routes/Category.js"
import Prouter from "./routes/Product.js";
import Srouter from "./routes/Shop.js";
import AppDataSource from "./db/dbConfig.js";



const app: Express = express();




app.use(express.json())

const PORT = process.env.PORT || 5000;
env.config();
app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})

app.use(customErrorHandler)

app.use(DefaultErrorHandler)

app.use("/category",router)
app.use("/product",Prouter)
app.use("/shop",Srouter)
AppDataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});
app.listen(PORT, () => {

    console.log(`the server is running on: http://localhost:${PORT}`)
});

export default app
