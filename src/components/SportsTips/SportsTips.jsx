import React from "react";

const SportsTips = () => {
  const tips = [
    {
      title: "Mastering Football Skills",
      description:
        "Learn the essential football techniques to improve your dribbling, passing, and shooting.",
      image: "https://i.ibb.co.com/yVLZ1xH/football-betting-tips.webp",
      link: "/articles/master-football-skills",
    },
    {
      title: "Cricket Batting Techniques",
      description:
        "Discover tips to enhance your batting performance and dominate the game.",
      image: "https://i.ibb.co.com/syCVQ8C/batting-tips.jpg",
      link: "/articles/cricket-batting-tips",
    },
    {
      title: "Tennis Training Guide",
      description:
        "A complete guide to improving your serves, volleys, and court movements.",
      image: "https://i.ibb.co.com/yy4cTD2/tennis-tips.jpg",
      link: "/articles/tennis-training-guide",
    },
  ];

  return (
    <div className="py-10 bg-gradient-to-br from-gray-800 to-gray-200 my-20 px-6 rounded-md">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Sports Tips & Training Guides
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="card bg-white shadow-xl border hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{tip.description}</p>
              <a
                href={tip.link}
                className="text-blue-500 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsTips;
