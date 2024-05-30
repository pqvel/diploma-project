"use server";
import { FC } from "react";
import { notFound } from "next/navigation";
import Title from "antd/es/typography/Title";
import AdminLayout from "@/components/layouts/AdminLayout";
import ChangeChapterForm from "@/app/admin/_components/forms/chapters/ChangeChapterForm";
import { db } from "@/db";

const getChapter = async (slug: string) => {
  const chapter = await db.chapter.findUnique({
    where: {
      slug,
    },
  });

  if (!chapter) notFound();

  return chapter;
};

type Props = {
  params: {
    chapterSlug: string;
  };
};

const ChangeChapterPage: FC<Props> = async ({ params }) => {
  const chapter = await getChapter(params.chapterSlug);

  return (
    <AdminLayout>
      <Title level={1}>Создание новой главы</Title>
      <ChangeChapterForm {...chapter} />
    </AdminLayout>
  );
};

export default ChangeChapterPage;
