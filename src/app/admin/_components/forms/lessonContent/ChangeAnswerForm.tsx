import { FC, useState } from "react";
import { useFormState } from "react-dom";
import { Button, Checkbox, Flex, Input } from "antd";
import { Block } from "@/components/ui/Wrappers";
import { Answer } from "@prisma/client";
import {
  changeAnswer,
  deleteAnswer,
  changeCorrectAnswer,
} from "@/app/actions/answers";

type Props = {
  answer: Answer;
  isCorrect: boolean;
};

const ChangeAnswerForm: FC<Props> = ({ answer, isCorrect }) => {
  const [__, action] = useFormState(changeAnswer, null);

  return (
    <Block>
      <form action={action}>
        <Flex className="mb-4">
          <Input name="title" defaultValue={answer.title} />
          <Checkbox
            name="isCorrect"
            defaultChecked={isCorrect}
            onChange={(e) => changeCorrectAnswer(answer.id, e.target.checked)}
          />
          <input type="hidden" name="id" value={answer.id} />
        </Flex>
        <Flex>
          <Button className="mr-4" htmlType="submit">
            Сохранить
          </Button>
          <Button danger onClick={() => deleteAnswer(answer.id)}>
            Удалить
          </Button>
        </Flex>
      </form>
    </Block>
  );
};

export default ChangeAnswerForm;
