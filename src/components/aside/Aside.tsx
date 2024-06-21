"use client";
import { FC, ReactNode, useState, useEffect } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import clsx from "clsx";
type Props = {
  children: ReactNode;
};

const Aside: FC<Props> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  // useEffect(() => {
  //   documisOpen
  // }, [isOpen])

  return (
    <aside className="flex flex-col">
      <button
        onClick={toggleOpen}
        className="fixed top-[17px] left-3 z-20 lg:hidden"
      >
        <MenuOutlined className=" text-3xl" />
      </button>
      <div
        className={clsx(
          "fixed top-0 left-0 flex flex-col items-end h-full overflow-auto w-80 transition-all bg-white z-30 -translate-x-80 lg:translate-x-0 lg:relative lg:top-auto lg:left-auto",
          {
            "translate-x-0": isOpen,
          }
        )}
      >
        <button className="p-4 my-1.5 lg:hidden" onClick={toggleOpen}>
          <CloseOutlined className=" text-2xl" />
        </button>
        {children}
      </div>
      <div
        onClick={toggleOpen}
        className={clsx(
          "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10",
          { hidden: !isOpen }
        )}
      ></div>
    </aside>
  );
};

export default Aside;
