import { Router } from "express";
import createProductsController from "../controllers/products/createProducts.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listOneProductController from "../controllers/products/listOneProduct.controller";
import listProductAllInformationController from "../controllers/products/listProductAllInformation.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import updateProductController from "../controllers/products/updateProduct.controller";
import validateSeriallizerMiddleware from "../middlewares/validadeSeriallizer.middleWare";

const router = Router();

router.post("", validateSeriallizerMiddleware, createProductsController);
router.get("", listProductsController);
router.get("/:id", listOneProductController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);
router.get("/category/:category_id", listProductAllInformationController);

export default router;
