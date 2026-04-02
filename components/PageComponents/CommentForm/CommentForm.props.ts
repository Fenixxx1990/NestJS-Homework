import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICommentFormProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> {
  postId: string;
}
