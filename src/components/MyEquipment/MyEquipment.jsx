import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const MyEquipment = () => {
    const loadedEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadedEquipments)

    return (
        <div className='my-10'>
            <h1 className="text-4xl font-semibold text-center mb-5">My Equipment List</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                {
                    equipments.map(equipment => <ProductCard
                        key={equipment._id}
                        equipment={equipment}
                        equipments={equipments}
                        setEquipments={setEquipments}
                    >    
                    </ProductCard>
                )}
            </div>
        </div>
    );
};

export default MyEquipment;