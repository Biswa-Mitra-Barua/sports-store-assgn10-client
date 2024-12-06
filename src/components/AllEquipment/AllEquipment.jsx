import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import EquipmentCard from '../EquipmentCard/EquipmentCard';

const AllEquipment = () => {
    const loadedEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadedEquipments)
    // const { _id, itemName, price, categoryName } = equipments;

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
                            equipments.map(equipment => <tr>
                                <th>1</th>
                                <td>{equipment.itemName}</td>
                                <td>{equipment.categoryName}</td>
                                <td>{equipment.price}</td>
                                <td><button className='btn btn-success'>View Details</button></td>
                            </tr>)
                        }
                          
                    </tbody>
                </table>
            </div>
            {/* <section className="mt-20">
                <h1 className="text-4xl font-semibold text-center mb-5">Product Section : {equipments.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                    {
                        equipments.map(equipment =>
                            <EquipmentCard
                                key={equipment._id}
                                equipment={equipment}
                            ></EquipmentCard>)
                    }
                </div>
            </section> */}
        </div>
    );
};

export default AllEquipment;