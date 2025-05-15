import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment }) => {
    const { _id, itemName, image, description, price } = equipment;

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
                    <Link to={`/viewDetails/${equipment._id}`} className="btn btn-outline font-bold">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;