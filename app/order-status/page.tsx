"use client";

import { FiCheckCircle, FiRefreshCw } from "react-icons/fi";
import { useState } from "react";

type OrderStatus = "submitted" | "confirmed";

export default function OrderStatusPage() {
  const [status, setStatus] = useState<OrderStatus>("submitted");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshStatus = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      // Setelah refresh → status dikonfirmasi
      setStatus("confirmed");
      setIsRefreshing(false);
    }, 1500);
  };

  const getStatusMessage = () => {
    if (status === "confirmed") {
      return {
        title: "Order Confirmed !!",
        description:
          "We have received your payment, and your order is currently processed by our staff, just wait until your favorite sportswear arrive in your home. We will contact you in Whatsapp for further shipping updates.",
      };
    }

    return {
      title: "Order Submitted !!",
      description:
        "Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.",
    };
  };

  const { title, description } = getStatusMessage();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg text-center">
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center ${
              status === "confirmed" ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            <FiCheckCircle className="text-white text-5xl" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>

        {/* BUTTON */}
        {status !== "confirmed" && (
          <button
            onClick={handleRefreshStatus}
            disabled={isRefreshing}
            className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400
            text-white font-semibold py-3 px-6 rounded-lg transition
            flex items-center justify-center gap-2"
          >
            <FiRefreshCw
              className={`w-5 h-5 ${isRefreshing ? "animate-spin" : ""}`}
            />
            {isRefreshing ? "Checking..." : "Refresh Order Status"}
          </button>
        )}
      </div>
    </div>
  );
}
