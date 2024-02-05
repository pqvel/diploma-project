import { FC, useState } from "react";
import { Button, Form, Typography, Checkbox, Row, Col } from "antd";
import { Block } from "@/components/UI/Block";
// добавить MultipleChoose и OneChoose
const { Title, Paragraph } = Typography;

const enum TestInputType {
  radio = "radio",
  checkbox = "checkbox",
}

type Variant = {
  id: string;
  title: string;
};

type Props = {
  title: string;
  descr: string;
  variants: Variant[];
  rightAnswers: Variant[];
};

const Test: FC<Props> = ({ title, descr, variants, rightAnswers }) => {
  const inputType: TestInputType =
    rightAnswers.length === 1 ? TestInputType.radio : TestInputType.checkbox;
  const [selectedVariants, setSelectedVariants] = useState<Variant[]>([]);

  return (
    <Block>
      <Form>
        <Typography>
          <Title level={3}>{title}</Title>
          <Paragraph>{descr}</Paragraph>
        </Typography>
        <Checkbox.Group>
          <Row>
            {variants.map(({ title, id }) => (
              <Col span={16}>
                <Checkbox value={title}>{title}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form>
    </Block>
  );
};

type TestInputProps = {
  title: string;
  type: TestInputType;
};

export default Test;
