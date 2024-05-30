"use server";
import { FC } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button, Divider } from "antd";
import Title from "antd/es/typography/Title";
import {
  Table,
  TableHead,
  TableRow,
  TableTitle,
  TableBody,
} from "@/app/admin/_components/ui/table";
import { LessonItem } from "@/app/admin/_components/items/Lesson";
import { db } from "@/db";

import AdminLayout from "@/components/layouts/AdminLayout";

const getData = async (chapterSlug: string) => {
  const chapter = await db.chapter.findUnique({
    where: {
      slug: chapterSlug,
    },
    include: {
      lessons: true,
    },
  });

  if (!chapter) notFound();

  return {
    lessons: chapter.lessons,
  };
};

type Props = {
  params: {
    chapterSlug: string;
  };
};

const LessonsPage: FC<Props> = async ({ params }) => {
  const { lessons } = await getData(params.chapterSlug);

  return (
    <AdminLayout>
      <Title level={1}>Уроки</Title>
      <div>
        <Link href={`/admin/chapters/${params.chapterSlug}/add-lesson`}>
          <Button>Добавить урок</Button>
        </Link>
      </div>
      <Divider />
      <Table>
        <TableHead>
          <TableRow>
            <TableTitle>Активно</TableTitle>
            <TableTitle>id</TableTitle>
            <TableTitle className="min-w-96 w-full">Заголовок</TableTitle>
            <TableTitle>Действия</TableTitle>
          </TableRow>
        </TableHead>
        <TableBody>
          {lessons.map((lesson) => (
            <LessonItem
              lesson={lesson}
              chapterSlug={params.chapterSlug}
              key={lesson.id}
            />
          ))}
        </TableBody>
      </Table>
    </AdminLayout>
  );
};

export default LessonsPage;
