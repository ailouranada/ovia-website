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

export default function TermsAndConditions() {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <Document
        file="/terms_conditions.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(err) => console.error("PDF load error:", err)}
        loading={<div>Loading PDF…</div>}
        error={<div style={{ color: "red" }}>Failed to load PDF.</div>}
      >
        {/* Show page 1 while numPages is not ready yet */}
        {numPages === 0 ? (
          <Page pageNumber={1} width={800} />
        ) : (
          Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={800}
            />
          ))
        )}
      </Document>
    </div>
  );
}
