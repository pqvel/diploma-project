"use client";
import { FC, useState } from "react";
import { useFormState } from "react-dom";
import MDEditor from "@uiw/react-md-editor";
import { Lecture } from "@prisma/client";
import { Button, Flex } from "antd";
import { changeLecture, deleteLecture } from "@/app/actions/lectures";
import { Block } from "@/components/ui/Wrappers";

type Props = {
  lecture: Lecture;
};

const ChangeLectureForm: FC<Props> = ({ lecture }) => {
  const [__, action] = useFormState(changeLecture, null);

  const [content, setContent] = useState<string | undefined>(lecture.content);
  return (
    <Block>
      <form action={action}>
        <MDEditor
          className="flex flex-col mb-5"
          value={content}
          style={{ height: "1000px" }}
          onChange={setContent}
          textareaProps={{
            name: "content",
          }}
        />
        <input type="hidden" name="lectureId" value={lecture.id} />
        <Flex>
          <Button className="mr-4" htmlType="submit">
            Сохранить
          </Button>
          <Button danger onClick={() => deleteLecture(lecture.id)}>
            Удалить
          </Button>
        </Flex>
      </form>
    </Block>
  );
};

export default ChangeLectureForm;
