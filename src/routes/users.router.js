import { Router } from "express";
import * as UserController from "../controllers/users.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const router=Router();

router.get("/", UserController.obtenerVistaRegister);
router.post("/", UserController.createUser);
router.get("/:email", auth, UserController.getUser);
router.put("/updatePassword/:email", auth, UserController.updatePassword);

export default router;