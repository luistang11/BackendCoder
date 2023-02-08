import { Router } from "express";
import * as UserController from "../controllers/users.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const router=Router();

router.post("/", UserController.createUser);
router.get("/:email", auth, UserController.getUser);


export default router;