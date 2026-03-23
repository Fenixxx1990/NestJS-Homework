import { type JSX } from "react";
import LikeIcon from "./like.svg";
import { type IButtonProps } from "./LikeButton.props";
import styles from "./LikeButton.module.css";
import cn from "classnames";

export const LikeButton = ({
  isLiked,
  postId,
  sendLike,
  setLike,
  ...props
}: IButtonProps): JSX.Element => {
  const onclick = (): void => {
    setLike(!isLiked);
    sendLike(postId, !isLiked);
  };
  return (
    <button
      className={cn(styles.button, {
        [styles.liked]: isLiked,
      })}
      {...props}
      onClick={() => onclick()}
    >
      <LikeIcon className={cn(styles.svg, { [styles.svgliked]: isLiked })} />
    </button>
  );
};
