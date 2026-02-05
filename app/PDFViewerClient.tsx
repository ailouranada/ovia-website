"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// ✅ Use legacy worker (classic .js) and set it inside client component
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PDFViewerClient({path}: any) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
        <button onClick={() => setPageNumber((p) => Math.max(1, p - 1))} disabled={pageNumber <= 1}>
          Prev
        </button>
        <button
          onClick={() => setPageNumber((p) => Math.min(numPages || p + 1, p + 1))}
          disabled={numPages ? pageNumber >= numPages : true}
        >
          Next
        </button>
        <div>Page {pageNumber} of {numPages || "…"}</div>
      </div>

      <Document
        file={path}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div>Loading PDF…</div>}
      >
        <Page pageNumber={pageNumber} width={800} />
      </Document>
    </div>
  );
}
