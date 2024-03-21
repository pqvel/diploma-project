import { Breadcrumb } from "antd";
import type {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";

const LessonsNavigation = () => {
  const items: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] = [
    { title: "Назад", href: "/prev" },
    { title: "Сейчас" },
    { title: "Вперед", href: "/next" },
  ];
  return <Breadcrumb separator={"-"} items={items}></Breadcrumb>;
};

export default LessonsNavigation;
