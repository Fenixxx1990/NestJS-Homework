import { getPost } from "@/api/post";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./post.module.css";
import Image from "next/image";
import { Title, P, Like } from "@/components";

export const metadata: Metadata = {
  title: "Пост",
};

export default async function PagePost({
  params,
}: {
  params: { alias: string };
}): Promise<React.JSX.Element> {
  const { alias: id } = await params;
  const post = await getPost(id);
  console.log(post);
  if (!post) {
    notFound();
  }
  return (
    <div className={styles.main}>
      <Title size="l">{post.title}</Title>
      <div className={styles.front}>
        <div>Front-end · 1 месяц назад · 3 минуты · </div>
        <Like>{5}</Like>
      </div>
      <Image
        loading="eager"
        src={"/Image.jpg"}
        alt="Изображение кароточки"
        width={687}
        height={440}
      />
      <P size="l">{post.body}</P>
    </div>
  );
}
