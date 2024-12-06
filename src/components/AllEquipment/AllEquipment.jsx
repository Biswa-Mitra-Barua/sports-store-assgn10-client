import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const loadedEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadedEquipments)

    return (
        <div className='my-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='font-bold text-cyan-300 text-sm'>
                        <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Full View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            equipments.map((equipment, index) =>
                                <tr key={equipment._id}>
                                    <th>{index + 1}</th>
                                    <td>{equipment.itemName}</td>
                                    <td>{equipment.categoryName}</td>
                                    <td>{equipment.price}</td>
                                    <td>
                                        <Link to={`/viewDetails/${equipment._id}`} className="btn btn-success">
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