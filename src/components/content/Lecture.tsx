"use client";
import { FC, ReactNode } from "react";
import ReactMakdown from "react-markdown";
import { Lecture as LectureType } from "@prisma/client";
import { List, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import CodeHighlighter from "../ui/CodeHighlighter";
// import CodeHighlighter from "@/components/ui/CodeHighlighter";

type TitleLevel = 1 | 2 | 3 | 4 | 5;

type MarkdownComponents = {
  [key: string]: (props: { children: string }) => ReactNode;
};

const ToAntdMarkdown = (
  tagNames: string[],
  callback: (tagName: string) => (props: { children: string }) => ReactNode
) => {
  const markdownComponents: MarkdownComponents = {};

  tagNames.forEach((tagName) => {
    markdownComponents[tagName] = callback(tagName);
  });

  return markdownComponents;
};

const Lecture: FC<LectureType> = ({ content }) => {
  return (
    <Typography>
      <ReactMakdown
        components={{
          ...ToAntdMarkdown(
            ["h1", "h2", "h3", "h4", "h5"],
            (tagName) =>
              ({ children }) => {
                const level: TitleLevel = +tagName[1] as TitleLevel;
                return <Title level={level}>{children}</Title>;
              }
          ),
          p: ({ children }) => (
            <Paragraph style={{ fontSize: "16px" }}>{children}</Paragraph>
          ),
          ol: ({ children }) => {
            const c = children as {
              type: string;
              props: { children: string };
            }[];
            const items: string[] = [];

            c!.forEach((item) => {
              if (item.type) {
                items.push(item.props.children);
              }
            });

            return (
              <List
                dataSource={items}
                renderItem={(item, index) => (
                  <List.Item>{`${index + 1}. ${item}`} </List.Item>
                )}
              />
            );
          },
          code: ({ children = "" }) => <CodeHighlighter code={`${children}`} />,
        }}
      >
        {content}
      </ReactMakdown>
    </Typography>
  );
};

export default Lecture;
