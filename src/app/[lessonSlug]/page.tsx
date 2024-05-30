"use server";
import { FC } from "react";
import { Lecture } from "@/components/content";
import { Lecture as LectureType, TypeContent } from "@prisma/client";
import { getActiveChapters } from "@/queries/chapters";
import { getActiveLesson, getActiveLessonWithContent } from "@/queries/lessons";
import MainLayout from "@/components/layouts/MainLayout";

type Props = {
  params: {
    lessonSlug: string;
  };
};

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
    <MainLayout chapters={chapters}>
      {lessonContent.map((content) => {
        switch (content.type) {
          case TypeContent.Lecture:
            return <Lecture key={content.id} {...(content as LectureType)} />;
          // case TypeContent.ExerciseWithOneAnswer:
          //   return <Test key={content.id} {...content} />;
          // case TypeContent.Correlate:
          //   return <Correlate key={content.id} {...content} />;
          default:
            return null;
        }
      })}
      {/* <Test
      title="Какой тип данных обозначает отсутствие какого-либо значения?"
      descr="Выберите один правильный ответ"
      variants={[
        { id: "1", title: "undefined" },
        { id: "2", title: "null" },
        { id: "3", title: "empty" },
        { id: "4", title: "none" },
      ]}
      rightAnswer={{ id: "2", title: "null" }}
      />
      <Correlate
        correlateItems={{
          left: [
            { id: "1", text: "number", pairItemId: "6", isDisabled: false },
            { id: "2", text: "string", pairItemId: "8", isDisabled: false },
            { id: "3", text: "boolean", pairItemId: "7", isDisabled: false },
            { id: "4", text: "object", pairItemId: "5", isDisabled: false },
          ],
          right: [
            {
              id: "5",
              text: "Сложный тип данных имеющий определнную структуру",
              pairItemId: "4",
              isDisabled: false,
            },
            {
              id: "6",
              text: "Числовой тип данных",
              pairItemId: "1",
              isDisabled: false,
            },
            {
              id: "7",
              text: "Логический тип данных",
              pairItemId: "3",
              isDisabled: false,
            },
            {
              id: "8",
              text: "Строковый тип данных",
              pairItemId: "2",
              isDisabled: false,
            },
          ],
        }}
      /> */}
    </MainLayout>
  );
};

export default LessonPage;
