import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCard = ({ equipment, equipments, setEquipments }) => {
    const { itemName, image, description, price, _id } = equipment;

    const handleDelete = (_id) => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://sports-store-server-ruddy.vercel.app/equipment/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your equipment has been deleted.",
                                icon: "success"
                            });
                            const remaining = equipments.filter(eqp => eqp._id !== _id)
                            setEquipments(remaining)
                        }
                    })
            }
        });
    }


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
                <div className="card-actions mt-3 space-x-3">
                    <Link to = {`/updateEquipment/${_id}`}>
                        <button className="btn btn-outline">Update</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-outline">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;