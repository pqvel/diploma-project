import { FC, ReactNode } from "react";
import { List } from "antd";

/* eslint-disable no-console, no-control-regex*/
import {
  // List,
  Typography,
} from "antd";
import Markdown from "react-markdown";
import { CopyBlock, tomorrowNightBright as theme } from "react-code-blocks";
import styled from "styled-components";

type TitleLevel = 1 | 2 | 3 | 4 | 5;

type MarkdownComponents = {
  [key: string]: (props: { children: string }) => ReactNode;
};

const toAntdMarkdown = (
  tagNames: string[],
  callback: (tagName: string) => (props: { children: string }) => ReactNode
) => {
  const markdownComponents: MarkdownComponents = {};

  tagNames.forEach((tagName) => {
    markdownComponents[tagName] = callback(tagName);
  });

  return markdownComponents;
};

type Props = {
  children: string;
};

const StyledTypography = styled(Typography)`
  h1 {
    &:first-child {
      margin-top: 0;
    }
  }
`;

const AntdMarkdown: FC<Props> = ({ children }) => {
  return (
    <StyledTypography>
      <Markdown
        components={{
          ...toAntdMarkdown(
            ["h1", "h2", "h3", "h4", "h5"],
            (tagName) =>
              ({ children }) => {
                const level: TitleLevel = +tagName[1] as TitleLevel;
                return (
                  <Typography.Title level={level}>{children}</Typography.Title>
                );
              }
          ),
          p: ({ children }) => (
            <Typography.Paragraph>{children}</Typography.Paragraph>
          ),
          ol: ({ children }) => {
            const items: string[] = [];
            // eslint-disable-next-line
            children!.forEach(
              (item: { type: string; props: { children: string } }) => {
                if (item.type) {
                  items.push(item.props.children);
                }
              }
            );

            return (
              <List
                dataSource={items}
                renderItem={(item, index) => (
                  <List.Item>{`${index + 1}. ${item}`} </List.Item>
                )}
              />
            );
          },
          code: ({ children = "" }) => (
            <CopyBlock
              text={children as string}
              theme={theme}
              language={"js"}
              customStyle={{ padding: "12px" }}
            />
          ),
        }}
      >
        {children}
      </Markdown>
    </StyledTypography>
  );
};

export default AntdMarkdown;
