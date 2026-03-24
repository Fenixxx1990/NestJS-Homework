"use client";
import { LikeButton } from "@/components";
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
    <div>
      <LikeButton
        isLiked={like}
        postId={1}
        sendLike={handleLike}
        setLike={setLike}
      />
    </div>
  );
}
