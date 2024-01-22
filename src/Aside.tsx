import { FC } from "react";
import { v4 as uuid } from "uuid";

type transliterateMapType = {
  [key: string]: any;
};

function slugify(str: string = "") {
  let inputString: string = str.toLowerCase();
  const transliterateMap: transliterateMapType = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  const transliteratedString = inputString.replace(
    /[а-яё]/gi,
    (match: string): string => transliterateMap[match] || match
  );

  const slug = transliteratedString
    .replace(/\s+/g, "-") // Замена пробелов на дефисы
    .replace(/[^\w\s-]/g, "") // Удаление недопустимых символов
    .toLowerCase(); // Приведение к нижнему регистру

  return slug;
}

const educationModules = [
  {
    id: uuid(),
    title: "Глава 1. Основы Java Script",
    href: slugify("Глава 1. Основы Java Script"),
    lessons: [
      { id: uuid(), title: "Рекурсия", link: slugify("Рекурсия") },
      { id: uuid(), title: "Инкапсуляция", link: slugify("Инкапсуляция") },
      {
        id: uuid(),
        title: "НАСЛЕДОВАНИЕ",
        link: slugify("НАСЛЕДОВАНИЕ"),
      },
    ],
  },
  {
    id: uuid(),
    title: "Глава 2. НЕ Основы Java Script",
    href: slugify("Глава 2. НЕ Основы Java Script"),
    lessons: [
      { id: uuid(), title: "Рекурсия", link: slugify("Рекурсия") },
      { id: uuid(), title: "Инкапсуляция", link: slugify("Инкапсуляция") },
      {
        id: uuid(),
        title: "НАСЛЕДОВАНИЕ",
        link: slugify("НАСЛЕДОВАНИЕ"),
      },
    ],
  },
];

const Aside: FC = () => {
  return (
    <aside>
      <nav></nav>
    </aside>
  );
};

export default Aside;
