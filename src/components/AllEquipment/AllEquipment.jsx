import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const loadedEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadedEquipments);
    const [isAscending, setIsAscending] = useState(true);

    const handleSortByPrice = () => {
        const sortedEquipments = [...equipments].sort((a, b) => {
            if (isAscending) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        setEquipments(sortedEquipments);
        setIsAscending(!isAscending);
    };

    return (
        <div className='my-16'>
            <div className="flex justify-end mb-10 mx-28">
                <button onClick={handleSortByPrice} className="btn btn-outline">
                    Sort by Price ({isAscending ? 'Ascending' : 'Descending'})
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead className='font-bold text-gray-700 text-base'>
                        <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>View Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            equipments.map((equipment, index) =>
                                <tr key={equipment._id}>
                                    <th>{index + 1}</th>
                                    <td>{equipment.itemName}</td>
                                    <td>{equipment.categoryName}</td>
                                    <td>{equipment.price}</td>
                                    <td>
                                        <Link to={`/viewDetails/${equipment._id}`} className="btn btn-outline">
                                            View Details
                                        </Link>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;