export const BASE_URL_PRODUCTS = "https://api.escuelajs.co/api/v1/products"
export const BASE_URL_CATEGORIES = "https://api.escuelajs.co/api/v1/categories"

export const createURLParams = (params: {
  [key: string]: string | string[] | number | undefined | null
}) => {
  const keys = Object.keys(params)

  if (!keys.length) return ''

  const queryParams = new URLSearchParams()
  keys
    .filter((key) => Boolean(`${params[key]}`))
    .forEach((key) => {
      const param = params[key]
      if (typeof param !== 'undefined' && param !== null) {
        queryParams.set(key, param.toString())
      }
    })

  return `?${queryParams.toString()}`
}