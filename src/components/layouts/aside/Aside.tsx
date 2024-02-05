'use client';
import { FC } from "react";
import { Input, Menu } from "antd";
import { items } from "./items";
// import { style } from "./style";

const { Search } = Input

const Aside: FC = () => {

  const onSearch = () => () => {
    return items
  }

  return (
    //  {...stylex.props(style.aside)}
    <aside>
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      <Menu
        mode="inline"
        items={items}
      ></Menu>
    </aside>
  );
};

export default Aside;
