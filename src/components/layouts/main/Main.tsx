import { FC } from "react";
import { Layout } from "antd";
import Lecture from "@/components/content/lecture/Lecture";

const Main: FC = () => {
  return (
    <Layout.Content style={{ background: "white", padding: 12 }}>
      <Lecture />
    </Layout.Content>
  );
};

export default Main;
