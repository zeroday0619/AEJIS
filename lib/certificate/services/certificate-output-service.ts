import type { CertificatePrintData } from "@/lib/certificate/domain/types";
import type { CertificatePlatform, CertificateRenderer } from "@/lib/certificate/platform/types";

export class CertificateOutputService {
  private cachedBlob: { key: string; blob: Blob } | null = null;

  constructor(
    private readonly renderer: CertificateRenderer,
    private readonly platform: CertificatePlatform,
  ) {}

  generateCertificateId(): string {
    return this.platform.generateCertificateId();
  }

  async getPdfBlob(data: CertificatePrintData): Promise<Blob> {
    const cacheKey = JSON.stringify(data);

    if (this.cachedBlob?.key === cacheKey) {
      return this.cachedBlob.blob;
    }

    const blob = await this.renderer.render(data);
    this.cachedBlob = { key: cacheKey, blob };

    return blob;
  }

  async createPreviewUrl(data: CertificatePrintData): Promise<string> {
    const blob = await this.getPdfBlob(data);
    return this.platform.createObjectUrl(blob);
  }

  revokePreviewUrl(url: string): void {
    this.platform.revokeObjectUrl(url);
  }

  async print(data: CertificatePrintData): Promise<void> {
    const printWindow = this.platform.openPrintWindow();
    const blob = await this.getPdfBlob(data);
    const blobUrl = this.platform.createObjectUrl(blob);

    if (printWindow) {
      this.platform.printWindow(printWindow, blobUrl);
    } else {
      this.platform.downloadFile(blobUrl, `${data.serial}.pdf`);
    }

    window.setTimeout(() => this.platform.revokeObjectUrl(blobUrl), 60_000);
  }
}
