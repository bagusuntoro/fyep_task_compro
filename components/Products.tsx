import Image from "next/image";

const products = [
  {
    id: 1,
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: "Rp. 329.000",
    image: "/products/1.png",
  },
  {
    id: 2,
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: "Rp. 999.000",
    image: "/products/2.png",
  },
  {
    id: 3,
    name: "SportsOn Slowlivin",
    category: "Running",
    price: "Rp. 119.000",
    image: "/products/3.png",
  },
  {
    id: 4,
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: "Rp. 458.000",
    image: "/products/4.png",
  },
  {
    id: 5,
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: "Rp. 458.000",
    image: "/products/5.png",
  },
  {
    id: 6,
    name: "SportsOn Slowlivin",
    category: "Running",
    price: "Rp. 119.000",
    image: "/products/6.png",
  },
  {
    id: 7,
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: "Rp. 329.000",
    image: "/products/7.png",
  },
  {
    id: 8,
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: "Rp. 999.000",
    image: "/products/8.png",
  },
];

export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500 italic">OUR </span>
          <span className="font-extrabold">PRODUCTS</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {products.map(({ id, name, category, price, image }) => (
            <div key={id} className="bg-[#FAF5F5] rounded-lg shadow-sm relative group cursor-pointer">
              {/* Image */}
              <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain"
                  priority
                />
                {/* Plus Button */}
                <button className="absolute top-3 right-3 bg-orange-500 text-white w-7 h-7 rounded flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition">
                  +
                </button>
              </div>

              {/* Text */}
              <div className="p-4 text-left">
                <h3 className="font-semibold text-sm md:text-base">{name}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{category}</p>
                <p className="text-orange-500 font-semibold mt-1">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
