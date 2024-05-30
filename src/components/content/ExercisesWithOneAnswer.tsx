"use client";
import { FC, useState } from "react";
import { Form, Typography, Radio, Space, Button, Row } from "antd";
import styled from "styled-components";
import { Block } from "@/components/ui/Wrappers";

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

const ExercisesWithOneAnswer: FC<Props> = ({
  title,
  descr,
  variants,
  rightAnswer,
}) => {
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
        <Radio.Group style={{ marginBottom: 16 }}>
          <Space direction="vertical">
            {variants.map(({ title, id }) => (
              <Radio
                onChange={() => setSelectedVariant({ title, id })}
                key={id}
                value={title}
                disabled={testStatus !== TestStatus.Idle}
              >
                {title}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
        <Space size={16} />
        {testStatus !== TestStatus.Idle && (
          <RightAnswer status={testStatus}>
            Правильный ответ: {rightAnswer.title}
          </RightAnswer>
        )}
        <Row>
          <Button
            disabled={!selectedVariant || testStatus === TestStatus.Error}
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

export default ExercisesWithOneAnswer;

const RightAnswer = styled.div<{ status: TestStatus }>`
  color: ${(props) => (props.status === TestStatus.Error ? "red" : "green")};
  background: ${(props) =>
    props.status === TestStatus.Error ? "#ff000022" : "#00ff0022"};

  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  max-width: 600px;
`;
