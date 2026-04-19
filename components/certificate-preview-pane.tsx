"use client";

import { memo } from "react";

export const CertificatePreviewPane = memo(function CertificatePreviewPane({
  pdfUrl,
  certificateId,
  isLoading,
}: {
  pdfUrl: string | null;
  certificateId: string;
  isLoading: boolean;
}) {
  return (
    <section className="certificate-wrap rounded-box border border-base-300/80 bg-paper-grain p-3 shadow-certificate md:p-6 overflow-hidden">
      <div className="mb-3 flex items-center justify-between gap-3 text-sm text-neutral/75">
        <span>Live PDF Preview</span>
        <span className="truncate">{certificateId}</span>
      </div>

      <div className="overflow-hidden rounded-box border border-base-300/80 bg-base-100">
        {pdfUrl ? (
          <iframe
            title="Certificate PDF preview"
            src={pdfUrl}
            className="h-[1120px] w-full bg-white"
          />
        ) : (
          <div className="flex h-[1120px] items-center justify-center bg-base-100 text-sm text-neutral/60">
            {isLoading ? "Rendering PDF preview..." : "Preview unavailable"}
          </div>
        )}
      </div>
    </section>
  );
});
