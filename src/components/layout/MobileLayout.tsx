import React from "react";

import Header from "@/components/layout/Header";

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({children}: MobileLayoutProps) {
  return (
    <>
      <Header/>
      <div className="flex justify-center w-full min-h-[calc(100vh_-_50px)] px-2 py-4 bg-tertiary text-sm">
        <div className="max-w-full">{children}</div>
      </div>
    </>
  )
}