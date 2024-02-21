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
  Completed = "COMPLETED",
}

const Correlate: FC<Props> = ({ correlateItems }) => {
  const [items, setItems] = useState(correlateItems);
  const [leftSelectItem, setLeftSelectItem] = useState<ItemType | null>(null);
  const [rightSelectItem, setRightSelectItem] = useState<ItemType | null>(null);
  const [status, setStatus] = useState<Status>(Status.Idle);

  useEffect(() => {
    if (!leftSelectItem || !rightSelectItem) return;

    if (leftSelectItem.id === rightSelectItem.pairItemId) {
      setItems((items) => ({
        right: items.right.map((item) =>
          item.id === rightSelectItem.id ? { ...item, isDisabled: true } : item
        ),
        left: items.left.map((item) =>
          item.id === leftSelectItem.id ? { ...item, isDisabled: true } : item
        ),
      }));
      setLeftSelectItem(null);
      setRightSelectItem(null);
    } else {
      setStatus(Status.Error);

      setTimeout(() => {
        setStatus(Status.Idle);
        setLeftSelectItem(null);
        setRightSelectItem(null);
      }, 2000);
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
              isError={
                item.id === leftSelectItem?.id && status === Status.Error
              }
              handleChange={() =>
                status !== Status.Error &&
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
              isError={
                item.id === rightSelectItem?.id && status === Status.Error
              }
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
