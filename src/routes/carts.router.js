import { Router } from "express";
import * as CartsController from "../controllers/carts.controller.js"

const router=Router();

router.get('/',CartsController.getCarts)

router.get('/:id',CartsController.getCartByID);

router.post('/',CartsController.createCart)

router.post('/:cid/product/:pid',CartsController.addProductToCart)
router.put('/:cid/product/:pid',CartsController.updateProductToCart)

router.put(':cid',CartsController.updateCart)
router.delete('/:cid/product/:pid',CartsController.deleteProductFromCart);
router.delete('/:cid',CartsController.deleteCart);


export default router;