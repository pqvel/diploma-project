"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";

export const createAnswer = async (testId: number) => {
  const answer = await db.answer.create({
    data: {
      test: {
        connect: {
          id: testId,
        },
      },
    },
  });

  revalidatePath("/");

  return answer;
};

export const changeAnswer = async (state: any, formData: any) => {
  const schema = z.object({
    id: z.string().min(1).transform(Number),
    title: z.string().min(1),
  });

  const { id, title } = schema.parse({
    id: formData.get("id"),
    title: formData.get("title"),
  });

  const answer = await db.answer.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  revalidatePath("/");
  return answer;
};

export const changeCorrectAnswer = async (
  answerId: number,
  isCorrect: boolean
) => {
  try {
    // Find the answer and its related question
    const answer = await db.answer.findUnique({
      where: {
        id: answerId,
      },
      include: {
        test: true,
      },
    });

    if (!answer) {
      throw new Error("Answer not found");
    }

    const updatedQuestion = await db.test.update({
      where: {
        id: answer.testId,
      },
      data: {
        correctAnswerId: isCorrect ? answer.testId : null,
      },
      include: {
        correctAnswer: true,
      },
    });

    revalidatePath("/");

    return updatedQuestion;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while setting the correct answer");
  }
};

export const deleteAnswer = async (id: number) => {
  const answer = await db.answer.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");

  return answer;
};
