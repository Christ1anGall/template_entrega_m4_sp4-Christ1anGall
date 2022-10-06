import {
  startDatabase
} from "./database/index.js";
import categoriesRouter from "./routers/categories.routes";
import productsRouter from "./routers/products.routes";

import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

export default app.listen(3333, () => {
  startDatabase();
});
