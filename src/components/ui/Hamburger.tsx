import { FC } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

type Props = {
  collapsed: boolean;
  openAside: () => void;
};

export const Hamburger: FC<Props> = ({ collapsed = true, openAside }) => {
  return (
    <button
      className="flex justify-center items-center w-[30px] h-[30px] p-0 m-0 mr-[12px] bg-none outline-none border-none cursor-pointer lg:hidden"
      onClick={openAside}
    >
      {collapsed ? (
        <MenuUnfoldOutlined className="text-2xl" />
      ) : (
        <MenuFoldOutlined className="text-2xl" />
      )}
    </button>
  );
};
