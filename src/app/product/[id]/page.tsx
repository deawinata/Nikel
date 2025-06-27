import ProductDetail from "@/app/ProductDetail";

export default async function ProductDetailPage({params}: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  return <ProductDetail id={id}/>;
}
