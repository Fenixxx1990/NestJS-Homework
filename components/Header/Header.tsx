"use client";
import { type JSX } from "react";
import styles from "./Header.module.css";
import { type HeaderProps } from "./Header.props";
import GitLogo from "./git-logo.svg";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const { githubUrl } = useAppContext();

  return (
    <header className={styles.header} {...props}>
      <div className={styles.text}>.my_blog</div>
      <span className={styles.url}>
        <GitLogo />
        <Link href={githubUrl}>{githubUrl}</Link>
      </span>
    </header>
  );
};
