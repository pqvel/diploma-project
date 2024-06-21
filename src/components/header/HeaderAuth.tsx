"use client";
import { FC } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Flex, Button } from "antd";

const HeaderAuth: FC = () => {
  const { data: session, status } = useSession();

  console.log(session);

  if (!session) {
    return (
      <Flex align="center" justify="end">
        {/* <Link href="/register">
          <Button type="text" className=" mr-3">
            Зарегистрироваться
          </Button>
        </Link> */}
        <Link href="/login">
          <Button type="default">Войти</Button>
        </Link>
      </Flex>
    );
  }

  return <div>login</div>;
};

export default HeaderAuth;
