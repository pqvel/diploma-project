import { FC } from "react";
import { Form, Typography, Radio, Space } from "antd";
import { Block } from "@/components/UI";
const { Title, Paragraph } = Typography;

type Variant = {
  id: string;
  title: string;
};

type Props = {
  title: string;
  descr: string;
  variants: Variant[];
  rightAnswer: Variant;
};

const Test: FC<Props> = ({ title, descr, variants, rightAnswer }) => {
  return (
    <Block>
      <Form>
        <Typography>
          <Title level={3}>{title}</Title>
          <Paragraph>{descr}</Paragraph>
        </Typography>
        <Radio.Group>
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

export default Test;
