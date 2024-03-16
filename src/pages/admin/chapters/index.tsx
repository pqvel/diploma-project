import { FC } from "react";
import { Typography, Input, List, Space, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AdminLayout from "@/components/layouts/AdminLayout";
import Link from "next/link";

const { Title } = Typography;
const { Search } = Input;

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
      <Title level={1}>Главы</Title>

      <List
        header={<Search placeholder="Поиск" size="large" />}
        footer={
          <Space.Compact size="large" style={{ width: "100%" }}>
            <Input style={{ maxWidth: 600 }} placeholder="Название главы" />
            <Button type="default" icon={<PlusOutlined />}>
              Добавить
            </Button>
          </Space.Compact>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Link href="/admin/chapters/glava-1">{item}</Link>
          </List.Item>
        )}
      />
    </AdminLayout>
  );
};

export default Chapters;
