"use client";
import { useEffect, type JSX } from "react";
import styles from "./Header.module.css";
import { type HeaderProps } from "./Header.props";
import GitLogo from "./git-logo.svg";
import { useAppContext } from "@/context/AppContext";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const { githubUrl, setGithubUrl } = useAppContext();

  useEffect(() => {
    setGithubUrl("https://github.com/Fenixxx1990");
  }, [setGithubUrl]);

  return (
    <header className={styles.header} {...props}>
      <div className={styles.text}>.my_blog</div>
      <span className={styles.url}>
        <GitLogo />
        {githubUrl}
      </span>
    </header>
  );
};
