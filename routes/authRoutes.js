import { Router } from "express";
import {
  validateLoginInput,
  validateUserInput,
} from "../middlewares/validationMiddleware.js";
import { register, login, logout } from "../controllers/authController.js";

const router = Router();

router.post("/register", validateUserInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
