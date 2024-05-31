"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { z } from "zod";
import { db } from "@/db";

export const createChapter = async (state: any, formData: any) => {
  const schema = z.object({
    title: z.string().min(1),
  });

  const { title } = schema.parse({
    title: formData.get("title"),
  });

  await db.chapter.create({
    data: {
      title,
      slug: slugify(title, {
        locale: "ru",
        lower: true,
      }),
    },
  });

  revalidatePath("/");
  redirect("/admin/chapters");
};

export const changeChapter = async (state: any, formData: any) => {
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
  redirect("/admin/chapters");
};

export const changeChapterActive = async (id: number, active: boolean) => {
  const data = await db.chapter.update({
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

export const deleteChapter = async (id: number) => {
  console.log(id);

  const data = await db.chapter.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");

  return data;
};
