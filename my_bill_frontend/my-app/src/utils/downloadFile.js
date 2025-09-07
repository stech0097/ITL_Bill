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
