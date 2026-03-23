import { type JSX } from "react";
import styles from "./Card.module.css";
import { type ICardProps } from "./Card.props";
import Image from "next/image";
import { Like, P, Title } from "@/components";
import ArrowIcon from "./arrow.svg";

export const Card = ({
  title,
  paragraph,
  imageUrl,
  likeCount,
  lastTime,
  spendTime,
  href,
}: ICardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={imageUrl}
          alt="Изображение кароточки"
          width={280}
          height={160}
        />
      </div>
      <div className={styles.textblock}>
        <div className={styles.front}>
          <div>Front-end · {lastTime}</div>
          <Like>{likeCount}</Like>
        </div>
        <Title>{title}</Title>
        <P>{paragraph}</P>
      </div>
      <div className={styles.footer}>
        <div className={styles.time}>{spendTime}</div>
        <a className={styles.read} href={href}>
          Читать <ArrowIcon />
        </a>
      </div>
    </div>
  );
};
