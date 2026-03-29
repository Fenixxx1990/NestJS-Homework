import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
  size?: "s" | "m" | "l";
  children: React.ReactNode;
}
