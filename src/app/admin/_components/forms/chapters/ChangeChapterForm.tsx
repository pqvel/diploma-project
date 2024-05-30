"use client";
import { FC } from "react";
import { useFormState } from "react-dom";
import { Input, Button } from "antd";
import { changeChapter } from "@/app/actions/chapters";
import { Chapter } from "@prisma/client";

const ChangeChapterForm: FC<Chapter> = ({ id, title }) => {
  const [__, action] = useFormState(changeChapter, {
    title: "",
  });

  return (
    <form action={action}>
      <label className="flex flex-col mb-4">
        <div className="mb-1">Заголовок:</div>
        <Input defaultValue={title} name="title" />
      </label>
      <input type="hidden" name="id" value={id} />
      <Button type="primary" htmlType="submit">
        Создать
      </Button>
    </form>
  );
};

export default ChangeChapterForm;
