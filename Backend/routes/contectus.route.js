import express from "express";
import { deleteMessage, getMessage, sendMessage } from "../controller/contectus.controller.js";

const route = express.Router();

route.post("/send", sendMessage);
route.get("/get", getMessage);
route.delete("/delete/:_id", deleteMessage);

export default route;
