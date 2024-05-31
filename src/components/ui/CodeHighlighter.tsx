"use client";
import { FC } from "react";
import { CopyBlock, tomorrowNightBright as theme } from "react-code-blocks";

type Props = {
  code: string;
};

const CodeHighlighter: FC<Props> = ({ code }) => {
  return (
    <CopyBlock
      text={code}
      theme={theme}
      language={"js"}
      customStyle={{
        padding: "12px",
        overflowY: "auto",
        maxWidth: "100%",
      }}
    />
  );
};

export default CodeHighlighter;
