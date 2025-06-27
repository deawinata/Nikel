export const BASE_URL_PRODUCTS = "https://dummyjson.com/products"
export const BASE_URL_CATEGORIES = "https://dummyjson.com/products/categories"

export const createURLParams = (params: {
  [key: string]: string | string[] | number | undefined | null
}) => {
  const {category, ...query} = params
  const keys = Object.keys(query)

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

  const categoryParam = category ? `/category/${category}` : ''

  return `${categoryParam}?${queryParams.toString()}`
}

export const capitalize = (str?: string) => {
  if (!str) return ''

  const arrStr = str.split(' ') as string[]

  const capitalizeArrWord = arrStr.map((e) => {
    const capWord = e[0]?.toUpperCase()

    if (e.length > 1) return capWord + e.slice(1).toLowerCase()

    return capWord
  })

  return capitalizeArrWord.join(' ')
}