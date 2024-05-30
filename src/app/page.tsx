"use server";
import { FC } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { getActiveChapters } from "@/queries/chapters";

const MainPage: FC = async () => {
  const chapters = await getActiveChapters();

  return <MainLayout chapters={chapters}>page</MainLayout>;
};

export default MainPage;
