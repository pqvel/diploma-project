"use server";
import { FC } from "react";
import Title from "antd/es/typography/Title";
import { db } from "@/db";
import { notFound } from "next/navigation";
import AdminLayout from "@/components/layouts/AdminLayout";
import ChangeLessonForm from "@/app/admin/_components/forms/lessons/ChangeLessonForm";
import AddContentForm from "@/app/admin/_components/forms/lessonContent/AddContentForm";
import { TypeContent } from "@prisma/client";
import ChangeLectureForm from "@/app/admin/_components/forms/lessonContent/ChangeLectureForm";

type Props = {
  params: {
    chapterSlug: string;
    lessonSlug: string;
  };
};

const getData = async (chapterSlug: string, lessonSlug: string) => {
  const chapter = await db.chapter.findUnique({
    where: {
      slug: chapterSlug,
    },
    include: {
      lessons: {
        where: {
          slug: lessonSlug,
        },
        include: {
          lectures: true,
          // exercisesWithOneAnswer: true,
        },
      },
    },
  });

  if (!chapter) notFound();

  const lesson = chapter.lessons[0];

  return {
    chapter,
    lesson,
    content: [...lesson.lectures].sort((a, b) => a.order - b.order),
  };
};

const ChangeLessonPage: FC<Props> = async ({ params }) => {
  const { chapter, lesson, content } = await getData(
    params.chapterSlug,
    params.lessonSlug
  );

  return (
    <AdminLayout>
      <Title level={1}>Создание новой главы</Title>
      <ChangeLessonForm
        chapterSlug={params.chapterSlug}
        lesson={lesson}
        content={content}
      />
      {content.map((item) => {
        switch (item.type) {
          case TypeContent.Lecture:
            return (
              <ChangeLectureForm
                key={item.id}
                lecture={item}
                lessonSlug={lesson.slug}
              />
            );

          default:
            return null;
        }
      })}
      <AddContentForm lessonSlug={lesson.slug} />
    </AdminLayout>
  );
};

export default ChangeLessonPage;
