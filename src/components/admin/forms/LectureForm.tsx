import { FC, useState } from "react";
import { Typography, List } from "antd";
import MarkdownEditor from "@uiw/react-markdown-editor";
// import AntdMarkdown from "@/components/AntdMarkdown";

const LectureForm: FC = () => {
  const [value, setValue] = useState<string>("**Hello world!!!**");
  return (
    <div className="container">
      <MarkdownEditor value={value} onChange={setValue} />
      <MarkdownEditor.Markdown
        source={value}
        style={{ whiteSpace: "pre-wrap" }}
        components={{
          p: (p: any) => {
            console.log(p);
            return null;
          },
        }}
      />
    </div>
  );
};
22;

export default LectureForm;
