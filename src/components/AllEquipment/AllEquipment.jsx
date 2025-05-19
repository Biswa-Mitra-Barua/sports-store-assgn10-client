import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const loadedEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadedEquipments);
    const [isAscending, setIsAscending] = useState(true);

    const handleSortByPrice = () => {
        const sortedEquipments = [...equipments].sort((a, b) => {
            return isAscending ? a.price - b.price : b.price - a.price;
        });

        setEquipments(sortedEquipments);
        setIsAscending(!isAscending);
    };

    return (
        <div className='my-10 px-4 md:px-8'>
            <div className="flex justify-end mb-6">
                <button
                    onClick={handleSortByPrice}
                    className="btn btn-outline text-sm md:text-base"
                >
                    Sort by Price ({isAscending ? 'Ascending' : 'Descending'})
                </button>
            </div>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="table w-full text-sm md:text-base">
                    <thead className='bg-gray-300 text-gray-700'>
                        <tr>
                            <th className="whitespace-nowrap px-3 py-2">Sl No.</th>
                            <th className="whitespace-nowrap px-3 py-2">Name</th>
                            <th className="whitespace-nowrap px-3 py-2">Category</th>
                            <th className="whitespace-nowrap px-3 py-2">Price</th>
                            <th className="whitespace-nowrap px-3 py-2">View Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {equipments.map((equipment, index) => (
                            <tr key={equipment._id} className="hover:bg-gray-600">
                                <td className="px-3 py-2">{index + 1}</td>
                                <td className="px-3 py-2">{equipment.itemName}</td>
                                <td className="px-3 py-2">{equipment.categoryName}</td>
                                <td className="px-3 py-2">${equipment.price}</td>
                                <td className="px-3 py-2">
                                    <Link
                                        to={`/viewDetails/${equipment._id}`}
                                        className="btn btn-outline btn-sm md:btn-md"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;
