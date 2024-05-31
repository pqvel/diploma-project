"use server";
import { FC } from "react";
import Title from "antd/es/typography/Title";
import { db } from "@/db";
import { notFound } from "next/navigation";
import AdminLayout from "@/components/layouts/AdminLayout";
import ChangeLessonForm from "@/app/admin/_components/forms/lessons/ChangeLessonForm";
import AddContentForm from "@/app/admin/_components/forms/lessonContent/AddContentForm";
import { Lecture, Test, TypeContent, Answer } from "@prisma/client";
import ChangeLectureForm from "@/app/admin/_components/forms/lessonContent/ChangeLectureForm";
import ChangeTestForm from "@/app/admin/_components/forms/lessonContent/ChangeTestForm";

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
          tests: {
            include: {
              answers: true,
            },
          },
        },
      },
    },
  });

  if (!chapter) notFound();

  const lesson = chapter.lessons[0];

  return {
    chapter,
    lesson,
    content: [...lesson.lectures, ...lesson.tests].sort(
      (a, b) => a.order - b.order
    ) as Content[],
  };
};

interface TestWithAnswers extends Test {
  answers: Answer[];
}

type Content = Lecture | Test;

const ChangeLessonPage: FC<Props> = async ({ params }) => {
  const { chapter, lesson, content } = await getData(
    params.chapterSlug,
    params.lessonSlug
  );

  return (
    <AdminLayout>
      <Title level={1}>Изменить урок</Title>
      <ChangeLessonForm
        chapterSlug={params.chapterSlug}
        lesson={lesson}
        content={content}
      />
      {content.map((item) => {
        switch (item.type) {
          case TypeContent.Lecture:
            return (
              <ChangeLectureForm key={item.id} lecture={item as Lecture} />
            );

          case TypeContent.Test:
            return (
              <ChangeTestForm
                key={item.id}
                test={item as TestWithAnswers}
                lessonSlug={params.lessonSlug}
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
