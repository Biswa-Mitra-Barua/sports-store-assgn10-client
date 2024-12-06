import React from 'react';

const EquipmentCard = ({equipment}) => {
    const {itemName, image, description, price} = equipment;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Product"
                    className=" w-full h-[300px] rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{itemName}</h2>
                <p className='my-1'>{description}</p>
                <p>Price: ${price}</p>
                <div className="card-actions mt-3">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;