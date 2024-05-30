"use server";
import { notFound } from "next/navigation";
import { z } from "zod";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export const createLecture = async (lessonSlug: string) => {
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

  const lecture = await db.lecture.create({
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

export const changeLecture = async (state: any, formData: any) => {
  const schema = z.object({
    lectureId: z.string().min(1).transform(Number),
    content: z.string().min(1),
  });

  const { content, lectureId } = schema.parse({
    content: formData.get("content"),
    lectureId: formData.get("lectureId"),
  });

  await db.lecture.update({
    where: {
      id: lectureId,
    },
    data: {
      content,
    },
  });

  revalidatePath("/");
};

export const deleteLecture = (id: number) => {
  return db.lecture.delete({
    where: {
      id,
    },
  });
};
