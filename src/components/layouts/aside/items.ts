import type { MenuProps } from "antd";
import { slugify } from "../../../../utils/slug";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    label: "Введение в JavaScript",
    key: slugify("Введение в JavaScript"),
    children: [
      { label: "Что такое JavaScript?", key: slugify("Что такое JavaScript?") },
      {
        label: "История и эволюция JavaScript",
        key: slugify("История и эволюция JavaScript"),
      },
      {
        label: "Почему JavaScript важен для веб-разработки",
        key: slugify("Почему JavaScript важен для веб-разработки"),
      },
    ],
  },
  {
    label: "Основы JavaScript",
    key: slugify("Основы JavaScript"),
    children: [
      { label: "Синтаксис JavaScript", key: slugify("Синтаксис JavaScript") },
      {
        label: "Переменные и типы данных",
        key: slugify("Переменные и типы данных"),
      },
      {
        label: "Операторы и выражения",
        key: slugify("Операторы и выражения"),
      },
      {
        label: "Условные операторы и циклы",
        key: slugify("Условные операторы и циклы"),
      },
      { label: "Дата и время", key: slugify("Дата и время") },
    ],
  },
  {
    label: "Массивы",
    key: slugify("Массивы"),
    children: [
      {
        label: "Создание и обращение к массивам",
        key: slugify("Создание и обращение к массивам"),
      },
      {
        label: "Методы массивов (push, pop, shift, unshift, splice и т. д.)",
        key: slugify(
          "Методы массивов (push, pop, shift, unshift, splice и т. д.)"
        ),
      },
      {
        label: "Создание и работа с объектами",
        key: slugify("Создание и работа с объектами"),
      },
      {
        label: "Прототипы и наследование в JavaScript",
        key: slugify("Прототипы и наследование в JavaScript"),
      },
    ],
  },
  {
    label: "Функции",
    key: slugify("Функции"),
    children: [
      {
        label: "Объявление функций",
        key: slugify("Объявление функций"),
      },
      {
        label: "Параметры и аргументы функций",
        key: slugify("Параметры и аргументы функций"),
      },
      {
        label: "Анонимные функции и функциональные выражения",
        key: slugify("Анонимные функции и функциональные выражения"),
      },
      {
        label: "Работа с массивами и объектами",
        key: slugify("Работа с массивами и объектами"),
      },
    ],
  },
  {
    label: "Работа с элементами DOM",
    key: slugify("Работа с элементами DOM"),
    children: [
      {
        label: "Что такое DOM",
        key: slugify("Что такое DOM"),
      },
      {
        label: "Получение доступа к элементам DOM",
        key: slugify("Получение доступа к элементам DOM"),
      },
      {
        label: "Обработка событий",
        key: slugify("Обработка событий"),
      },
    ],
  },
  {
    label: "Асинхронное программирование",
    key: slugify("Асинхронное программирование"),
    children: [
      {
        label: "Обзор асинхронности в JavaScript",
        key: slugify("Обзор асинхронности в JavaScript"),
      },
      {
        label: "Промисы",
        key: slugify("Промисы"),
      },
      {
        label: "Асинхронные функции (async/await)",
        key: slugify("Асинхронные функции (async/await)"),
      },
    ],
  },
  {
    label: "Обработка ошибок и отладка",
    key: slugify("Обработка ошибок и отладка"),
    children: [
      {
        label: "Ошибки в JavaScript",
        key: slugify("Ошибки в JavaScript"),
      },
      {
        label: "Использование конструкции try...catch",
        key: slugify("Использование конструкции try...catch"),
      },
      {
        label: "Инструменты для отладки кода",
        key: slugify("Инструменты для отладки кода"),
      },
      {
        label: "Работа с AJAX и HTTP запросами",
        key: slugify("Работа с AJAX и HTTP запросами"),
      },
    ],
  },

  {
    label: "Введение в AJAX",
    key: slugify("Введение в AJAX"),
    children: [
      {
        label: "Основы работы с XMLHttpRequest",
        key: slugify("Основы работы с XMLHttpRequest"),
      },
      {
        label: "Fetch API",
        key: slugify("Fetch API"),
      },
      {
        label: "Работа с API и обмен данными с сервером",
        key: slugify("Работа с API и обмен данными с сервером"),
      },
    ],
  },
  {
    label: "Локальное хранение данных",
    key: slugify("Локальное хранение данных"),
    children: [
      {
        label: "Cookies",
        key: slugify("Cookies"),
      },
      {
        label: "Web Storage (localStorage и sessionStorage)",
        key: slugify("Web Storage (localStorage и sessionStorage)"),
      },
      {
        label: "IndexedDB",
        key: slugify("IndexedDB"),
      },
    ],
  },
  {
    label: "Введение в фреймворки и библиотеки JavaScript",
    key: slugify("Введение в фреймворки и библиотеки JavaScript"),
    children: [
      {
        label:
          "Обзор популярных фреймворков и библиотек (например, React, Angular, Vue.js)",
        key: slugify(
          "Обзор популярных фреймворков и библиотек (например, React, Angular, Vue.js)"
        ),
      },
      {
        label: "Выбор подходящего инструмента для разработки",
        key: slugify("Выбор подходящего инструмента для разработки"),
      },
    ],
  },
  {
    label: "Продвинутые темы JavaScript",
    key: slugify("Продвинутые темы JavaScript"),
    children: [
      {
        label: "ES6+ и новые возможности JavaScript",
        key: slugify("ES6+ и новые возможности JavaScript"),
      },
      {
        label: "Модульность и системы сборки (например, Webpack)",
        key: slugify("Модульность и системы сборки (например, Webpack)"),
      },
      {
        label: "Тестирование JavaScript кода",
        key: slugify("Тестирование JavaScript кода"),
      },
    ],
  },
  {
    label: "Создание приложений и игр на JavaScript",
    key: slugify("Создание приложений и игр на JavaScript"),
    children: [
      {
        label: "Применение JavaScript для создания веб-приложений",
        key: slugify("Применение JavaScript для создания веб-приложений"),
      },
      {
        label: "Использование JavaScript для разработки игр",
        key: slugify("Использование JavaScript для разработки игр"),
      },
    ],
  },
];
