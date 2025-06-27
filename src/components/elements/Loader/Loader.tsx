import {twMerge} from "tailwind-merge";

type TContentLoaderProps = {
  width?: string | number;
  height?: string | number;
  isRounded?: boolean;
  isCircle?: boolean;
  className?: string;
  isClassNameDimension?: boolean;
}

const Loader = (
  {
    width = "100%",
    height = "100%",
    isRounded,
    isCircle,
    className,
    isClassNameDimension = false,
  }: TContentLoaderProps) => {

  const dimension = {width, height};

  return (
    <div
      className={twMerge(
        "bg-gray-300 animate-pulse shrink-0 grow-0",
        isRounded && "rounded-lg",
        isCircle && "rounded-full",
        className
      )}
      style={isClassNameDimension ? {} : dimension}
    />
  );
}

export default Loader;
