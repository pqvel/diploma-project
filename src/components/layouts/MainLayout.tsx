"use server";
import { FC, ReactNode } from "react";
import { Layout } from "antd";
import { Container } from "@/components/ui/Wrappers";
import AsideMenu from "@/components/aside/AsideMenu";
import { getActiveChapters } from "@/queries/chapters";
import HeaderAuth from "../header/HeaderAuth";
import { MenuOutlined } from "@ant-design/icons";
import Aside from "../aside/Aside";
type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = async ({ children }) => {
  const chapters = await getActiveChapters();

  return (
    <Layout style={{ backgroundColor: "#fff", paddingTop: "64px" }}>
      <header className="fixed top-0 left-0 w-full z-10 flex items-center p-0 bg-white border-b border-b-gray-300 h-16">
        <Container>
          <HeaderAuth />
        </Container>
      </header>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] lg:gap-10 py-10">
          <Aside>
            <AsideMenu chapters={chapters} />
          </Aside>
          <main className=" bg-white">{children}</main>
        </div>
      </Container>
    </Layout>
  );
};

export default MainLayout;
