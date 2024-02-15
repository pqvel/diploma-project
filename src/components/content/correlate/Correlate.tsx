import { FC } from "react";
import { Space, Row, Col } from "antd";
import { Block, SelectInput } from "@/components/UI";
import { v4 as uuid } from "uuid";

type ItemType = {
  text: string;
  id: string;
};

const enum Side {
  left = "left",
  right = "right",
}

const Correlate: FC = () => {
  const items = {
    left: [
      { id: "1", text: "let" },
      { id: "2", text: "var" },
      { id: "3", text: "const" },
    ],
    right: [
      { id: "4", text: "Глобальная переменная которую можно изменить" },
      { id: "5", text: "Глобальная переменная которую можно изменить" },
      { id: "6", text: "Глобальная переменная которую можно изменить" },
    ],
    answers: {
      "1": "4",
      "2": "5",
      "3": "6",
    },
  };

  // const selected = null;

  const handleCorrelate = (side: Side, id: string) => {};

  return (
    <Block>
      <Row gutter={[16, 16]} justify="start">
        <Row>
          {items.left.map(({ id, text }) => (
            <Col key={id} span={6}>
              <SelectInput key={id} text={text} />
            </Col>
          ))}
        </Row>
        <Row>
          {items.right.map(({ id, text }) => (
            <Col key={id} span={6}>
              <SelectInput key={id} text={text} />
            </Col>
          ))}
        </Row>
      </Row>
    </Block>
  );
};

export default Correlate;

// import React, { useState, useEffect } from "react";

// const Correlate = () => {
//   const [firstList, setFirstList] = useState([]);
//   const [secondList, setSecondList] = useState([]);
//   const [matchedPairs, setMatchedPairs] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Генерация случайных списков
//   useEffect(() => {
//     const generateRandomList = () => {
//       const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
//       const shuffledItems = [...items].sort(() => Math.random() - 0.5);
//       setFirstList(shuffledItems);
//       setSecondList([...shuffledItems].sort(() => Math.random() - 0.5));
//     };

//     generateRandomList();
//   }, []);

//   // Проверка на совпадение выбранного элемента
//   useEffect(() => {
//     if (selectedItem !== null) {
//       const matchedIndex = firstList.findIndex((item) => item === selectedItem);
//       if (matchedIndex !== -1 && secondList[matchedIndex] === selectedItem) {
//         setMatchedPairs((prevState) => [...prevState, selectedItem]);
//       }
//       setSelectedItem(null);
//     }
//   }, [selectedItem, firstList, secondList]);

//   // Обработчик клика по элементу из первого списка
//   const handleItemClick = (item) => {
//     if (!matchedPairs.includes(item)) {
//       setSelectedItem(item);
//     }
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div>
//           <h2>Первый список</h2>
//           <ul>
//             {firstList.map((item) => (
//               <li
//                 key={item}
//                 onClick={() => handleItemClick(item)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h2>Второй список</h2>
//           <ul>
//             {secondList.map((item) => (
//               <li key={item}>
//                 {matchedPairs.includes(item) ? <del>{item}</del> : item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <h2>Совпавшие пары</h2>
//       <ul>
//         {matchedPairs.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Correlate;
