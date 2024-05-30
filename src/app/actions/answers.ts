import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";

export const createAnswer = async (questionId: number) => {
  const answer = await db.answer.create({
    data: {
      question: {
        connect: {
          id: questionId,
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
        question: true,
      },
    });

    if (!answer) {
      throw new Error("Answer not found");
    }

    const updatedQuestion = await db.question.update({
      where: {
        id: answer.questionId,
      },
      data: {
        correctAnswerId: isCorrect ? answer.questionId : null,
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
