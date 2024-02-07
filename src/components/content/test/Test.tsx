import { FC, useState } from "react";
import { Button, Form, Typography, Radio, Row, Col, Space } from "antd";
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
        <Radio.Group
        // onChange={onChange} value={value}
        >
          <Space direction="vertical">
            {variants.map(({ title, id }) => (
              <Radio key={id} value={title}>
                {title}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form>
    </Block>
  );
};

type TestInputProps = {
  title: string;
  type: TestInputType;
};

export default Test;
