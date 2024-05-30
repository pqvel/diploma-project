"use client";
import { FC } from "react";
import Link from "next/link";
import { Lesson } from "@prisma/client";
import { Button, Checkbox, Dropdown } from "antd";
import { changeLessonActive, deleteLesson } from "@/app/actions/lessons";
import { MenuOutlined } from "@ant-design/icons";
import { TableRow, TableColumn } from "@/app/admin/_components/ui/table";

type Props = {
  lesson: Lesson;
  chapterSlug: string;
};

export const LessonItem: FC<Props> = ({ lesson, chapterSlug }) => {
  return (
    <TableRow>
      <TableColumn>
        <Checkbox
          defaultChecked={lesson.active}
          onChange={(e) => changeLessonActive(lesson.id, e.target.checked)}
        />
      </TableColumn>
      <TableColumn>{lesson.id}</TableColumn>
      <TableColumn className="min-w-96 w-full">{lesson.title}</TableColumn>
      <TableColumn>
        <Dropdown
          trigger={["click"]}
          menu={{
            items: [
              {
                key: "1",
                label: (
                  <Button danger onClick={() => deleteLesson(lesson.id)}>
                    Удалить
                  </Button>
                ),
              },
              {
                key: "2",
                label: (
                  <Link
                    href={`/admin/chapters/${chapterSlug}/${lesson.slug}/change-lesson`}
                  >
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
