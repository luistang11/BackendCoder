import { Router } from "express";
import * as CartsController from "../controllers/carts.controller.js"

const router=Router();

router.get('/',CartsController.getCarts)

router.get('/:id',CartsController.getCartByID);

router.post('/',CartsController.createCart)

router.post('/:cid/product/:pid',CartsController.addProductToCart)




export default router;