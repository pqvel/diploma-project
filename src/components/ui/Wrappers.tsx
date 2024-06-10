import { FC, ReactNode } from "react";
import Link from "next/link";
import { Flex, Button } from "antd";

type ChildrenProps = {
  children: ReactNode;
};

export const Container: FC<ChildrenProps> = ({ children }) => (
  <div className=" max-w-6xl w-full mx-auto px-3 lg:px-5">{children}</div>
);

export const Header: FC<ChildrenProps> = ({ children }) => (
  <header className="sticky flex items-center p-0 bg-white border-b border-b-gray-400 h-16">
    <Container>
      <Flex align="center" justify="space-between">
        {children}
        <Link href="/login">
          <div>
            <Link href="/auth/register">
              <Button type="text" style={{ marginRight: 8 }}>
                Зарегистрироваться
              </Button>
            </Link>
            <Link href="/login">
              <Button type="default">Войти</Button>
            </Link>
          </div>
        </Link>
      </Flex>
    </Container>
  </header>
);

// import styled from "styled-components";

// interface Props {
//   maxHeight: string;
// }

// export const Scroll = styled.div<Props>`
//   max-height: ${(props) => (props.maxHeight ? props.maxHeight : "100svh")};

//   &::-webkit-scrollbar-track {
//     -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//     border-radius: 10px;
//     background-color: #f5f5f5;
//   }

//   &::-webkit-scrollbar {
//     width: 12px;
//     background-color: #f5f5f5;
//   }

//   &::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//     background-color: #555;
//   }
// `;

export const Block: FC<ChildrenProps> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};
