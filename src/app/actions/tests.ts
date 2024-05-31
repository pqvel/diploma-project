"use server";
import { notFound } from "next/navigation";
import { TypeTest } from "@prisma/client";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/db";

export const createTest = async (lessonSlug: string) => {
  const lesson = await db.lesson.findUnique({
    where: { slug: lessonSlug },
    select: {
      _count: {
        select: {
          lectures: true,
          tests: true,
        },
      },
    },
  });

  if (!lesson) notFound();

  const order = lesson._count.lectures + lesson._count.tests;

  const test = await db.test.create({
    data: {
      order: order,
      typeTest: TypeTest.One,
      lesson: {
        connect: {
          slug: lessonSlug,
        },
      },
    },
  });

  revalidatePath("/");

  return test;
};

export const changeTest = async (state: any, formData: any) => {
  const schema = z.object({
    id: z.string().min(1).transform(Number),
    typeTest: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    lessonSlug: z.string().min(1),
  });

  const obj = {
    id: formData.get("id"),
    typeTest: formData.get("typeTest"),
    title: formData.get("title"),
    description: formData.get("description"),
    lessonSlug: formData.get("lessonSlug"),
  };

  const { id, typeTest, title, description, lessonSlug } = schema.parse(obj);

  const test = await db.test.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      typeTest: typeTest as TypeTest,
      lesson: {
        connect: {
          slug: lessonSlug,
        },
      },
    },
  });

  revalidatePath("/");

  return test;
};

export const deleteTest = (id: number) => {
  const test = db.test.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");

  return test;
};
