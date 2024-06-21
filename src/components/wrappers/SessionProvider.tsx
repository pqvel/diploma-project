"use client";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

export const SessionWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default SessionProvider;
