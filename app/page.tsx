import { Card } from "@/components";
import styles from "./page.module.css";
import { getPosts } from "@/api/posts";
import { notFound } from "next/navigation";

export default async function Home(): Promise<React.JSX.Element> {
  const takePosts = await getPosts();
  if (!takePosts) {
    notFound();
  }
  const posts = takePosts.slice(0, 10);
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            paragraph={post.body}
            imageUrl={"/Image.jpg"}
            likeCount={5}
            lastTime={"1 месяц назад"}
            spendTime={"3 минуты"}
            href={`/posts/${post.id}`}
          ></Card>
        ))}
      </div>
    </main>
  );
}
