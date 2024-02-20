import { FC, useState } from "react";
import { Form, Typography, Radio, Space, Button, Row } from "antd";
import { Block } from "@/components/UI";
import styled from "styled-components";

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

export const enum TestStatus {
  Idle = "IDLE",
  Error = "ERROR",
  Completed = "COMPLETED",
}

const Test: FC<Props> = ({ title, descr, variants, rightAnswer }) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>();
  const [testStatus, setTestStatus] = useState<TestStatus>(TestStatus.Idle);

  const checkAnswer = () => {
    selectedVariant!.id === rightAnswer.id
      ? setTestStatus(TestStatus.Completed)
      : setTestStatus(TestStatus.Error);
  };

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
              <Radio
                onChange={() => setSelectedVariant({ title, id })}
                key={id}
                value={title}
              >
                {title}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
        <Space size={16} />
        {testStatus !== TestStatus.Idle && (
          <RightAnswer status={testStatus}>{rightAnswer.title}</RightAnswer>
        )}
        <Row>
          <Button
            disabled={!selectedVariant}
            type="primary"
            onClick={checkAnswer}
          >
            Проверить
          </Button>
        </Row>
      </Form>
    </Block>
  );
};

export default Test;

const RightAnswer = styled.div<{ status: TestStatus }>`
  ${(props) =>
    props.status === TestStatus.Error
      ? `
    color: red;
    background-color: #ff000022;
  `
      : `
  color: green;
  background-color: #00ff0022;
  `}
  padding: 16px;
  border-radius: 8px;
`;
