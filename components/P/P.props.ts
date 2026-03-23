import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
  size?: "m" | "l";
  children: React.ReactNode;
}
