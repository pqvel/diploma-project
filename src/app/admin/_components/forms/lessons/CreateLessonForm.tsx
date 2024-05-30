"use client";
import { FC } from "react";
import { useFormState } from "react-dom";
import { Input, Button } from "antd";
import { createLesson } from "@/app/actions/lessons";

type Props = {
  chapterSlug: string;
};

const CreateLessonForm: FC<Props> = ({ chapterSlug }) => {
  const [__, action] = useFormState(createLesson, {
    title: "",
  });

  return (
    <form action={action}>
      <input type="hidden" name="chapterSlug" value={chapterSlug} />
      <label className="flex flex-col mb-4">
        <div className="mb-1">Заголовок:</div>
        <Input name="title" />
      </label>
      <Button type="primary" htmlType="submit">
        Создать
      </Button>
    </form>
  );
};

export default CreateLessonForm;
