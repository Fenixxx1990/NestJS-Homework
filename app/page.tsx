"use client";
import { Card, LikeButton } from "@/components";
import { useState } from "react";

export default function Home(): React.JSX.Element {
  const [like, setLike] = useState<boolean>(false);
  const handleLike = async (id: number, isLiked: boolean): Promise<void> => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ liked: isLiked }),
      });
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return (
    <main>
      <Card
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
      <LikeButton
        isLiked={like}
        postId={1}
        sendLike={handleLike}
        setLike={setLike}
      />
    </main>
  );
}
