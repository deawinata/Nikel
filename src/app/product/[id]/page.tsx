import ProductDetail from "@/app/ProductDetail";

interface PageProps {
  params: { id: number };
}

const ProductDetailPage = async ({params}: PageProps) => {
  const {id} = await params;
  return (
    <ProductDetail id={id}/>
  );
}

export default ProductDetailPage;