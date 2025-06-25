import React from "react";

import Header from "@/components/layout/Header";

interface DesktopLayoutProps {
  children: React.ReactNode;
}

export default function DesktopLayout(props: DesktopLayoutProps) {
  const {children} = props;
  return (
    <div className="flex flex-col w-full bg-white">
      <Header/>
      <div id="spacer" className="pt-[50px]" />
      <div className="flex flex-col gap-2 w-full bg-white h-[calc(100vh_-_50px)]">
        {children}
      </div>
    </div>
  )
}