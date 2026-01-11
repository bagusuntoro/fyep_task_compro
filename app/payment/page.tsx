"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function PaymentPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [receipt, setReceipt] = useState<File | null>(null);

    const totalAmount = "Rp. 1.035.000";

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setReceipt(e.target.files[0]);
        }
    };

    const handleConfirmPayment = () => {
        if (!receipt) {
            alert("Silakan upload bukti pembayaran terlebih dahulu.");
            return;
        }

        console.log("Bukti pembayaran:", receipt);
        alert("Pembayaran berhasil dikonfirmasi!");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <h1 className="text-3xl font-bold text-center mb-12 text-black">
                Payment
            </h1>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                {/* LEFT - PAYMENT OPTIONS */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-lg font-semibold mb-6 text-black">
                        Payment Options
                    </h2>

                    <div className="space-y-5">
                        {/* BCA */}
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                                <p className="font-medium text-black">BCA</p>
                                <p className="text-sm text-gray-500">012382312</p>
                            </div>
                            <span className="text-xs bg-gray-100 px-3 py-1 rounded-md text-black">
                                Bank Transfer
                            </span>
                        </div>

                        {/* Mandiri */}
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                                <p className="font-medium text-black">Mandiri</p>
                                <p className="text-sm text-gray-500">83923910230123</p>
                            </div>
                            <span className="text-xs bg-gray-100 px-3 py-1 rounded-md text-black">
                                Bank Transfer
                            </span>
                        </div>

                        {/* BTPN */}
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                                <p className="font-medium text-black">BTPN</p>
                                <p className="text-sm text-gray-500">5238218923</p>
                            </div>
                            <span className="text-xs bg-gray-100 px-3 py-1 rounded-md text-black">
                                Bank Transfer
                            </span>
                        </div>
                    </div>
                </div>

                {/* RIGHT - PAYMENT STEPS */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-lg font-semibold mb-6 text-black">
                        Payment Steps
                    </h2>

                    <ol className="text-sm text-gray-600 space-y-3 mb-6 list-decimal list-inside">
                        <li>
                            Transfer the total amount of <strong>{totalAmount}</strong> to your
                            preferred bank account listed under Payment Options.
                        </li>
                        <li>
                            After completing the transfer, keep the payment receipt or
                            screenshot of the transfer confirmation.
                        </li>
                        <li>
                            Upload the payment receipt using the section below to confirm
                            your transaction.
                        </li>
                    </ol>

                    {/* UPLOAD RECEIPT */}
                    <div
                        onClick={handleUploadClick}
                        className="border-2 border-dashed border-red-300 rounded-lg
            p-6 text-center cursor-pointer hover:bg-red-50 transition"
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/*"
                        />

                        <p className="text-sm text-red-500 font-medium">
                            {receipt ? receipt.name : "Upload Your Payment Receipt here"}
                        </p>
                    </div>

                    {/* TOTAL & BUTTON */}
                    <div className="border-t mt-6 pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-medium">Total</span>
                            <span className="font-bold text-red-500">
                                {totalAmount}
                            </span>
                        </div>
                        <Link
                            href="/order-status"
                            className="w-full block text-center bg-black text-white py-3 rounded-md
  hover:bg-gray-800 transition"
                        >
                            Upload Receipt & Confirm
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
