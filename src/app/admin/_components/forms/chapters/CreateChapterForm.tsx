"use client";
import { FC } from "react";
import { useFormState } from "react-dom";
import { Input, Button } from "antd";
import { createChapter } from "@/app/actions/chapters";

const CreateChapterForm: FC = () => {
  const [__, action] = useFormState(createChapter, {
    title: "",
  });

  return (
    <form action={action}>
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

export default CreateChapterForm;
