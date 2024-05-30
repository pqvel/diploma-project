import { notFound } from "next/navigation";
import { db } from "@/db";

export const createExerciseWithOneAnswer = async (lessonSlug: string) => {
  const lesson = await db.lesson.findUnique({
    where: { slug: lessonSlug },
    select: {
      _count: {
        select: {
          lectures: true,
          exercisesWithOneAnswer: true,
        },
      },
    },
  });

  if (!lesson) notFound();

  const order = lesson._count.lectures + lesson._count.exercisesWithOneAnswer;

  const exerciseWithOneAnswer = await db.exerciseWithOneAnswer.create({
    data: {
      order,
      content: "",
      lesson: {
        connect: {
          slug: lessonSlug,
        },
      },
    },
  });

  revalidatePath("/");

  return lecture;
};
