import express from "express";
import {
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuth, getMyProfile);

export default router;
