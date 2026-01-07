import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left - Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/logo-footer.svg" alt="Sport On Logo" width={32} height={32} />
            <span className="font-bold text-white text-xl">
              <span>SPORT</span><span className="text-orange-500">ON</span>
            </span>
          </div>
          <p className="text-sm max-w-xs">
            Engineered for endurance and designed for speed.<br />
            Experience gear that moves as fast as you do.
          </p>
        </div>

        {/* Middle - Navigation Links */}
        <nav className="md:col-span-2 flex justify-between flex-wrap text-sm">
          <div className="space-y-2">
            <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            <Link href="/categories" className="hover:text-orange-500 transition">Categories</Link>
            <Link href="/products" className="hover:text-orange-500 transition">Explore Products</Link>
            <Link href="/about" className="hover:text-orange-500 transition">About Us</Link>
          </div>

          <div className="space-y-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">Facebook</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">TikTok</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">YouTube</a>
          </div>
        </nav>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-800 mt-10 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-500 max-w-7xl mx-auto px-6">
        <span>SportsOn © 2025 All Rights Reserved.</span>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-orange-500 transition">Privacy Policy</Link>
          <Link href="/terms-conditions" className="hover:text-orange-500 transition">Terms Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
