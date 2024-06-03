import express from "express";
import {
  deleteUser,
  login,
  signUp,
  user,
} from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/getuser", user);
router.delete("/delete/:_id", deleteUser);

export default router;
