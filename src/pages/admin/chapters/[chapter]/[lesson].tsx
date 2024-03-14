import { FC } from "react";
import { Typography, Input, List } from "antd";
import AdminLayout from "@/components/layouts/AdminLayout";
import LectureForm from "@/components/admin/forms/LectureForm";
import TestForm from "@/components/admin/forms/TestForm";
import CorrelateForm from "@/components/admin/forms/CorrelateForm";
const { Title } = Typography;

const Chapters: FC = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <AdminLayout>
      <Title level={1}>Урок 1</Title>
      <LectureForm />
      <TestForm />
      <CorrelateForm />
    </AdminLayout>
  );
};

export default Chapters;
