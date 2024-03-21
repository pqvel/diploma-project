import { FC } from "react";
import { Layout, Breadcrumb } from "antd";
import Lecture from "@/components/content/Lecture";
import Test from "@/components/content/Test";
import Correlate from "@/components/content/Correlate";
import LessonsNavigation from "@/components/LessonsNavigation";

const Main: FC = () => {
  return (
    <Layout.Content
      style={{
        background: "white",
        minHeight: "unset",
        margin: "20px 0",
      }}
    >
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
        rightAnswer={{ id: "2", title: "variant 2" }}
      />
      <Correlate
        correlateItems={{
          left: [
            { id: "1", text: "let", pairItemId: "4", isDisabled: false },
            { id: "2", text: "var", pairItemId: "5", isDisabled: false },
            { id: "3", text: "const", pairItemId: "6", isDisabled: false },
          ],
          right: [
            {
              id: "6",
              text: "ключевое слово языка для объявления констант. Константа — переменная, значение которой нельзя переназначит",
              pairItemId: "3",
              isDisabled: false,
            },
            {
              id: "4",
              text: "выражение позволяет объявить переменные с областью видимости ограниченной одним выражением.",
              pairItemId: "1",
              isDisabled: false,
            },
            {
              id: "5",
              text: " Отсутствие блочной области видимости.",
              pairItemId: "2",
              isDisabled: false,
            },
          ],
        }}
      />
      <LessonsNavigation />
    </Layout.Content>
  );
};
export default Main;
