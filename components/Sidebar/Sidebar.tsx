import { type JSX } from "react";
import styles from "./Sidebar.module.css";
import { type SidebarProps } from "./Sidebar.props";
import GitLogo from "./git-logo.svg";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={styles.sidebar} {...props}>
      <div className={styles.text}>.my_blog</div>
      <GitLogo />
    </div>
  );
};
