import { FC } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import Link from "next/link";

const AdminPage: FC = () => {
  return (
    <AdminLayout>
      <Link href={"/admin/chapters"}>Chapters</Link>
    </AdminLayout>
  );
};

export default AdminPage;
