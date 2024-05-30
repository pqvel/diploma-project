import { db } from "@/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const createQuestion = async (testId: number) => {
  const question = await db.question.create({
    data: {
      test: {
        connect: {
          id: testId,
        },
      },
    },
  });

  revalidatePath("/");

  return question;
};

export const changeQuestion = async (state: any, formData: any) => {
  const schema = z.object({
    id: z.string().min(1).transform(Number),
    title: z.string().min(1),
    answer: z.string().min(1),
  });

  const { id, title, answer } = schema.parse({
    id: formData.get("id"),
    title: formData.get("title"),
    answer: formData.get("answer"),
  });

  const question = await db.question.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  revalidatePath("/");

  return question;
};

export const deleteQuestion = async (id: number) => {
  const question = await db.question.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");

  return question;
};
