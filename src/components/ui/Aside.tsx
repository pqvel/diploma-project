// "use client";
// import { FC, useState } from "react";
// import Link from "next/link";
// // import styled from "styled-components";
// import { ItemType } from "antd/es/menu/interface";
// import { Menu, Layout } from "antd";
// import { Backdrop } from "@/components/ui/Backdrop";
// // import { Scroll } from "@/components/ui/Wrappers";
// import { Chapter as PrismaChapter, Lesson } from "@prisma/client";

// // const StyledAside = styled(Layout.Sider)`
// //   @media (max-width: 992px) {
// //     &.aside {
// //       position: fixed;
// //       z-index: 10;
// //       top: 0;
// //       left: 0;
// //       height: 100%;
// //       padding: 20px 0;
// //       margin: 0;
// //       background-color: #fff;
// //       border-inline-end: 1px solid rgba(5, 5, 5, 0.06);

// //       .ant-menu {
// //         &-inline {
// //           border-inline-end: none;
// //         }
// //       }
// //     }
// //   }
// // `;

// interface Chapter extends PrismaChapter {
//   lessons: Lesson[];
// }

// type Props = {
//   closeAside: () => void;
//   collapsedAside: boolean;
//   chapters: Chapter[];
// };

// const Aside: FC<Props> = ({ collapsedAside, chapters, closeAside }) => {
//   const [currentItem, setCurrentItem] = useState<{
//     chapterId: number;
//     lessonId: number;
//   }>({ chapterId: 0, lessonId: 0 });

//   return (
//     <>
//       <Backdrop isOpen={!collapsedAside} onClick={closeAside} />
//       <StyledAside
//         className="aside"
//         theme="light"
//         breakpoint="lg"
//         width={280}
//         style={{
//           backgroundColor: "#fff",
//           margin: "0 40px 0 0",
//           width: "320px",
//         }}
//         collapsedWidth="0"
//         trigger={null}
//         collapsible
//         collapsed={collapsedAside}
//       >
//         <Scroll maxHeight="100svh">
//           <Menu
//             theme="light"
//             mode="inline"
//             items={
//               chapters.map((chapter) => ({
//                 key: chapter.id,

//                 label: chapter.title,
//                 children: chapter.lessons.map((lesson) => ({
//                   key: `${lesson.id}-item`,
//                   active: true,
//                   selected: true,
//                   label: <Link href={`/${lesson.slug}`}>{lesson.title}</Link>,
//                 })),
//               })) as ItemType[]
//             }
//           />
//         </Scroll>
//       </StyledAside>
//     </>
//   );
// };

// export default Aside;
