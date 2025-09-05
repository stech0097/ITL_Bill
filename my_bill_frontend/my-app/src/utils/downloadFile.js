// export const downloadFile = (response, defaultName = "file.pdf") => {
//   const blob = new Blob([response.data], { type: "application/pdf" });
//   const link = document.createElement("a");
//   link.href = window.URL.createObjectURL(blob);

//  // Debug: log all headers
//   console.log("All response headers:", response.headers);

//   // Try extracting filename from headers
//   const contentDisposition = response.headers["content-disposition"];
//   let filename = defaultName;
//   if (contentDisposition && contentDisposition.indexOf("filename=") !== -1) {
//     //const match = contentDisposition.match(/filename="?([^"]+)"?/);
//     // if (match) filename = match[1];
//     //  if (match && match[1]) {
//     //   filename = match[1];
//     let extracted = contentDisposition.split("filename=")[1].trim();
//     extracted = extracted.replace(/['"]/g, ""); // remove quotes
//     filename = extracted;
//   }

//     console.log("Using filename:", filename);
//     link.setAttribute("download", filename);
//     document.body.appendChild(link); // ✅ Firefox compatibility
//     link.click();
//     document.body.removeChild(link);

//   // link.download = filename;
//   // link.click();
// };

export const downloadFile = (response, defaultName = "file.pdf") => {
  const blob = new Blob([response.data], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  // Axios v1+ -> headers is AxiosHeaders, so use .get()
  let disposition = "";
  if (typeof response.headers.get === "function") {
    disposition = response.headers.get("content-disposition");
  } else {
    disposition = response.headers["content-disposition"];
  }

  console.log("Content-Disposition header:", disposition);

  let filename = defaultName;
  if (disposition && disposition.indexOf("filename=") !== -1) {
    let extracted = disposition.split("filename=")[1].trim();
    extracted = extracted.replace(/['"]/g, ""); // remove quotes
    filename = extracted;
  }

  console.log("Using filename:", filename);

  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
