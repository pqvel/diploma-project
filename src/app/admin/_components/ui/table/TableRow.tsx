import { FC, ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

const TableRow: FC<Props> = ({ children, className = "" }) => {
  return (
    <tr className={clsx("flex min-w-full py-2 even:bg-blue-100", className)}>
      {children}
    </tr>
  );
};

export default TableRow;
