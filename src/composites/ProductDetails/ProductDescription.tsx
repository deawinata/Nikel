import {IProduct} from "@/api";
import Image from "next/image";
import ATCButton from "@/composites/ATCButton/ATCButton";
import {useIsMobile} from "@/hooks/useIsMobile";
import PriceWrapper from "@/composites/PriceWrapper/PriceWrapper";

type TProductDescriptionProps = {
  data: IProduct
}

const ProductDescription = ({data}: TProductDescriptionProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={`flex gap-6 ${isMobile ? "flex-col items-center" : ""}`}>
      <Image src={data?.images[0] || ""} alt={data?.title || ""} width={200} height={200}/>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">{data?.title}</div>
        <div>{data?.description}</div>
        <PriceWrapper price={data.price} discount={data.discountPercentage}/>
        {!isMobile &&
          <ATCButton data={data}/>
        }
      </div>
      {isMobile &&
        <div className="fixed bottom-0 w-full p-3 -mx-2">
          <ATCButton isFullWidth data={data}/>
        </div>
      }
    </div>
  )
}

export default ProductDescription;