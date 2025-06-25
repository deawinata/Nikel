import {twMerge} from "tailwind-merge";

interface ILoaderProps {
  className?: string;
}

export default function Loader(props: ILoaderProps) {
  const {className} = props;
  return (
    <div className={twMerge("bg-gray-200 rounded-xl shrink-0 grow-0 animate-pulse", className)}>
      <div className="animate-pulse h-full relative">
        <div className={"bg-gray-200 absolute inset-0"}/>
      </div>
    </div>
  )
}