import { FC } from "react";
import styled from "styled-components";
import { Layout, Avatar } from "antd";
import Search from "@/components/search/Search";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <Search />
      <Link href="/auth/login">
        <Avatar
          icon={<UserOutlined />}
          shape="square"
          style={{ background: "gray" }}
        />
      </Link>
    </StyledHeader>
  );
};

export default Header;
