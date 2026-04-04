import { type JSX } from "react";
import styles from "./Button.module.css";
import { type IButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({
  children,
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <>
      <button {...props} className={cn(styles.button, className)}>
        {children}
      </button>
    </>
  );
};
