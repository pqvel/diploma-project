import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.scss";
import NextTopLoader from "nextjs-toploader";
import { SessionWrapper } from "@/components/wrappers/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Изучение основ JavaScript",
  description: "Изучение основ JavaScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="black" />
        <SessionWrapper>
          <AntdRegistry>{children}</AntdRegistry>
        </SessionWrapper>
      </body>
    </html>
  );
}
