import { API } from "@/app/api";
import type { IPost } from "@/interface/posts.interface";

export async function getPosts(): Promise<IPost[] | null> {
  const res = await fetch(API.posts, {
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
