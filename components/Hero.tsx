import { FiChevronsRight } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text */}
                <div className="relative">

                    {/* Badge */}
                    <div className="absolute -top-10 left-0 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Friday Sale, 50%
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                        WEAR YOUR <br />
                        TOP-QUALITY <br />
                        SPORTS WEAR
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg">
                        Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg flex items-center gap-2">
                            Explore More
                            <FiChevronsRight className="text-lg" />
                        </button>

                        <button className="px-6 py-3 border rounded-lg text-black flex items-center gap-2">
                            Watch Video
                            <FiPlay className="text-lg" />
                        </button>
                    </div>
                </div>



                <div className="hidden md:block">
                    <div className="relative w-full h-80">
                        <Image
                            src="/hero/1.png"
                            alt="Sport On Hero Product"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}
