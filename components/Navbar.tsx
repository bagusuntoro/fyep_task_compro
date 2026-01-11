"use client";

import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import CartModal from "./CartModal";

export default function Navbar() {
    const { getCartItemsCount, toggleCart } = useCart();
    
    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white border-b z-40 text-black">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* LEFT - Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Sport On Logo"
                            width={100}
                            height={80}
                            className="object-contain"
                        />
                    </div>

                    {/* CENTER - Menu */}
                    <ul className="hidden md:flex gap-10 text-sm font-medium text-black">
                        <li>
                            <Link href="/" className="hover:text-gray-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories" className="hover:text-gray-600">
                                Category
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-gray-600">
                                Explore Products
                            </Link>
                        </li>
                    </ul>

                    {/* RIGHT - Icons */}
                    <div className="flex items-center gap-6 text-black">
                        <button className="text-xl hover:text-gray-600">
                            <FiSearch />
                        </button>

                        <button 
                            className="relative text-xl hover:text-gray-600"
                            onClick={toggleCart}
                        >
                            <FiShoppingBag />
                            <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-4 h-4 rounded-full flex items-center justify-center">
                                {getCartItemsCount()}
                            </span>
                        </button>
                    </div>
                </nav>
            </header>
            
            <CartModal />
        </>
    );
}