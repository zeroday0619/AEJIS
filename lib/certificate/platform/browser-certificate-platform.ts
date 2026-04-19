import type { CertificatePlatform } from "@/lib/certificate/platform/types";

export class BrowserCertificatePlatform implements CertificatePlatform {
  generateCertificateId(): string {
    const uuid = globalThis.crypto?.randomUUID?.();
    if (uuid) {
      return `AJTDS-${uuid.toUpperCase()}`;
    }

    const randomBytes = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256));
    randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40;
    randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80;

    const hex = randomBytes.map((value) => value.toString(16).padStart(2, "0")).join("");
    const fallbackUuid = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;

    return `AJTDS-${fallbackUuid.toUpperCase()}`;
  }

  createObjectUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }

  revokeObjectUrl(url: string): void {
    URL.revokeObjectURL(url);
  }

  openPrintWindow(): Window | null {
    return window.open("", "_blank");
  }

  printWindow(windowRef: Window, url: string): void {
    windowRef.location.href = url;
    windowRef.onload = () => {
      windowRef.focus();
      windowRef.print();
    };
  }

  downloadFile(url: string, filename: string): void {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  }
}
