import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Aside: FC<Props> = ({ children }) => {
  return <aside className="w-72 mr-10">{children}</aside>;
};

export default Aside;
