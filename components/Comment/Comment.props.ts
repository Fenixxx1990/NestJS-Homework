import type { IComment } from "@/interface/comment.interface";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICommentProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  comment: IComment;
}
