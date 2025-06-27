'use client'

import {useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import {useIsMobile} from "@/hooks/useIsMobile";
import useDisclosure from "@/hooks/useDisclosure";
import {Category, IProductFilters, TGetProductListResponse, useGetProductFilters} from "@/api";
import {Dropdown, Pagination} from "@/components/elements";
import ProductCard from "@/composites/ProductCard/ProductCard";
import {Item} from "@/types/commonTypes";
import {capitalize} from "@/utils/string";

type IPLPProps = {
  initialProducts: TGetProductListResponse
  initialSkip: number
  initialLimit: number
  categories: Category[] | null
}

const DEFAULT_FILTER = {
  label: "All",
  value: "",
}

const PLP = (
  {
    initialProducts,
    initialSkip,
    initialLimit,
    categories,
  }: IPLPProps) => {
  const [products, setProducts] = useState<TGetProductListResponse>(initialProducts)
  const [categoryOptions, setCategoryOptions] = useState<Item[]>([DEFAULT_FILTER])
  const [skip, setSkip] = useState<number>(initialSkip)
  const [page, setPage] = useState<number>(1)
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sort, setSort] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string | null>(null)
  const [shouldFetch, setShouldFetch] = useState(false);

  const isMobile = useIsMobile()

  const filterPopup = useDisclosure()
  const sortPopup = useDisclosure()

  const filters: IProductFilters = {
    limit: initialLimit,
    category: selectedCategory || undefined,
    skip: skip,
    sortBy: sortBy || undefined,
    order: sort || undefined
  }

  const {data, isLoading} = useGetProductFilters(filters, shouldFetch)

  useEffect(() => {
    setIsFetched(true)
  }, []);

  useEffect(() => {
    if (data) setProducts(data)
  }, [data]);

  useEffect(() => {
    const tmpCategory: Item[] = [DEFAULT_FILTER]
    categories?.map(item => (tmpCategory.push({label: item.name, value: item.slug})))
    setCategoryOptions(tmpCategory)
  }, [categories])

  useEffect(() => {
    setSkip(page * initialLimit - initialLimit)
  }, [initialLimit, page]);

  useEffect(() => {
    if (selectedCategory !== null || sort !== null || page !== 1) {
      setShouldFetch(true);
    }
  }, [selectedCategory, sort, page]);

  if (!isFetched) {
    return null;
  }

  const sortOptions: Item[] = [
    DEFAULT_FILTER,
    {
      label: "Price low to high",
      value: "asc"
    },
    {
      label: "Price high to low",
      value: "desc"
    },
  ]

  const onClickFilter = () => {
    if (filterPopup.isOpen) {
      filterPopup.onClose()
      return
    }
    sortPopup.onClose()
    filterPopup.onOpen()
  }

  const onClickSort = () => {
    if (sortPopup.isOpen) {
      sortPopup.onClose()
      return
    }
    filterPopup.onClose()
    sortPopup.onOpen()
  }

  const filterRenderer = () => {
    if (isMobile) {
      return (
        <div className="flex w-full justify-between items-center">
          <div className="font-bold">
            {selectedCategory ? capitalize(selectedCategory) : "Product List"}
          </div>
          <div className="flex gap-2">
            <Dropdown
              isOpen={filterPopup.isOpen}
              iconName="filter"
              iconClass="w-4 h-4 text-primary"
              onClickAction={() => onClickFilter()}
              items={categoryOptions}
              onClickItemAction={(item: Item) => {
                setSelectedCategory(item.value)
                filterPopup.onClose()
              }}
            />
            <Dropdown
              isOpen={sortPopup.isOpen}
              iconName="sort"
              iconClass="w-4 h-4 text-primary"
              onClickAction={() => onClickSort()}
              items={sortOptions}
              onClickItemAction={(item: Item) => {
                setSort(item.value)
                setSortBy("price")
                sortPopup.onClose()
              }}
            />
          </div>
        </div>
      )
    }
    return (
      <div className="flex flex-col gap-2">
        <div className="font-bold text-base">Filters</div>
        <div className="flex gap-4 max-w-[200px] w-full md:w-[200px]">
          <select className="border-primary border-[1px] w-[150px] rounded-lg p-1"
                  onChange={(e) => setSelectedCategory(e.target.value)}>
            {categoryOptions.map((option, index) => (
              <option
                key={option.value + index}
                value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="font-bold text-base">Sort</div>
        <div className="flex gap-4 max-w-[200px] w-full md:w-[200px]">
          <select
            className="border-primary border-[1px] w-[150px] rounded-lg p-1"
            onChange={(e) => {
              setSort(e.target.value)
              setSortBy("price")
            }}>
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }

  return (
    <div className={twMerge("flex h-full w-full", isMobile ? "flex-col gap-4 items-end" : "flex-row")}>
      {filterRenderer()}
      <div className="flex flex-col gap-4">
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-4">
          {products && products.products.map(product => (
            <div key={product.id}>
              <ProductCard data={product} isLoading={isLoading}/>
            </div>
          ))}
        </div>
        {products &&
          <Pagination page={page} limit={initialLimit} total={products.total} onPageChanged={(p) => setPage(p)}/>}
      </div>
    </div>
  )
}

export default PLP