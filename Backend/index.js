import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import cors from "cors";
import userRoute from "./routes/user.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const URI = process.env.MongoDBURI;
app.use(cors());
app.use(express.json())
try {
  mongoose.connect(URI);
  console.log("conntected");
} catch (error) {
  console.log(error);
}

//defining route
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log("server started");
});
