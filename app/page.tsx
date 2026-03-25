import { Card } from "@/components";
import styles from "./page.module.css";
import { getPosts } from "@/api/posts";
import { notFound } from "next/navigation";

export default async function Home(): Promise<React.JSX.Element> {
  const array = new Array(10).fill(0);
  const posts = await getPosts();
  if (!posts) {
    notFound();
  }
  return (
    <main className={styles.main}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
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
