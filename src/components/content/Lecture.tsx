"use client";
import { FC, ReactNode } from "react";
import AntdMarkdown from "@/components/AntdMarkdown";
import { Block } from "@/components/UI/Block";

const markdown = `# Типы данных

Значение в JavaScript всегда относится к данным определённого типа. Например, это может быть строка или число.

Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:

\`\`\`
// Не будет ошибкой
let message = "hello";
message = 123456;
\`\`\`

Языки программирования, в которых такое возможно, называются «динамически типизированными». Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.

## Число

\`\`\`
let n = 123;
n = 12.345;
\`\`\`

Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.

Существует множество операций для чисел, например, умножение *, деление /, сложение +, вычитание - и так далее.

Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.

> Математические операции – безопасны
> Математические операции в JavaScript «безопасны». Мы можем делать что угодно: делить на ноль, обращаться с нечисловыми строками как с числами и т.д.
> Скрипт никогда не остановится с фатальной ошибкой (не «умрёт»). В худшем случае мы получим NaN как результат выполнения.

Специальные числовые значения относятся к типу «число». Конечно, это не числа в привычном значении этого слова.


\`\`\`
let num = 10; // number
let str = "Привет"; // string
let bool = true; // boolean
let x; // undefined
let y = null; // null
let bigInt = 12345678901234567890n; // bigInt
let sym = Symbol("id"); // symbol

console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"
console.log(typeof x); // "undefined"
console.log(typeof y); // "object" (ошибка в языке)
console.log(typeof bigInt); // "bigint"
console.log(typeof sym); // "symbol"

console.log(x instanceof Number); // false
console.log(num instanceof Number); // true
\`\`\`
`;

const Lecture: FC = () => (
  <Block>
    <AntdMarkdown>{markdown}</AntdMarkdown>
  </Block>
);

export default Lecture;
