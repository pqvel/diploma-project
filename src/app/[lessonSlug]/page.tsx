"use server";
import { FC } from "react";
import { Lecture, Test } from "@/components/content";
import {
  Answer,
  Lecture as LectureType,
  Test as TestType,
  TypeContent,
} from "@prisma/client";
import { getActiveChapters } from "@/queries/chapters";
import { getActiveLesson, getActiveLessonWithContent } from "@/queries/lessons";
import MainLayout from "@/components/layouts/MainLayout";

type Props = {
  params: {
    lessonSlug: string;
  };
};

interface TestWitAnswers extends TestType {
  answers: Answer[];
}

export const generateMetadata = async ({ params }: Props) => {
  const { title } = await getActiveLesson(params.lessonSlug);

  return {
    title: title,
    description: `${title}`,
  };
};

const LessonPage: FC<Props> = async ({ params }) => {
  const [chapters, { lesson, lessonContent }] = await Promise.all([
    getActiveChapters(),
    getActiveLessonWithContent(params.lessonSlug),
  ]);

  return (
    <MainLayout>
      {lessonContent.map((content) => {
        switch (content.type) {
          case TypeContent.Lecture:
            return <Lecture key={content.id} {...(content as LectureType)} />;
          case TypeContent.Test:
            return <Test key={content.id} {...(content as TestWitAnswers)} />;
          default:
            return null;
        }
      })}
    </MainLayout>
  );
};

export default LessonPage;
