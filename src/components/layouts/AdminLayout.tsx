"use client";
import { FC, ReactNode } from "react";
import Link from "next/link";
import { Layout } from "antd";
import { Container } from "@/components/ui/Wrappers";
const { Header } = Layout;

type Props = {
  children: ReactNode;
};

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <Layout className=" min-h-full w-full">
      <Header>
        <Container>
          <nav className="flex items-center justify-center gap-4">
            <Link
              className="text-white font-medium hover:underline"
              href="/admin"
            >
              Главная
            </Link>
            <Link
              className="text-white font-medium hover:underline"
              href="/admin/chapters"
            >
              Главы
            </Link>
          </nav>
        </Container>
      </Header>
      <main className="mt-10 mb-20">
        <Container>{children}</Container>
      </main>
    </Layout>
  );
};

export default AdminLayout;
