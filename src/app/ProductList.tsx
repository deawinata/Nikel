import {IProductListParams, useGetProductListQuery} from "@/api";
import PLP from "@/containers/PLP";
import {BASE_URL_PRODUCTS} from "@/utils/string";

async function getProductList(params: IProductListParams) {
  let result = null
  const url = `${BASE_URL_PRODUCTS}?limit=${params.limit}&offset=${params.offset}`
  try {
    result = await fetch(url).then(res => res.json())
  } catch (e) {
    console.error(e)
  }
  return result
}

const ProductList = async () => {
  const params = {
    limit: 10,
    offset: 0,
  }
  const data = await getProductList(params)

  return (
    <PLP initialProducts={data} initialOffset={params.offset} initialLimit={params.limit} />
  )
}

export default ProductList