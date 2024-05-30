import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TableFooter: FC<Props> = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};

export default TableFooter;
