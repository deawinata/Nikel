import {Icons} from "@/components/elements";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full p-3 h-[50px] justify-between items-center bg-primary">
      <Link href="/" className="text-white font-bold hover:cursor-pointer">
        Nikel Store
      </Link>
      <Link href="/cart" className="text-white font-bold hover:cursor-pointer">
        <Icons name="cart"/>
      </Link>
    </div>
  )
}

export default Header