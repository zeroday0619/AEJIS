import { BrowserCertificatePlatform } from "@/lib/certificate/platform/browser-certificate-platform";
import type { CertificatePlatform } from "@/lib/certificate/platform/types";

let browserPlatform: CertificatePlatform | null = null;

export function detectCertificatePlatform(): CertificatePlatform {
  if (!browserPlatform) {
    browserPlatform = new BrowserCertificatePlatform();
  }

  return browserPlatform;
}
