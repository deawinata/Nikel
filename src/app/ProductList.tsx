import {IProductListParams} from "@/api";
import PLP from "@/containers/PLP";
import {BASE_URL_CATEGORIES, BASE_URL_PRODUCTS} from "@/utils/string";

async function getProductList(params: IProductListParams) {
  let result = null
  const url = `${BASE_URL_PRODUCTS}?limit=${params.limit}&skip=${params.skip}`
  try {
    result = await fetch(url).then(res => res.json())
  } catch (e) {
    console.error(e)
  }
  return result
}

async function getCategories() {
  let result = null
  try {
    result = await fetch(BASE_URL_CATEGORIES).then(res => res.json())
  } catch (e) {
    console.error(e)
  }
  return result
}

const ProductList = async () => {
  const params = {
    limit: 10,
    skip: 0,
  }
  const data = await getProductList(params)
  const categories = await getCategories()

  return (
    <PLP initialProducts={data} initialSkip={params.skip} initialLimit={params.limit} categories={categories} />
  )
}

export default ProductList