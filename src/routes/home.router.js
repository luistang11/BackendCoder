import { Router } from "express";
import * as HomeController from '../controllers/home.controler.js'
const router=Router();

router.get('/',HomeController.obtenerVistaLogin)




export default router;