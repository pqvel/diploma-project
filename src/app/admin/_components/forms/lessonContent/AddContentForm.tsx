"use client";
import { FC } from "react";
import { Dropdown, Button, Space } from "antd";
import { createLecture } from "@/app/actions/lectures";
import { DownOutlined } from "@ant-design/icons";

type Props = {
  lessonSlug: string;
};

const AddContentForm: FC<Props> = ({ lessonSlug }) => {
  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "lecture",
            label: (
              <Button onClick={() => createLecture(lessonSlug)}>Лекция</Button>
            ),
          },
          // {
          //   key: "exersiceWit",
          //   label: (
          //     <Button onClick={() => createLecture(lessonSlug)}>Лекция</Button>
          //   ),
          // },
        ],
      }}
    >
      <Button>
        <Space>
          Добавить контент
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default AddContentForm;
