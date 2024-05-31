"use client";
import { FC } from "react";
import { useFormState } from "react-dom";
import { Block } from "@/components/ui/Wrappers";
import { changeTest } from "@/app/actions/tests";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Test } from "@prisma/client";

type Props = {
  test: Test;
};

const ChangeTestForm: FC<Props> = ({ test }) => {
  const [__, action] = useFormState(changeTest, null);

  return (
    <Block>
      <form action={action}>
        <Input className=" mb-4" name="title" defaultValue={test.title} />
        <TextArea
          className=" mb-4"
          name="description"
          defaultValue={test.description}
        />
        {/* <Select> */}
        <input type="hidden" name="typeTest" value={test.typeTest} />
        <Button htmlType="submit">Сохранить</Button>
      </form>

      <form></form>
    </Block>
  );
};

export default ChangeTestForm;
