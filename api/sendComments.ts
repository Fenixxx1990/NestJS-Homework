import { API } from "@/api/api";
import type { ICommentForm } from "@/components/PageComponents/CommentForm/CommentForm.interface";
import type { IComment } from "@/interface/comment.interface";

export async function sendComment(
  formdata: ICommentForm,
  postId: string,
): Promise<IComment[] | null> {
  const res = await fetch(`${API.posts}/${postId}`, {
    method: "PATCH",
    body: JSON.stringify({ ...formdata, postId: postId.toString() }),
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
