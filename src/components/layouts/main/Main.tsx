import { FC } from "react";
import { Layout } from "antd";
import Lecture from "@/components/content/lecture/Lecture";
import Test from "@/components/content/test/Test";
import Correlate from "@/components/content/correlate/Correlate";

const Main: FC = () => {
  return (
    <Layout.Content style={{ background: "white", padding: 16 }}>
      <Lecture />
      <Test
        title="Repellendus molestias"
        descr="Repellendus molestias optio aliquam quam similique minima facere laborum in soluta quidem!"
        variants={[
          { id: "1", title: "variant 1" },
          { id: "2", title: "variant 2" },
          { id: "3", title: "variant 3" },
          { id: "4", title: "variant 4" },
        ]}
        rightAnswers={[]}
      />
      <Correlate />
      <pre>
        <code>let arr =</code>
        <code>for (let i in array) {"{"}</code>sa
        <input placeholder="text" />
      </pre>
    </Layout.Content>
  );
};
export default Main;
