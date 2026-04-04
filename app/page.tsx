import { AnimatedCards } from "@/components";
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
      <AnimatedCards className={styles.wrapper} posts={posts} />
    </main>
  );
}
