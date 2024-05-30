"use server";
import { FC } from "react";
import Title from "antd/es/typography/Title";
import AdminLayout from "@/components/layouts/AdminLayout";
import CreateChapterForm from "@/app/admin/_components/forms/chapters/CreateChapterForm";

const AddChapterPage: FC = () => {
  return (
    <AdminLayout>
      <Title level={1}>Создание новой главы</Title>
      <CreateChapterForm />
    </AdminLayout>
  );
};

export default AddChapterPage;
