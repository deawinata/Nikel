'use client'

import MobileLayout from "@/components/layout/MobileLayout";
import DesktopLayout from "@/components/layout/DesktopLayout";
import React from "react";
import {useIsMobile} from "@/hooks/useIsMobile";
import {Provider} from "jotai";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {queries: {retry: false, refetchOnWindowFocus: false}},
});

export default function RootLayoutClient({children}: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  return (
    <>
      <QueryClientProvider client={client}>
        <Provider>
          {isMobile ?
            <MobileLayout>{children}</MobileLayout> : <DesktopLayout>{children}</DesktopLayout>}
        </Provider>
      </QueryClientProvider>
    </>
  )
}