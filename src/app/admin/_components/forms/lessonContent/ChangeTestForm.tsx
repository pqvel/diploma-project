"use client";
import { FC } from "react";
import { useFormState } from "react-dom";
import { Block } from "@/components/ui/Wrappers";
import { changeTest } from "@/app/actions/tests";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Test, Answer } from "@prisma/client";
import ChangeAnswerForm from "./ChangeAnswerForm";
import { createAnswer } from "@/app/actions/answers";

interface TestWithAnswers extends Test {
  answers: Answer[];
}

type Props = {
  test: TestWithAnswers;
  lessonSlug: string;
};

const ChangeTestForm: FC<Props> = ({ test, lessonSlug }) => {
  const [__, action] = useFormState(changeTest, null);

  return (
    <Block>
      <form action={action}>
        <div className="mb-4">
          <Input name="title" defaultValue={test.title} />
        </div>
        <div className="mb-4">
          <TextArea name="description" defaultValue={test.description} />
        </div>
        {/* <Select> */}
        <input type="hidden" name="typeTest" value={test.typeTest} />
        <input type="hidden" name="id" value={test.id} />
        <input type="hidden" name="lessonSlug" value={lessonSlug} />
        <Button className="mb-4" htmlType="submit">
          Сохранить
        </Button>
      </form>

      {test.answers.map((answer) => (
        <ChangeAnswerForm
          key={answer.id}
          answer={answer}
          isCorrect={test.correctAnswerId === answer.id}
        />
      ))}

      <Button onClick={() => createAnswer(test.id)}>Добавить вариант</Button>
    </Block>
  );
};

export default ChangeTestForm;
