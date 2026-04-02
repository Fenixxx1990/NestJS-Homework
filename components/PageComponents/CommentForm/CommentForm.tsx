"use client";
import { type JSX } from "react";
import styles from "./CommentForm.module.css";
import { type ICommentFormProps } from "./CommentForm.props";
import cn from "classnames";
import { Button, Input, Textarea } from "@/components";
import { useForm } from "react-hook-form";
import type { ICommentForm } from "./CommentForm.interface";
import { sendComment } from "@/api/sendComments";

export const CommentForm = ({
  postId,
  className,
  ...props
}: ICommentFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICommentForm>();

  const onSubmit = async (formData: ICommentForm): Promise<void> => {
    try {
      const data = await sendComment(formData, postId);
      if (data) {
        console.log(data);
        reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(className, styles.commentform)}
      {...props}
    >
      <Input
        {...register("name", {
          required: { value: true, message: "Заполните имя" },
        })}
        placeholder="Имя"
        error={errors.name}
      />
      <Textarea
        {...register("comment", {
          required: { value: true, message: "Заполните описание" },
        })}
        className={styles.comment}
        error={errors.comment}
        placeholder="Комментарий"
      />
      <Button className={styles.button}>Отправить</Button>
    </form>
  );
};
