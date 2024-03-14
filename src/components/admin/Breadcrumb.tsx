"use client";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Breadcrumb } from "antd";

const Breadcrumbs: FC = () => {
  const router = useRouter();
  const { asPath } = router;

  const pathSegments = asPath.split("/").filter((p) => p);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLastItem = index === pathSegments.length - 1;

    return (
      <Breadcrumb.Item key={segment}>
        {isLastItem ? segment : <Link href={url}>{segment}</Link>}{" "}
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link href="/admin">Admin</Link>
      </Breadcrumb.Item>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
