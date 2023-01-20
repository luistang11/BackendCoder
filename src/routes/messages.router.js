import { Router } from "express";
import { obtenerMessages } from "../controllers/messages.controller.js";
const router=Router();

router.get('/',obtenerMessages)

export default router;