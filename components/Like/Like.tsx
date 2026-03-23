import { type ILikeProps } from "./Like.props";
import cn from "classnames";
import styles from "./Like.module.css";
import LikeIcon from "./like.svg";

export function Like({
  children,
  className,
  ...props
}: ILikeProps): React.JSX.Element {
  return (
    <div className={cn(styles.like, className)} {...props}>
      {children} <LikeIcon />
    </div>
  );
}
