import { useEffect } from 'react'
import {useSetAtom} from "jotai";
import {isMobile} from "@/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Viewport(props: any) {
  const deviceIsMobile = props.isMobile

  const setDeviceIsMobile = useSetAtom(isMobile)

  useEffect(() => {
    if (deviceIsMobile) setDeviceIsMobile(deviceIsMobile)
  }, [deviceIsMobile])

  return <div></div>
}
