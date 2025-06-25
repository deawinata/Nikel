'use client'

import MobileLayout from "@/components/layout/MobileLayout";
import DesktopLayout from "@/components/layout/DesktopLayout";
import React from "react";
import {useIsMobile} from "@/hooks/useIsMobile";
import {Provider, useAtomValue} from "jotai";
import {isLoading} from "@/store";
import Loading from "@/components/elements/Loading";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {queries: {retry: false, refetchOnWindowFocus: false}},
});

export default function RootLayoutClient({children}: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const loading = useAtomValue(isLoading)
  return (
    <>
      <QueryClientProvider client={client}>
        <Provider>
          {loading ? <Loading/> :
            isMobile ? <MobileLayout>{children}</MobileLayout> :
              <DesktopLayout>{children}</DesktopLayout>}
        </Provider>
      </QueryClientProvider>
    </>
  )
}