import { FC } from "react";
import { Layout } from "antd";
import Search from "@/components/search/Search";

const Header: FC = () => {
  return (
    <Layout.Header>
      <Search />
    </Layout.Header>
  );
};

export default Header;
