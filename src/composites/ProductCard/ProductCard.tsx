import Card from "@/components/elements/Card/Card";
import Image from "next/image";
import {IProduct} from "@/api/types";

interface IProductCardProps {
    data: IProduct;
    className?: string;
}

const ProductCard = (props: IProductCardProps) => {
    const {data, className = ""} = props;
    return (
        <Card className={className}>
            <div className="flex flex-col h-[200px] w-[120px] gap-2 p-3">
              <div className="flex max-h-[80px] items-center justify-center">
                <Image src={data.images[0]} alt={data.slug} width={100} height={80} objectFit="contain" objectPosition="center" />
              </div>
            </div>
        </Card>
    )
}

export default ProductCard