import {useState} from "react";
import Image from "next/image";
import {twMerge} from "tailwind-merge";

import {useIsMobile} from "@/hooks/useIsMobile";
import {IProduct} from "@/api/types";
import {Loader, Card} from "@/components/elements";
import PriceWrapper from "@/composites/PriceWrapper/PriceWrapper";
import ATCButton from "@/composites/ATCButton/ATCButton";
import Link from "next/link";

type TProductCardProps = {
  data: IProduct;
  className?: string;
  isLoading?: boolean;
}

const ProductCard = ({data, className, isLoading}: TProductCardProps) => {
  const isMobile = useIsMobile();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const containerSize = "text-xs h-[270px] w-[150px] md:h-[350px] md:w-[200px]"
  const imageWidth = isMobile ? 130 : 180
  const imageHeight = isMobile ? 80 : 160

  return (
    <Card className={className}>
      {isLoading ?
        <Loader className={containerSize} isRounded isClassNameDimension/>
        :
        <div
          className={twMerge("flex flex-col gap-2 p-3 bg-box", containerSize)}>
          <Link className="flex flex-col h-full gap-3" href={`/product/${data.id}`}>
            <div className="flex max-h-[100px] md:max-h-[180px] justify-center bg-secondary rounded-lg p-1">
              <Image
                src={data.thumbnail}
                alt={data.title}
                width={imageWidth}
                height={imageHeight}
                className="object-contain object-center"
                onLoad={() => setIsImageLoaded(true)}
              />
              <Loader className={isImageLoaded ? "hidden" : ""} width={imageWidth} height={imageHeight} isRounded/>
            </div>
            <div className="flex flex-col flex-grow gap-1">
              <div>{data.title}</div>
              <PriceWrapper price={data.price} discount={data.discountPercentage}/>
            </div>
          </Link>
          <ATCButton data={data} isFullWidth buttonSize={isMobile ? "small" : "large"}/>
        </div>
      }
    </Card>
  )
}

export default ProductCard