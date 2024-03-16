import type { Rule } from "antd/es/form";

export const nameRules: Rule[] = [
  { required: true, message: "Введите ваше имя" },
  { required: true, min: 2, message: "Минимальная длина 2 символа" },
  {
    required: true,
    max: 30,
    message: "Максимальная длина имени не долюна превышать 30 символов",
  },
];

export const emailRules: Rule[] = [
  { required: true, message: "Введите ваш адрес электронной почты" },
  {
    required: true,
    type: "email",
    message: "Некоректный адрес электронной почты",
  },
];

export const passwordRules: Rule[] = [
  { required: true, message: "Введите ваш пароль" },
  {
    required: true,
    min: 6,
    message: "Пароль должен состоять минимум из 6 символов",
  },
  {
    required: true,
    max: 50,
    message: "Пароль не должен превышать 50 символов",
  },
];
