import type { MenuProps } from "antd";
import { slugify } from "../../../../utils/slug";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
    { label: "Базовые", key: slugify("Базовые") , children: [
        { label: "Основы JavaScript", key: slugify("Основы JavaScript") },
        { label: "Первые шаги в JavaScript", key: slugify("Первые шаги в JavaScript") },
        { label: "Структурные элементы JavaScript", key: slugify("Структурные элементы JavaScript") },
        { label: "Введение в объекты JavaScript", key: slugify("Введение в объекты JavaScript") },  
    ]},
    { label: "Руководство по JavaScript", key: slugify("Руководство по JavaScript") , children: [
        { label: "Вступление", key: slugify("Вступление") },
        { label: "Грамматика и типы", key: slugify("Грамматика и типы") },
        { label: "Порядок выполнения и обработка ошибок", key: slugify("Порядок выполнения и обработка ошибок") },
        { label: "Циклы и итерации", key: slugify("Циклы и итерации") },  
        { label: "Функции", key: slugify("Функции") },  
        { label: "Выражения и операторы", key: slugify("Выражения и операторы") },  
        { label: "Числа и даты", key: slugify("Числа и даты") },  
    ]},
    { label: "Средние", key: slugify("Средние") , children: [
        { label: "Понимание JavaScript-фреймворков для фронтенда", key: slugify("Понимание JavaScript-фреймворков для фронтенда") },
        { label: "Клиентский API веба", key: slugify("Клиентский API веба") },
        { label: "Language overview", key: slugify("Language overview") },
    ]},
]