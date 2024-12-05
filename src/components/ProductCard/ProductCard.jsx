import React from 'react';

const ProductCard = ({ equipment }) => {
    const { itemName, image, description, price } = equipment;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Product"
                    className=" w-full h-full rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{itemName}</h2>
                <p className='my-1'>{description}</p>
                <p>Price: ${price}</p>
                <div className="card-actions mt-3 space-x-3">
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;