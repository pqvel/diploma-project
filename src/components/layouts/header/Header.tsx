import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Layout, Avatar, Button, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Container } from "@/components/UI";
import Search from "@/components/search/Search";

const Header: FC = () => {
  const [isShowHeader, setShowHeader] = useState(true);

  // useEffect(() => {
  //   document.addEventListener("scroll")
  // }, [])
  return (
    <Layout.Header
      style={{
        padding: "0 20px",
        background: "#fff",
        borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
        position: "sticky",
      }}
    >
      <Container>
        <Flex align="center" justify="space-between">
          <Search />
          <Link href="/auth/login">
            <div>
              <Link href="/auth/register">
                <Button type="text" style={{ marginRight: 8 }}>
                  Зарегистрироваться
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button type="default">Войти</Button>
              </Link>
            </div>
            {/* <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
          U
        </Avatar> */}
          </Link>
        </Flex>
      </Container>
    </Layout.Header>
  );
};

export default Header;
