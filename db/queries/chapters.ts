"use server";
import { db } from "@/db";

export const getActiveChapters = async () => {
  const chapters = await db.chapter.findMany({
    where: {
      active: true,
    },
    include: {
      lessons: {
        where: {
          active: true,
        },
      },
    },
  });

  return chapters;
};
