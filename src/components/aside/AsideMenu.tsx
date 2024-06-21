"use client";
import { FC } from "react";
import Link from "next/link";
import { Menu } from "antd";
import { ItemType } from "antd/es/menu/interface";
import { Chapter, Lesson } from "@prisma/client";

interface ChapterWithLessons extends Chapter {
  lessons: Lesson[];
}
type Props = {
  chapters: ChapterWithLessons[];
};

const AsideMenu: FC<Props> = ({ chapters }) => {
  return (
    <Menu
      theme="light"
      mode="inline"
      className="lg:border-r lg:border-r-gray-300"
      style={
        {
          // borderRight: "1px solid #d6d6d6",
        }
      }
      items={
        chapters.map((chapter) => ({
          key: chapter.id,
          label: chapter.title,
          children: chapter.lessons.map((lesson) => ({
            key: `${lesson.id}-item`,
            label: <Link href={`/${lesson.slug}`}>{lesson.title}</Link>,
          })),
        })) as ItemType[]
      }
    />
  );
};

export default AsideMenu;
