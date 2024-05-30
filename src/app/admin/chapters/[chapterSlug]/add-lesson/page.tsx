"use server";
import { FC } from "react";
import Title from "antd/es/typography/Title";
import AdminLayout from "@/components/layouts/AdminLayout";
import CreateLessonForm from "@/app/admin/_components/forms/lessons/CreateLessonForm";

type Props = {
  params: {
    chapterSlug: string;
  };
};

const AddLessonPage: FC<Props> = ({ params }) => {
  return (
    <AdminLayout>
      <Title level={1}>Создание нового урока</Title>
      <CreateLessonForm chapterSlug={params.chapterSlug} />
    </AdminLayout>
  );
};

export default AddLessonPage;
