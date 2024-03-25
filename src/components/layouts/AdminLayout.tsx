"use client";
import { FC, ReactElement, ReactNode } from "react";
import { Layout } from "antd";
// import Breadcrumb from "../admin/Breadcrumb";
import { Container } from "../UI";
import "modern-normalize";
import "../../app/globals.css";

const { Header, Content, Footer } = Layout;

type Props = {
  children: ReactNode | ReactElement;
};

const layoutStyles = {
  width: "100%",
  minHeight: "100%",
};

const headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#fff",
};

const contentStyles = {
  minHeight: "100%",
  maxHeight: "100%",
};

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    // <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyles}>
      <Header style={headerStyles}>
        <Container>{/* <Breadcrumb /> */}</Container>
      </Header>
      <Content style={contentStyles}>
        <Container>{children}</Container>
      </Content>
      <Footer>
        <Container></Container>
      </Footer>
    </Layout>
    // </Flex>
  );
};

export default AdminLayout;
