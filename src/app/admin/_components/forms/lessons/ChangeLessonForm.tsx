"use client";
import { FC } from "react";
import { useFormState } from "react-dom";
import { Input, Button } from "antd";
import { changeLesson } from "@/app/actions/lessons";
import { Lesson, Lecture, ExercisesWithOneAnswer } from "@prisma/client";
import { Block } from "@/components/ui/Wrappers";

type Props = {
  chapterSlug: string;
  lesson: Lesson;
  content: Array<Lecture | ExercisesWithOneAnswer>;
};

const ChangeLessonForm: FC<Props> = ({ chapterSlug, lesson }) => {
  const [__, action] = useFormState(changeLesson, {
    title: "",
  });

  return (
    <Block>
      <form action={action}>
        <input type="hidden" name="chapterSlug" value={chapterSlug} />
        <label className="flex flex-col mb-4">
          <div className="mb-1">Заголовок:</div>
          <Input name="title" defaultValue={lesson.title} />
        </label>
        <Button type="primary" htmlType="submit">
          Соханить
        </Button>
      </form>
    </Block>
  );
};

export default ChangeLessonForm;
