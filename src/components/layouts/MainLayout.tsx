"use client";
import { FC, ReactNode } from "react";
import { Layout } from "antd";
import Aside from "../ui/Aside";
import { Container, Header } from "@/components/ui/Wrappers";
import { usePopup } from "@/hooks/usePopup";
import { Hamburger } from "@/components/ui/Hamburger";
import { Chapter as PrismaChapter, Lesson } from "@prisma/client";

interface Chapter extends PrismaChapter {
  lessons: Lesson[];
}

type Props = {
  children: ReactNode;
  chapters: Chapter[];
};

const MainLayout: FC<Props> = ({ children, chapters }) => {
  const { collapsed, togglePopup } = usePopup(992);

  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      <Header>
        <Hamburger collapsed={collapsed} openAside={togglePopup} />
      </Header>
      <Container>
        <Layout className="py-10" style={{ backgroundColor: "#fff" }}>
          <Aside
            collapsedAside={collapsed}
            closeAside={togglePopup}
            chapters={chapters}
          />
          <Layout style={{ background: "#fff" }}>{children}</Layout>
        </Layout>
      </Container>
    </Layout>
  );
};

export default MainLayout;
