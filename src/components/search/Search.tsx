import { useState, FC } from "react";
import { Input, Modal, Button, List, Flex, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

const data = [
  { title: "Racing car sprays burning fuel into crowd.", link: "/link-1" },
  { title: "Racing car sprays burning fuel into crowd.", link: "/link-1" },
  { title: "Racing car sprays burning fuel into crowd.", link: "/link-1" },
  { title: "Racing car sprays burning fuel into crowd.", link: "/link-1" },
];

const Search: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Flex align="center" justify="space-between" gap="small" vertical> */}
      <Button onClick={() => setIsOpen(true)} icon={<SearchOutlined />}>
        Найти нужный урок
      </Button>
      {/* </Flex> */}

      <Modal
        title="Поиск"
        style={{ top: 100 }}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsOpen(false)}>
            Отмена
          </Button>,
        ]}
      >
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Input.Search placeholder="Основы js" />

          <List
            size="small"
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={({ title, link }) => (
              <List.Item>
                <Link href={link}>{title}</Link>
              </List.Item>
            )}
          />
        </Space>
      </Modal>
    </>
  );
};

export default Search;
