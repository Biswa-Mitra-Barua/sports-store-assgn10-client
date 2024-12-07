import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { authContext } from '../../AuthProvider/AuthProvider';

const MyEquipment = () => {
    const loadedEquipments = useLoaderData();
    const { user } = useContext(authContext);
    const [equipments, setEquipments] = useState(loadedEquipments)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userSpecificEquipments = async () => {
            if (!user?.email) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:5000/myEquipment?email=${encodeURIComponent(user.email)}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch equipment');
                }

                const data = await response.json();
                setEquipments(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        userSpecificEquipments();
    }, [user]);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error.message}</div>;
    }


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