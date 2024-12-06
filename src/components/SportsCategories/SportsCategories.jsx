import React from "react";
import Marquee from "react-fast-marquee";

const SportsCategories = () => {
  const sports = [
    { name: "Football", image: "https://i.ibb.co.com/QdcFhT5/football-png-ok.jpg" },
    { name: "Basketball", image: "https://i.ibb.co.com/wBy75mt/basketball-ok.png" },
    { name: "Tennis", image: "https://i.ibb.co.com/VpQYQcT/tennis.jpg" },
    { name: "Cricket", image: "https://i.ibb.co.com/y8qX5z5/criceket-ok.jpg" },
    { name: "Baseball", image: "https://i.ibb.co.com/yq5Jxwq/baseball.png" },
    { name: "Hockey", image: "https://i.ibb.co.com/zNSW8N5/hockey-ok.webp" },
    { name: "Swimming", image: "https://i.ibb.co.com/ZL1Fhnq/swimming.jpg" },
    { name: "Running", image: "https://i.ibb.co.com/xXYpcgh/running.png" },
  ];

  return (
    <div className="py-10 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <h2 className="text-5xl font-bold text-center text-purple-700 mb-10">
        Sports Categories
      </h2>
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex gap-6">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="card w-48 h-48 bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 border-2 border-orange-100"
            >
              <figure className="px-4 pt-5">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="rounded-xl w-32 h-32 object-cover py-2"
                />
              </figure>
              <div className="card-body items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {sport.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SportsCategories;
