import { API } from "@/app/api";
import type { IPost } from "@/interface/posts.interface";

export async function getPost(id: string): Promise<IPost | null> {
  const res = await fetch(`${API.posts}/${id}`, {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}
