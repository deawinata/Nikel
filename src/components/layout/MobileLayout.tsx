import React from "react";

import Header from "@/components/layout/Header";

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout(props: MobileLayoutProps) {
  const {children} = props;
  return (
    <div className="flex flex-col">
      <Header/>
      <div id="spacer" className="pt-[50px]" />
      {children}
    </div>
  )
}