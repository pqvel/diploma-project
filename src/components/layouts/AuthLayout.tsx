import { Layout } from "antd";
import { FC, ReactNode, ReactElement } from "react";

type Props = {
  children: ReactNode | ReactElement;
};

const AuthLayout: FC<Props> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default AuthLayout;
