import { GiRunningShoe, GiBasketballBasket, GiSoccerBall, GiTennisRacket } from "react-icons/gi";
import { MdSportsTennis, MdPool } from "react-icons/md";

export default function Categories() {
  const categories = [
    { name: "Running", icon: <GiRunningShoe className="text-4xl text-orange-500" /> },
    { name: "Tennis", icon: <GiTennisRacket className="text-4xl text-orange-500" /> },
    { name: "Basketball", icon: <GiBasketballBasket className="text-4xl text-orange-500" /> },
    { name: "Football", icon: <GiSoccerBall className="text-4xl text-orange-500" /> },
    { name: "Badminton", icon: <MdSportsTennis className="text-4xl text-orange-500" /> },
    { name: "Swimming", icon: <MdPool className="text-4xl text-orange-500" /> },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h6 className="font-bold mb-5 text-left text-black">Browse By Categories</h6>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center justify-center gap-3 p-4 border rounded-lg hover:shadow-lg transition transform hover:-translate-y-1 duration-300 cursor-pointer"
            >
              {/* Icon */}
              {cat.icon}

              {/* Category Name */}
              <span className="text-orange-500 font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
