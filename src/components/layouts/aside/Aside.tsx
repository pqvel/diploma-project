"use client";
import { FC } from "react";
import { Input, Menu, Layout } from "antd";
import { items } from "./items";

const Aside: FC = () => {
  const onSearch = () => () => {
    return items;
  };

  return (
    <Layout.Sider
      style={{ padding: "12px 0", maxHeight: "100dvh", overflowY: "auto" }}
      theme="dark"
      breakpoint="lg"
      width={280}
      collapsedWidth="0"
    >
      {/* <Input.Search /> */}
      <Menu theme="dark" mode="inline" items={items} />
    </Layout.Sider>
  );
};

export default Aside;
