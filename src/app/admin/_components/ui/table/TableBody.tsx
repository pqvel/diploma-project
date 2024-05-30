import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TableBody: FC<Props> = ({ children }) => {
  return (
    <tbody className="flex flex-col border-x border-x-gray-300 flex-1">
      {children}
    </tbody>
  );
};

export default TableBody;
