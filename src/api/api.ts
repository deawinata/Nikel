import {IProductFilters} from "@/api/types";
import {BASE_URL_CATEGORIES, BASE_URL_PRODUCTS, createURLParams} from "@/utils/string";

export function getProductById(id: number) {
  let result = null
  const url = `${BASE_URL_PRODUCTS}/${id}`
  try {
    result = fetch(url).then(res => res.json())
  } catch (e) {
    console.error(e)
  }
  return result
}

export function getProductsByFilters(params: IProductFilters) {
  let result = null
  const urlParams = createURLParams({...params})
  const url = `${BASE_URL_PRODUCTS}${urlParams}`
  try {
    result = fetch(url).then(res => res.json())
  } catch (e) {
    console.error(e)
  }
  return result
}

export function getCategories() {
  let result = null
  try {
    result = fetch(BASE_URL_CATEGORIES).then(res => res.json())
  } catch (e) {
    console.error(e)
  }
  return result
}