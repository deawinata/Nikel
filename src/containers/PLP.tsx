'use client'

import {Category, TGetProductListResponse} from "@/api";
import {useEffect, useState} from "react";
import ProductCard from "@/composites/ProductCard/ProductCard";
import Chips from "@/components/elements/Chips";
import {Item} from "@/components/elements/Chips/Chips";
import Pagination from "@/components/elements/Pagination/Pagination";

type IPLPProps = {
  initialProducts: TGetProductListResponse
  initialSkip: number
  initialLimit: number
  categories: Category[] | null
}

const PLP = (props: IPLPProps) => {
  const {initialProducts, initialSkip, initialLimit, categories} = props;
  const [products, setProducts] = useState<TGetProductListResponse>(initialProducts)
  const [categoryOptions, setCategoryOptions] = useState<Item[]>([])
  const [skip, setSkip] = useState<number>(initialSkip)
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(initialLimit)
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const tmpCategory: Item[] = []
    categories && categories.map(item => (tmpCategory.push({label: item.name, value: item.slug})))
    setCategoryOptions(tmpCategory)
    setIsFetched(true)
  }, [])

  useEffect(() => {
    setSkip(page * limit - limit)
  }, [page]);

  if (!isFetched) {
    return null;
  }

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col gap-4">
        <div>Filters</div>
        <div className="flex gap-4 max-w-[200px] w-full md:w-[200px]">
          <select className="border-primary" onChange={(e) => setSelectedCategory(e.target.value)}>
            {categoryOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full grid xxxs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-4">
          {products && products.products.map(product => (
            <div key={product.id}>
              <ProductCard data={product}/>
            </div>
          ))}
        </div>
        {products && <Pagination page={page} limit={limit} total={products.total} onPageChanged={(p) => setPage(p)}/>}
      </div>
    </div>
  )
}

export default PLP