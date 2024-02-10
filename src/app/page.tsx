"use client";
import React from "react";
import Aside from "@/components/layouts/aside/Aside";
import Header from "@/components/layouts/header/Header";
import Main from "@/components/layouts/main/Main";
import Footer from "@/components/layouts/footer/Footer";
import { Layout } from "antd";
const App: React.FC = () => (
  <Layout>
    <Aside />
    <Layout style={{ overflowY: "auto" }}>
      <Header />
      <Main />
      <Footer />
    </Layout>
  </Layout>
);

export default App;

// import { Layout } from "antd";
// import Aside from "@/components/layouts/aside/Aside";
// import Footer from "@/components/layouts/footer/Footer";
// import Main from "@/components/layouts/main/Main";
// import Header from "../components/layouts/header/Header";

// export default function Home() {
//   return (
//     <Layout>
//       <Aside />
//       <Layout>
//         <Header />
//         {/* <Main />
//         <Footer /> */}
//       </Layout>
//     </Layout>
//   );
// }
