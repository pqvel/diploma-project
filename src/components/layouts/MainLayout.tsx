"use server";
import { FC, ReactNode } from "react";
import Link from "next/link";
import { Layout, Flex, Button } from "antd";
import { Container } from "@/components/ui/Wrappers";
import AsideMenu from "@/components/aside/AsideMenu";
import { getActiveChapters } from "@/queries/chapters";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = async ({ children }) => {
  const chapters = await getActiveChapters();

  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      <header className="sticky flex items-center p-0 bg-white border-b border-b-gray-400 h-16">
        <Container>
          <Flex align="center" justify="space-between">
            <Link href="/auth/login">
              <div>
                <Link href="/auth/register">
                  <Button type="text" className=" mr-3">
                    Зарегистрироваться
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button type="default">Войти</Button>
                </Link>
              </div>
            </Link>
          </Flex>
        </Container>
      </header>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 py-10">
          <aside>
            <AsideMenu chapters={chapters} />
          </aside>
          <main className=" bg-white">{children}</main>
        </div>
      </Container>
    </Layout>
  );
};

export default MainLayout;
