import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById } from "@/app/products/data";
import ProductDetail from "@/components/ProductDetail";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = parseInt(id);
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export async function generateStaticParams() {
  const { products } = await import("@/app/products/data");
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}