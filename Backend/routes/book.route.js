import express from "express";
import { addBook, deleteBook, getbook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getbook);
router.post("/addbook", addBook);
router.delete("/delete/:_id", deleteBook);

export default router;
