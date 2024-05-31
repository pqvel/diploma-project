"use client";
import { FC } from "react";
import Link from "next/link";
import { Chapter } from "@prisma/client";
import { Button, Checkbox, Dropdown } from "antd";
import { changeChapterActive, deleteChapter } from "@/app/actions/chapters";
import { MenuOutlined } from "@ant-design/icons";
import { TableRow, TableColumn } from "@/app/admin/_components/ui/table";

export const ChapterItem: FC<Chapter> = ({ active, id, title, slug }) => {
  console.log(id);
  return (
    <TableRow>
      <TableColumn>
        <Checkbox
          defaultChecked={active}
          onChange={(e) => changeChapterActive(id, e.target.checked)}
        />
      </TableColumn>
      <TableColumn>{id}</TableColumn>
      <TableColumn className="min-w-96 w-full">
        <Link href={`/admin/chapters/${slug}`}>{title}</Link>
      </TableColumn>
      <TableColumn>
        <Dropdown
          trigger={["click"]}
          menu={{
            items: [
              {
                key: "1",
                label: (
                  <Button danger onClick={() => deleteChapter(id)}>
                    Удалить
                  </Button>
                ),
              },
              {
                key: "2",
                label: (
                  <Link href={`/admin/chapters/${slug}/change-chapter`}>
                    <Button type="link">Редактировать</Button>
                  </Link>
                ),
              },
            ],
          }}
        >
          <Button type="text">
            <MenuOutlined
              width={30}
              height={30}
              className=" text-2xl cursor-pointer"
            />
          </Button>
        </Dropdown>
      </TableColumn>
    </TableRow>
  );
};
