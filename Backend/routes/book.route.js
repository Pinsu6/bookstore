import express from "express";
import { addBook, deleteBook, editBook, fetchOneBook, getbook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getbook);
router.post("/addbook", addBook);
router.delete("/delete/:_id", deleteBook);
router.put("/edit/:_id", editBook);
router.get("/fetch/:_id",fetchOneBook)

export default router;
