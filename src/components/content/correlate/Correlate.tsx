import { FC, useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import { Block, SelectInput } from "@/components/UI";

type ItemType = {
  id: string;
  pairItemId: string;
  text: string;
  isDisabled: boolean;
};

type Props = {
  correlateItems: {
    left: ItemType[];
    right: ItemType[];
  };
};

const enum Status {
  Idle = "IDLE",
  Error = "ERROR",
  Confirm = "ERROR",
}

/**
 требования к компоненту
 */
const Correlate: FC<Props> = ({ correlateItems }) => {
  const [items, setItems] = useState(correlateItems);
  const [leftSelectItem, setLeftSelectItem] = useState<ItemType | null>(null);
  const [rightSelectItem, setRightSelectItem] = useState<ItemType | null>(null);

  useEffect(() => {
    if (leftSelectItem && rightSelectItem) {
      if (leftSelectItem.pairItemId === rightSelectItem.pairItemId) {
        setItems((items) => ({
          right: items.right.map((item) =>
            item.id === rightSelectItem.id
              ? { ...item, isDisabled: true }
              : item
          ),
          left: items.left.map((item) =>
            item.id === leftSelectItem.id ? { ...item, isDisabled: true } : item
          ),
        }));
      } else {
      }
    }
  }, [leftSelectItem, rightSelectItem]);

  return (
    <Block>
      <Typography.Title level={3}>Соотнесите варианты ответов</Typography.Title>
      <Row gutter={[16, 16]} justify="start">
        <Col style={{ maxWidth: "400px", width: "100%" }}>
          {items.left.map((item) => (
            <SelectInput
              key={item.id}
              text={item.text}
              isChecked={item.id === leftSelectItem?.id}
              isDisabled={item.isDisabled}
              handleChange={() =>
                setLeftSelectItem((selectedItem) =>
                  selectedItem?.id === item.id ? null : item
                )
              }
            />
          ))}
        </Col>
        <Col style={{ maxWidth: "400px", width: "100%" }}>
          {items.right.map((item) => (
            <SelectInput
              key={item.id}
              text={item.text}
              isChecked={item.id === rightSelectItem?.id}
              isDisabled={item.isDisabled}
              handleChange={() =>
                setRightSelectItem((selectedItem) =>
                  selectedItem?.id === item.id ? null : item
                )
              }
            />
          ))}
        </Col>
      </Row>
    </Block>
  );
};

export default Correlate;
