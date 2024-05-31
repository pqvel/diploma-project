import { db } from "@/db";
import { notFound } from "next/navigation";

export const getActiveLesson = async (slug: string) => {
  const lesson = await db.lesson.findUnique({
    where: {
      slug,
    },
  });

  if (!lesson) {
    return notFound();
  }

  return lesson;
};

export const getActiveLessonWithContent = async (slug: string) => {
  const lesson = await db.lesson.findFirst({
    where: {
      slug,
    },
    include: {
      lectures: true,
      tests: true,
    },
  });

  if (!lesson) {
    return notFound();
  }

  const combinedContent = [...lesson.lectures, ...lesson.tests].sort(
    (a, b) => a.order - b.order
  );

  return {
    lesson: lesson,
    lessonContent: combinedContent,
  };
};
