export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: "Rp. 329.000",
    image: "/products/1.png",
    description: "Lightweight running shoes designed for speed and comfort.",
  },
  {
    id: 2,
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: "Rp. 999.000",
    image: "/products/2.png",
    description: "High-performance tennis shoes built for agility and grip.",
  },
  {
    id: 3,
    name: "SportsOn Slowlivin",
    category: "Running",
    price: "Rp. 119.000",
    image: "/products/3.png",
    description: "Casual running shoes for everyday comfort.",
  },
  {
    id: 4,
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: "Rp. 458.000",
    image: "/products/4.png",
    description:
      "Engineered for players who demand precision, power, and speed on the pitch.",
  },
  {
    id: 5,
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: "Rp. 458.000",
    image: "/products/5.png",
    description:
      "Professional football boots with enhanced traction and control.",
  },
  {
    id: 6,
    name: "SportsOn Slowlivin",
    category: "Running",
    price: "Rp. 119.000",
    image: "/products/6.png",
    description: "Breathable running shoes for daily activities.",
  },
  {
    id: 7,
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: "Rp. 329.000",
    image: "/products/7.png",
    description: "Responsive cushioning for high-speed performance.",
  },
  {
    id: 8,
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: "Rp. 999.000",
    image: "/products/8.png",
    description: "Premium tennis shoes with superior court grip.",
  },
];

// Fungsi untuk mendapatkan produk berdasarkan ID
export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}