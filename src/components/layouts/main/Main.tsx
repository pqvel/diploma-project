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
        margin: "40px 0",
      }}
    >
      <Lecture />
      <Test
        title="Какой тип данных обозначает отсутствие какого-либо значения?"
        descr="Выберите один правильный ответ"
        variants={[
          { id: "1", title: "undefined" },
          { id: "2", title: "null" },
          { id: "3", title: "empty" },
          { id: "4", title: "none" },
        ]}
        rightAnswer={{ id: "2", title: "null" }}
      />
      <Correlate
        correlateItems={{
          left: [
            { id: "1", text: "number", pairItemId: "6", isDisabled: false },
            { id: "2", text: "string", pairItemId: "8", isDisabled: false },
            { id: "3", text: "boolean", pairItemId: "7", isDisabled: false },
            { id: "4", text: "object", pairItemId: "5", isDisabled: false },
          ],
          right: [
            {
              id: "5",
              text: "Сложный тип данных имеющий определнную структуру",
              pairItemId: "4",
              isDisabled: false,
            },
            {
              id: "6",
              text: "Числовой тип данных",
              pairItemId: "1",
              isDisabled: false,
            },
            {
              id: "7",
              text: "Логический тип данных",
              pairItemId: "3",
              isDisabled: false,
            },
            {
              id: "8",
              text: "Строковый тип данных",
              pairItemId: "2",
              isDisabled: false,
            },
          ],
        }}
      />
      {/* <LessonsNavigation /> */}
    </Layout.Content>
  );
};
export default Main;
