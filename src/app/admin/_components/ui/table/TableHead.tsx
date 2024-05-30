import { FC, ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

const TableHead: FC<Props> = ({ children, className = "" }) => {
  return (
    <thead
      className={clsx(
        "flex flex-col py-2 rounded-t-lg bg-gray-300 min-w-full",
        className
      )}
    >
      {children}
    </thead>
  );
};

export default TableHead;
