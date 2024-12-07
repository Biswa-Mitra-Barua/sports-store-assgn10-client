import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authContext } from '../../AuthProvider/AuthProvider';

const UpdateEquipment = () => {

    const equipment = useLoaderData();
    const { _id, itemName, price, rating, stockStatus, image, categoryName, description, customization, processingTime } = equipment;

    const {user} = useContext(authContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const stockStatus = form.stockStatus.value;
        const processingTime = form.processingTime.value;
        const image = form.image.value;
        const description = form.description.value;
        const customization = form.customization.value;
        const categoryName = form.categoryName.value;

        const updatedEquipment = {itemName, price, rating, stockStatus, processingTime, image, description, customization, categoryName};


        fetch(`http://localhost:5000/equipment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Nice...",
                        text: "Equipment Updated Successfully!",
                    })
                }
            })
    };

    return (
        <div className='my-20'>
            <form onSubmit={handleUpdate}
                className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-center">Update Equipment</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        defaultValue={image}
                        placeholder="Enter image URL"
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Item Name</span>
                    </label>
                    <input
                        type="text"
                        name="itemName"
                        defaultValue={itemName}
                        placeholder="Enter item name"
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category Name</span>
                    </label>
                    <input
                        type="text"
                        name="categoryName"
                        defaultValue={categoryName}
                        placeholder="Enter category name"
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="Enter description"
                        defaultValue={description}
                        onChange={handleInputChange}
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={price}
                        placeholder="Enter product price"
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input
                        type="number"
                        name="rating"
                        defaultValue={rating}
                        placeholder="Enter rating from 1-5"
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        min="1"
                        max="5"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Customization</span>
                    </label>
                    <input
                        type="text"
                        name="customization"
                        defaultValue={customization}
                        placeholder="E.g., bat with extra grip"
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Processing Time</span>
                    </label>
                    <input
                        type="text"
                        name="processingTime"
                        defaultValue={processingTime}
                        placeholder="Enter delivery time"
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock Status</span>
                    </label>
                    <input
                        type="number"
                        name="stockStatus"
                        defaultValue={stockStatus}
                        placeholder="Enter available product quantity"
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input
                        type="email"
                        name="userEmail"
                        value={user?.email || 'No email available'}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input
                        type="text"
                        name="userName"
                        value={user?.name || 'No user available'}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                <div className="form-control mt-4">
                    <button type="submit" className="btn btn-block">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEquipment;