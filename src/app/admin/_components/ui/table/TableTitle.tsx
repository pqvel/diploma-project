import { FC, ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

const TableTitle: FC<Props> = ({ children, className }) => {
  return (
    <th className={clsx("px-3 line-clamp-1 min-w-40 text-start", className)}>
      {children}
    </th>
  );
};

export default TableTitle;
