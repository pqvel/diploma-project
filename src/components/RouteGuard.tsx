"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";

interface RouteGuardProps {
  children: ReactNode;
  role?: string;
}

const RouteGuard = ({ children, role }: RouteGuardProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!session) {
      router.push("/login");
      return;
    }

    // if (role && session!.user!.role !== role) {
    //   router.push("/");
    // }
  }, [session, status, router, role]);

  // if (
  //   status === "loading" ||
  //   !session ||
  //   (role && session!.user!.role !== role)
  // ) {
  //   return <div>Loading...</div>;
  // }

  return <>{children}</>;
};

export default RouteGuard;
