import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // move to .env for prod

export const generateBillPdf = async (billData) => {
  const response = await axios.post(`${API_BASE_URL}/generate-pdf`, billData, {
    responseType: "blob", // important for binary PDF
  });
  return response;
};