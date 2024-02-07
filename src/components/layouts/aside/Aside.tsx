"use client";
import { FC } from "react";
import { Menu, Layout } from "antd";
import { items } from "./items";
import { Scroll } from "@/components/UI";

const Aside: FC = () => {
  const onSearch = () => () => {
    return items;
  };

  return (
    <Layout.Sider theme="dark" breakpoint="lg" width={280} collapsedWidth="0">
      <Scroll maxHeight="100svh">
        <Menu theme="dark" mode="inline" items={items} />
      </Scroll>
    </Layout.Sider>
  );
};

export default Aside;
