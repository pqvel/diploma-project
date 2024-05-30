"use server";
// import { remark } from "remark";
// import remarkHtml from "remark-html";
import ReactMakdown from "react-markdown";
import { FC } from "react";
import { Lecture as LectureType } from "@prisma/client";

const Lecture: FC<LectureType> = async ({ content }) => {
  return <ReactMakdown>{content}</ReactMakdown>;
};

export default Lecture;
