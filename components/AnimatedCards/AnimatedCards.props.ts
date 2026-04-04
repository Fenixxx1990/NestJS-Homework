import type { IPost } from "@/interface/posts.interface";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IAnimatedCardsProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  posts: IPost[];
}
