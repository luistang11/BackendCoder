import { Router } from "express";
import {getCartByID} from "../controllers/cartView.controler.js"

const router=Router();


router.get('/:id',getCartByID);



export default router;