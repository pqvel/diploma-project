import { Button, Space } from "antd";
import { FC, ReactElement } from "react";
import { v4 as uuid } from "uuid";
import { FileTextOutlined } from "@ant-design/icons";

type AddBlockType = {
  id: string;
  title: string;
  icon: ReactElement;
  action: () => void;
};

const addBlocks: AddBlockType[] = [
  { title: "Лекция", id: uuid(), icon: <FileTextOutlined />, action: () => {} },
];

const AddBlock: FC = () => {
  return (
    <Space>
      {addBlocks.map(({ title, id, icon, action }) => (
        <Button icon={icon} onClick={() => action()} key={id}>
          {title}
        </Button>
      ))}
    </Space>
  );
};
