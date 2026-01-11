"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ShippingInfo {
  name: string;
  whatsapp: string;
  address: string;
}

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: "",
    whatsapp: "",
    address: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceedToPayment = () => {
    if (!shippingInfo.name || !shippingInfo.whatsapp || !shippingInfo.address) {
      alert("Mohon lengkapi semua informasi pengiriman.");
      return;
    }

    const orderData = {
      customer: shippingInfo,
      items: cartItems,
      total: getCartTotal(),
    };

    console.log("Order:", orderData);
    alert("Pesanan berhasil dibuat!");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Keranjang Kosong</h1>
        <Link
          href="/products"
          className="px-6 py-3 bg-black text-white rounded-md"
        >
          Belanja Sekarang
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-12 text-black">
        Checkout Now
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT - ORDER INFO */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-semibold mb-6 text-black">
            Order Information
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm mb-2 text-black">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Type your full name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md
                focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-black">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsapp"
                placeholder="+62xxxx"
                value={shippingInfo.whatsapp}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md
                focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-black">Shipping Address</label>
              <textarea
                name="address"
                rows={4}
                placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
                value={shippingInfo.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md
                focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
        </div>

        {/* RIGHT - CART ITEMS */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-semibold mb-6 text-black">
            Cart Items
          </h2>

          <div className="space-y-6">
            {cartItems.map((item) => {
              const priceNumber = parseInt(
                item.price.replace(/[^\d]/g, "")
              );

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-black">
                        {item.name}
                      </p>
                      <p className="text-xs text-black">
                        {item.quantity}x
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-red-500">
                    Rp. {(priceNumber * item.quantity).toLocaleString("id-ID")}
                  </p>
                </div>
              );
            })}
          </div>

          {/* TOTAL */}
          <div className="border-t mt-8 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-black">Total</span>
              <span className="font-bold text-red-500">
                {getCartTotal()}
              </span>
            </div>

            <Link
              href="/payment"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2"
            >
              Proceed to Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
