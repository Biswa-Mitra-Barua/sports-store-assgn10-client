import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const equipment = useLoaderData();

    return (
        <div className='my-10'>
            <div className="py-12 bg-blue-700 bg-opacity-5">
                <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
                    Explore the Details of {equipment.itemName}
                </h1>
                <p className="text-center text-lg text-gray-100 mt-3">
                    Dive deep into the specifics and features of this equipment.
                </p>
            </div>

            <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8">

                <div className="relative group flex flex-col md:flex-row max-w-4xl items-center gap-6 p-6 bg-white rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105">

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-70 animate-glaze"></div>

                    <div className="relative w-full md:w-1/2">
                        <img
                            src={equipment.image}
                            alt="Equipment"
                            className="rounded-xl shadow-lg object-cover w-full h-52 sm:h-64 md:h-full transition-transform duration-700 hover:scale-110"
                        />
                    </div>

                    <div className="relative w-full md:w-1/2 text-left">
                        <h2 className="text-3xl font-extrabold text-purple-700 mb-4">
                            {equipment.itemName}
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Category: {equipment.categoryName}
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            {equipment.description}
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Price: ${equipment.price}
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            *{equipment.customization}
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Processing Time: {equipment.processingTime}
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Stock-in-hand: {equipment.stockStatus}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
