import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { authContext } from '../../AuthProvider/AuthProvider';

const AddEquipment = () => {
    const {user} = useContext(authContext);
    const [formData, setFormData] = useState({
        image: '',
        itemName: '',
        categoryName: '',
        description: '',
        price: '',
        rating: '',
        customization: '',
        processingTime: '',
        stockStatus: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData({
            image: '',
            itemName: '',
            categoryName: '',
            description: '',
            price: '',
            rating: '',
            customization: '',
            processingTime: '',
            stockStatus: '',
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { itemName, price, rating, stockStatus, image, categoryName, description, customization, processingTime } = formData;

        if (!itemName || !price || !rating || !stockStatus || !processingTime || !image || !categoryName || !description || !customization) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please fill in all the required fields!",
            });
            return;
        }

        fetch('https://sports-store-server-ruddy.vercel.app/equipment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                ...formData,
                userId: user?.UID,
                Identifier: user?.email,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "Great...",
                        text: "Equipment Added Successfully!",
                    }).then(() => {
                        resetForm();
                    })
                }
            })
    };

    return (
        <div className='my-20'>
            <form onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-center">Add Equipment</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Enter image URL"
                        value={formData.image}
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
                        placeholder="Enter item name"
                        value={formData.itemName}
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
                        placeholder="Enter category name"
                        value={formData.categoryName}
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
                        value={formData.description}
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
                        placeholder="Enter product price"
                        value={formData.price}
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
                        placeholder="Enter rating from 1-5"
                        value={formData.rating}
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
                        placeholder="E.g., bat with extra grip"
                        value={formData.customization}
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
                        placeholder="Enter delivery time"
                        value={formData.processingTime}
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
                        placeholder="Enter available product quantity"
                        value={formData.stockStatus}
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
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;