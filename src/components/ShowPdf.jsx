import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ShowPdf() {
  const navigate = useNavigate();
  const { name } = useParams();

  const showPdf = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/pdf/pdfread/${name}`
      );
      console.log("pdf file is ", response.data.data[0].file);
      window.open(
        `http://localhost:4000/pdf/files/${response.data.data[0].file}`,
        "_blank"
      );
      navigate("/")
    } catch (error) {
      console.error("Error fetching PDF:", error);
      // Handle errors gracefully (e.g., display error message to user)
    }
  };

  useEffect(() => {
    showPdf();
  }, []);
  return null;
}

export default ShowPdf;
