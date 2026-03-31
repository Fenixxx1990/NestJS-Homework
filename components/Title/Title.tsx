import { type ITitleProps } from "./Title.props";
import cn from "classnames";
import styles from "./Title.module.css";

export function Title({
  size = "s",
  children,
  className,
  ...props
}: ITitleProps): React.JSX.Element {
  return (
    <h2
      className={cn(styles.h2, className, {
        [styles.m]: size === "m",
        [styles.s]: size === "s",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </h2>
  );
}
