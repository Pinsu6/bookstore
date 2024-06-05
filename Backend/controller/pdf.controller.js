import PdfSchema from "../model/pdf.model.js";

export const getPdf = async (req, res) => {
  const { pdf } = req.body;

  const file = req.file.filename;
  try {
    const data = new PdfSchema({
      pdf,
      file,
    });
    console.log("data is ", data);
    await data.save();
    res.status(200);
  } catch (error) {
    console.log("Error from pdf controller ", error);
  }
};
export const pdfRead = async (req, res) => {
  try {
    let { name } = req.params;
    // Remove the colon from the beginning of the name
    name = name.replace(":", "");
    console.log("Name received from frontend:", name);
    const data = await PdfSchema.find({ pdf: name });
    console.log("Data found:", data);
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error from pdfRead:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
