import { Flex, Layout } from "antd";
import { FC, ReactNode, ReactElement } from "react";
import "modern-normalize";
import "../../app/globals.css";

type Props = {
  children: ReactNode | ReactElement;
};

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100%", display: "flex" }}>
      <Flex
        style={{
          minHeight: "100%",
          flex: 1,
          margin: 12,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ maxWidth: 500, width: "100%" }}>{children}</div>
      </Flex>
    </Layout>
  );
};

export default AuthLayout;
