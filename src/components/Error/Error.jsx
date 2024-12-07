import { Link } from "react-router-dom";
import './Error.css';
import Animate from "../../Animate.json"
import Lottie from "lottie-react";

const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 to-pink-200 text-white py-20 my-10">
            <div className="text-center w-1/2">
                <Lottie loop={true} animationData={Animate}/>
                <p className="text-xl mt-4">Oops! Page not found.</p>
                <Link to='/' className="mt-6 inline-block px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-cyan-200 transition duration-300">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
