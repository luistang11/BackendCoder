import { Router } from "express";
import {obtenerProductos} from '../controllers/home.controler.js'
const router=Router();

router.get('/',obtenerProductos)

export default router;