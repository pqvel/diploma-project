"use client";
import { FC, useEffect } from "react";
import { Menu, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { items } from "./items";
import { Scroll } from "@/components/UI";

const Aside: FC = () => {
  useEffect(() => {
    (async () => {
      const data = await fetch("/api/hello");
      const res = await data.json();
      console.log(res);
    })();
  }, []);
  return (
    <Layout.Sider
      theme="light"
      breakpoint="lg"
      width={280}
      collapsedWidth="0"
      style={{ margin: "80px 40px 0 0" }}
    >
      <Scroll maxHeight="100svh">
        <Menu theme="light" mode="inline" items={items} />
      </Scroll>
    </Layout.Sider>
  );
};

export default Aside;
