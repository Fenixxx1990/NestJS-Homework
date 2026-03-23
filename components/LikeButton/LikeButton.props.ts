import type { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLiked: boolean;
  postId: number;
  sendLike(postId: number, isLiked: boolean): void;
  setLike(isLiked: boolean): void;
}
