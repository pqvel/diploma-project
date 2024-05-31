"use client";
import { FC, useState } from "react";
import { Form, Typography, Radio, Space, Button, Row } from "antd";
import styled from "styled-components";
import { Block } from "@/components/ui/Wrappers";
import { Test as TestType, Answer } from "@prisma/client";

const { Title, Paragraph } = Typography;
const { Group } = Radio;
interface TestTypeWithAnswers extends TestType {
  answers: Answer[];
}

export const enum TestStatus {
  Idle = "IDLE",
  Error = "ERROR",
  Completed = "COMPLETED",
}

const Test: FC<TestTypeWithAnswers> = ({
  title,
  description,
  answers,
  correctAnswerId,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<Answer>();
  const [testStatus, setTestStatus] = useState<TestStatus>(TestStatus.Idle);

  const checkAnswer = () => {
    selectedVariant!.id === correctAnswerId
      ? setTestStatus(TestStatus.Completed)
      : setTestStatus(TestStatus.Error);
  };

  return (
    <Block>
      <Form>
        <Typography>
          <Title level={3}>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </Typography>
        <Group style={{ marginBottom: 16 }}>
          <Space direction="vertical">
            {answers.map((answer) => (
              <Radio
                onChange={() => setSelectedVariant(answer)}
                key={answer.id}
                value={answer.title}
                disabled={testStatus !== TestStatus.Idle}
              >
                {answer.title}
              </Radio>
            ))}
          </Space>
        </Group>
        <Space size={16} />
        {testStatus !== TestStatus.Idle && (
          <RightAnswer status={testStatus}>
            Правильный ответ:{" "}
            {answers.find((item) => item.id === correctAnswerId)?.title}
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

export default Test;

const RightAnswer = styled.div<{ status: TestStatus }>`
  color: ${(props) => (props.status === TestStatus.Error ? "red" : "green")};
  background: ${(props) =>
    props.status === TestStatus.Error ? "#ff000022" : "#00ff0022"};

  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  max-width: 600px;
`;
