import { type JSX } from "react";
import styles from "./Comment.module.css";
import { type ICommentProps } from "./Comment.props";
import cn from "classnames";
import { P } from "../P/P";

export const Comment = ({
  comment,
  className,
  ...props
}: ICommentProps): JSX.Element => {
  return (
    <div className={cn(styles.comment, className, {})} {...props}>
      <div>
        <span className={styles.name}>{comment.name}</span> ·{" "}
        <span className={styles.email}>{comment.email}</span>
      </div>
      <P size="m">{comment.body}</P>
    </div>
  );
};
