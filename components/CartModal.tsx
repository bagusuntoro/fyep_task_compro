"use client";

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { FiX, FiMinus, FiPlus } from 'react-icons/fi';
import Link from 'next/link';

export default function CartModal() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    toggleCart,
    isCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* 
        Overlay transparan yang menutupi seluruh layar.
        Fungsinya untuk menutup modal jika pengguna mengklik di luar area keranjang.
        z-40 agar berada di bawah panel keranjang (z-50) tetapi di atas konten lainnya.
      */}
      <div 
        className="fixed inset-0 z-40 bg-transparent" 
        onClick={toggleCart} 
      />

      {/* 
        Panel Keranjang:
        - fixed: Posisi tetap relatif terhadap viewport.
        - top-20: Jarak 80px dari atas (sesuai dengan tinggi navbar + padding).
        - right-4: Jarak 16px dari kanan.
        - z-50: Pastikan panel berada di atas semua elemen lain, termasuk overlay.
        - w-96: Lebar tetap 384px.
        - max-h-[calc(100vh-5rem)]: Tinggi maksimal, disesuaikan dengan tinggi layar dikurangi ruang untuk navbar.
        - flex flex-col: Menggunakan flexbox untuk mengatur layout (header, konten, footer).
      */}
      <div className="fixed top-20 right-4 z-50 w-96 max-h-[calc(100vh-5rem)] bg-white shadow-2xl rounded-lg flex flex-col">
        
        {/* Header Keranjang */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-medium text-gray-900">Keranjang Belanja</h3>
          <button
            type="button"
            className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            onClick={toggleCart}
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* 
          Daftar Item Keranjang:
          - flex-1: Mengambil sisa ruang yang tersedia.
          - overflow-y-auto: Menambahkan scroll vertikal jika konten terlalu panjang.
        */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-gray-500">Keranjang belanja Anda kosong</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        type="button"
                        className="p-1 text-gray-500 hover:text-gray-700"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <FiMinus className="w-4 h-4" />
                      </button>
                      <span className="mx-3 text-sm font-medium w-5 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        className="p-1 text-gray-500 hover:text-gray-700"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <FiPlus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="p-1 text-gray-400 hover:text-red-500 flex-shrink-0"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 
          Footer Keranjang (Total & Tombol Checkout):
          - Hanya muncul jika ada item di keranjang.
          - mt-auto: Mendorong footer ini ke bagian bawah panel.
        */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 mt-auto">
            <div className="flex justify-between mb-4">
              <span className="text-base font-medium text-gray-900">Total</span>
              <span className="text-base font-bold text-orange-500">{getCartTotal()}</span>
            </div>
            <Link
              href="/checkout"
              className="block w-full py-3 text-center text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
              onClick={toggleCart}
            >
              Checkout Now
            </Link>
          </div>
        )}
      </div>
    </>
  );
}