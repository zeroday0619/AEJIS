export interface CertificatePlatform {
  generateCertificateId(): string;
  createObjectUrl(blob: Blob): string;
  revokeObjectUrl(url: string): void;
  openPrintWindow(): Window | null;
  printWindow(windowRef: Window, url: string): void;
  downloadFile(url: string, filename: string): void;
}

export interface CertificateRenderer {
  render(data: import("@/lib/certificate/domain/types").CertificatePrintData): Promise<Blob>;
}
