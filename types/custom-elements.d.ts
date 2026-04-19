import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "jp-certificate-preview": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        patient?: string;
        birth?: string;
        sex?: string;
        address?: string;
        doctor?: string;
        hospital?: string;
        level?: string;
        score?: string;
        note?: string;
        issued?: string;
        serial?: string;
      };
    }
  }
}

export {};
