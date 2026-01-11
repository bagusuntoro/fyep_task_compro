import Image from "next/image";
import Link from "next/link";
import { products, Product } from "@/app/products/data";
export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500 italic">OUR </span>
          <span className="font-extrabold">PRODUCTS</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-[#FAF5F5] rounded-lg shadow-sm relative cursor-pointer hover:shadow-md transition">
                
                {/* Image */}
                <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />

                  {/* Plus Button */}
                  <div className="absolute top-3 right-3 bg-orange-500 text-white w-7 h-7 rounded flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition">
                    +
                  </div>
                </div>

                {/* Text */}
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-sm md:text-base">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {product.category}
                  </p>
                  <p className="text-orange-500 font-semibold mt-1">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}