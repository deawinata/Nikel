import PDP from "@/containers/PDP";
import {BASE_URL_PRODUCTS} from "@/utils/string";

async function getProductById(id: string) {
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
  id: string;
}

const ProductDetail = async (props: TProductDetailProps) => {
  const {id} = props;
  const data = await getProductById(id)
  return (
    <PDP data={data}/>
  )
}

export default ProductDetail