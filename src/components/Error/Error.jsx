import { Link } from "react-router-dom";
import './Error.css';

const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 to-pink-200 text-white">
            <div className="text-center">
                <h1 className="text-9xl font-bold animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-red-400">
                    404
                </h1>
                <p className="text-xl mt-4">Oops! Page not found.</p>
                <Link to='/' className="mt-6 inline-block px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-cyan-200 transition duration-300">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
