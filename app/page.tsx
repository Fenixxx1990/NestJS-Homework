"use client";
import { Card } from "@/components";
import styles from "./page.module.css";

export default function Home(): React.JSX.Element {
  const array = new Array(10).fill(0);
  return (
    <main>
      <div className={styles.wrapper}>
        {array.map((_, index) => (
          <Card
            key={index}
            title={"Как работать с CSS Grid"}
            paragraph={
              "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
            }
            imageUrl={"/Image.jpg"}
            likeCount={5}
            lastTime={"1 месяц назад"}
            spendTime={"3 минуты"}
            href={"#"}
          ></Card>
        ))}
      </div>
    </main>
  );
}
