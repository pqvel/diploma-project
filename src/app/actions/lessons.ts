"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { z } from "zod";
import { db } from "@/db";

export const createLesson = async (state: any, formData: any) => {
  const schema = z.object({
    title: z.string().min(1),
    chapterSlug: z.string().min(1),
  });

  const { title, chapterSlug } = schema.parse({
    title: formData.get("title"),
    chapterSlug: formData.get("chapterSlug"),
  });

  await db.lesson.create({
    data: {
      title,
      slug: slugify(title, {
        locale: "ru",
        lower: true,
      }),
      chapter: {
        connect: {
          slug: chapterSlug,
        },
      },
    },
  });

  revalidatePath("/");
  redirect(`/admin/chapters/${chapterSlug}`);
};

export const changeLessonActive = async (id: number, active: boolean) => {
  const data = await db.lesson.update({
    where: {
      id,
    },
    data: {
      active,
    },
  });

  revalidatePath("/");

  return data;
};

export const changeLesson = async (state: any, formData: any) => {
  const schema = z.object({
    id: z.string().min(1).transform(Number),
    title: z.string().min(1),
  });

  const { title, id } = schema.parse({
    title: formData.get("title"),
    id: formData.get("id"),
  });

  await db.chapter.update({
    where: {
      id,
    },
    data: {
      title: title,
      slug: slugify(title, {
        locale: "ru",
        lower: true,
      }),
    },
  });

  revalidatePath("/");
};

export const deleteLesson = async (id: number) => {
  const data = await db.lesson.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");

  return data;
};
