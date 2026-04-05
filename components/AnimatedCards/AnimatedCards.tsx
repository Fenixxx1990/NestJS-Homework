"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components";
import type { JSX } from "react";
import type { IAnimatedCardsProps } from "./AnimatedCards.props";

const MotionDiv = motion.create("div");

export const AnimatedCards = ({
  posts,
  className,
}: IAnimatedCardsProps): JSX.Element => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Задержка между карточками
        delayChildren: 0.01, // Задержка перед первой карточкой
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      <MotionDiv
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {posts.map((post) => (
          <MotionDiv
            key={post.id}
            variants={itemVariants}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              title={post.title}
              paragraph={post.body}
              imageUrl="/Image.jpg"
              likeCount={5}
              lastTime="1 месяц назад"
              spendTime="3 минуты"
              href={`/posts/${post.id}`}
            />
          </MotionDiv>
        ))}
      </MotionDiv>
    </AnimatePresence>
  );
};
