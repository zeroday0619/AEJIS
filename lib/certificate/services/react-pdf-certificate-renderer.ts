import type { CertificatePrintData } from "@/lib/certificate/domain/types";
import type { CertificateRenderer } from "@/lib/certificate/platform/types";

export class ReactPdfCertificateRenderer implements CertificateRenderer {
  async render(data: CertificatePrintData): Promise<Blob> {
    const { renderCertificatePdfBlob } = await import("@/components/certificate-print-document");
    return renderCertificatePdfBlob(data);
  }
}
