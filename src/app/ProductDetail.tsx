import PDP from "@/containers/PDP";
import {BASE_URL_PRODUCTS} from "@/utils/string";

async function getProductById(id: number) {
  let result = null
  const url = `${BASE_URL_PRODUCTS}/${id}`;
  try {
    result = await fetch(url).then(res => res.json())
  } catch (e) {
    console.error(e)
  }
  return result
}

type TProductDetailProps = {
  id: number;
}

const ProductDetail = async (props: TProductDetailProps) => {
  const {id} = props;
  const data = await getProductById(id)
  return (
    <PDP data={data}/>
  )
}

export default ProductDetail