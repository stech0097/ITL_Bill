import axios from "axios";

const API_BASE_URL = "https://44kjyz2ar56xf4pmlideattsne0njnoe.lambda-url.us-east-1.on.aws/"; // move to .env for prod

export const generateBillPdf = async (billData) => {
  const response = await axios.post(`${API_BASE_URL}/generate-pdf`, billData, {
    responseType: "blob", // important for binary PDF
  });
  return response;
};