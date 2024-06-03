import express from "express";
import {
  addSuggest,
  deleteSuggest,
  getSuggest,
} from "../controller/suggest.controller.js";

const router = express.Router();

router.post("/suggest", addSuggest);
router.get("/getsuggest", getSuggest);
router.delete("/delete/:_id", deleteSuggest);
export default router;
