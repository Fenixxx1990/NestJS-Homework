import { API } from "@/app/api";
import type { IComment } from "@/interface/comment.interface";

export async function getComments(postId: string): Promise<IComment[] | null> {
  const res = await fetch(`${API.comments}?postId=${postId}`, {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });
  if (!res.ok) {
    return null;
  }
  console.log("revalidating getMenu");

  return res.json();
}
