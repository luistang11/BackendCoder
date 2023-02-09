import { Router } from "express";
import {obtenerVistaProductos} from '../controllers/home.controler.js'
const router=Router();

router.get('/',obtenerVistaProductos)

export default router;