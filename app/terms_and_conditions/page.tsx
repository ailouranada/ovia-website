"use client";

import { useEffect, useRef } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function TermsAndConditions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const pdf = await getDocument("/terms_conditions.pdf").promise;
      console.log("pages:", pdf.numPages);

      const container = containerRef.current;
      if (!container) return;

      // clear on hot reload
      container.innerHTML = "";

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        if (cancelled) return;

        const page = await pdf.getPage(pageNum);

        // responsive scale based on container width
        const maxWidth = container.clientWidth || 900;
        const viewportAt1 = page.getViewport({ scale: 1 });
        const scale = Math.min(2, maxWidth / viewportAt1.width);
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) continue;

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = "100%";
        canvas.style.height = "auto";
        canvas.style.display = "block";
        canvas.style.marginBottom = "16px";
        canvas.style.borderRadius = "12px";

        container.appendChild(canvas);

        await page.render({ canvasContext: ctx, viewport }).promise;
      }
    })().catch(console.error);

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <div ref={containerRef} />
    </div>
  );
}
