import { Router } from "express";
import {socketServer} from '../app.js'
import * as ProductsController from "../controllers/products.controller.js";

const router=Router();

router.get('/',ProductsController.getProducts)
router.get("/:idProducto",ProductsController.getProduct);
router.post('/',ProductsController.createProduct)
router.delete('/:idProducto',ProductsController.deleteProduct)
router.put('/:idProducto', ProductsController.updateProduct)

export default router;