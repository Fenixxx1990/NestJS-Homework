import { type JSX } from "react";
import styles from "./P.module.css";
import { type IPProps } from "./P.props";
import cn from "classnames";

export const P = ({
  size = "m",
  children,
  className,
  ...props
}: IPProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
