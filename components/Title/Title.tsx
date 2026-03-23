import { type ITitleProps } from "./Title.props";
import cn from "classnames";
import styles from "./Title.module.css";

export function Title({
  size = "m",
  children,
  className,
  ...props
}: ITitleProps): React.JSX.Element {
  return (
    <h2
      className={cn(styles.h2, className, {
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </h2>
  );
}
