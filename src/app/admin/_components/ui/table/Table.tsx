import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Table: FC<Props> = ({ children }) => {
  return (
    <div className="flex overflow-auto">
      <table className="flex flex-col flex-1">{children}</table>
    </div>
  );
};

export default Table;
