import React from "react";

const TopDeals = () => {
  const deals = [
    {
      name: "Adidas Running Shoes",
      image: "https://i.ibb.co.com/1MGVwSp/addidas.jpg",
      discount: "20% OFF",
      price: "$80",
      originalPrice: "$100",
    },
    {
      name: "Nike Basketball",
      image: "https://i.ibb.co.com/6XgnTPP/nikes.jpg",
      discount: "15% OFF",
      price: "$42.50",
      originalPrice: "$50",
    },
    {
      name: "Puma Cricket Bat",
      image: "https://i.ibb.co.com/zfpv11j/puma.webp",
      discount: "25% OFF",
      price: "$75",
      originalPrice: "$100",
    },
    {
      name: "Wilson Tennis Racket Pro-Staff",
      image: "https://i.ibb.co.com/wCj50g2/wilson.webp",
      discount: "30% OFF",
      price: "$140",
      originalPrice: "$200",
    },
  ];

  return (
    <div className="py-10 bg-gradient-to-br from-gray-800 to-gray-200 rounded-lg">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Top Deals & Discounts
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="card w-60 bg-white shadow-xl border border-gray-200 hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          >
            <figure className="relative">
              <img
                src={deal.image}
                alt={deal.name}
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                {deal.discount}
              </div>
            </figure>
            <div className="card-body text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {deal.name}
              </h3>
              <div className="text-orange-600 font-bold text-lg">
                {deal.price}
                <span className="line-through text-gray-500 text-sm ml-2">
                  {deal.originalPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
