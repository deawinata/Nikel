'use client'

import {TGetProductListResponse} from "@/api";
import {useState} from "react";
import ProductCard from "@/composites/ProductCard/ProductCard";

type IPLPProps = {
  initialProducts: TGetProductListResponse
  initialOffset: number
  initialLimit: number
}

const PLP = (props: IPLPProps) => {
  const {initialProducts} = props;
  const [products, setProducts] = useState<TGetProductListResponse>(initialProducts)
  const [offset, setOffset] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)

  return (
    <div>
      <h1 className="text-black">Product List</h1>
      <div className="flex gap-2">
        {products && products.map(product => (
          <div key={product.id}>
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PLP