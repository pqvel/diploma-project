import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const TableColumn: FC<Props> = ({ children, className = "" }) => {
  return (
    <td
      className={clsx(
        "flex items-center px-3 line-clamp-1 min-w-40",
        className
      )}
    >
      {children}
    </td>
  );
};

export default TableColumn;
