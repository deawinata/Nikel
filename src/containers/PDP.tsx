'use client'

import ProductDescription from "@/composites/ProductDetails/ProductDescription";
import {IProduct} from "@/api";

type TPDProps = {
  data: IProduct;
}

const PDP = ({data}: TPDProps) => {
  return (
    <div className="flex gap-4">
      <ProductDescription data={data}/>
    </div>
  )
}

export default PDP