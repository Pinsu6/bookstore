import express from "express";
import { login, signUp, user } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/getuser",user)

export default router;
