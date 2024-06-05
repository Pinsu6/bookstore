import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
  pdf: String,
  file:String
})

const PdfSchema = mongoose.model("pdf", pdfSchema)
export default PdfSchema;