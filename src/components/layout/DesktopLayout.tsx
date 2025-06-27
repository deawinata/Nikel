import React from "react";

import Header from "@/components/layout/Header";

interface DesktopLayoutProps {
  children: React.ReactNode;
}

export default function DesktopLayout({children}: DesktopLayoutProps) {
  return (
    <>
      <Header/>
      <div className="flex justify-center w-full min-h-[calc(100vh_-_50px)] px-4 py-6 bg-tertiary text-sm">
        <div className="w-full">{children}</div>
      </div>
    </>
  )
}