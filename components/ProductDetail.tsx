"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/products/data";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const { addToCart } = useCart();
  const { name, category, price, image, description } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Link 
          href="/products" 
          className="inline-flex items-center mb-6 text-orange-500 hover:text-orange-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Kembali ke Produk
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#FAF5F5] p-10 rounded-lg">
            <div className="relative w-full h-[400px]">
              <Image src={image} alt={name} fill className="object-contain" />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-3">{name}</h1>
            <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600">
              {category}
            </span>
            <p className="text-gray-500 mb-6">{description}</p>
            <p className="text-2xl font-bold text-orange-500 mb-6">{price}</p>
            
            <button 
              onClick={handleAddToCart}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}