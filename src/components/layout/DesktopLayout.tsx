import React from "react";

import Header from "@/components/layout/Header";

interface DesktopLayoutProps {
  children: React.ReactNode;
}

export default function DesktopLayout(props: DesktopLayoutProps) {
  const {children} = props;
  return (
    <>
      <Header/>
      <div className="flex items-center justify-center w-full px-4 py-6 bg-gray-100">
        <div className="max-w-full">{children}</div>
      </div>
    </>
  )
}