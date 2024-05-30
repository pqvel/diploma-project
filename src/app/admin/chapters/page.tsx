"use server";
import { FC } from "react";
import { ChapterItem } from "../_components/items/Chapter";
import { db } from "@/db";
import Title from "antd/es/typography/Title";
import { Button, Divider } from "antd";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableTitle,
} from "@/app/admin/_components/ui/table";
import AdminLayout from "@/components/layouts/AdminLayout";

const getChaptes = async () => {
  return db.chapter.findMany();
};

const ChaptersPage: FC = async () => {
  const chapters = await getChaptes();

  return (
    <AdminLayout>
      <Title level={1}>Главы</Title>
      <div>
        <Link href="/admin/chapters/add-chapter">
          <Button>Добавить главу</Button>
        </Link>
      </div>

      <Divider />

      <Table>
        <TableHead>
          <TableRow>
            <TableTitle>Активно</TableTitle>
            <TableTitle>id</TableTitle>
            <TableTitle className="min-w-96 w-full">Заголовок</TableTitle>
            <TableTitle>Действия</TableTitle>
          </TableRow>
        </TableHead>
        <TableBody>
          {chapters.map((chapter) => (
            <ChapterItem {...chapter} key={chapter.id} />
          ))}
        </TableBody>
      </Table>
    </AdminLayout>
  );
};

export default ChaptersPage;
