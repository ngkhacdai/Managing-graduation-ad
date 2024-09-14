import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { useSearchParams } from "react-router-dom";

const PreviewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const decodeUrl = (url) => {
    const adjustedUrl = url.replace(/_/g, "/");
    return decodeURIComponent(adjustedUrl);
  };
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer fileUrl={decodeUrl(searchParams.get("file"))} />
    </Worker>
  );
};

export default PreviewPage;
