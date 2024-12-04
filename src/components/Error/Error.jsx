import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 text-center">
            <h1 className="text-8xl font-bold text-blue-500">404</h1>
            <p className="text-2xl text-gray-700 mt-4">
                Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-lg text-gray-500 mt-2">
                It might have been moved, or the link is broken.
            </p>

            <div className="mt-8">
                <Link to="/" className="btn btn-primary gap-2">
                    <AiOutlineHome className="text-lg" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;