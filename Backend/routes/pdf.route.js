import express from "express";
import { getPdf, pdfRead } from "../controller/pdf.controller.js";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });
const route = express.Router();
route.use("/files", express.static("files"));

route.post("/pdfget", upload.single("file"), getPdf);
route.get("/pdfread/:name", pdfRead);
export default route;
