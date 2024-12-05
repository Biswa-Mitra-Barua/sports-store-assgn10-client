import { Link, NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';


const NavBar = () => {
    const { user, handleLogout } = useContext(authContext);
    
    return (
        <div className='p-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to='/' className='text-4xl font-bold neon '><span className="font-extrabold">Sports</span>Pro</Link>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <NavLink to='/' activeClassName="text-sky-500 font-semibold" className="text-gray-600 hover:text-sky-500 transition-colors">Home</NavLink>
                    <NavLink to='/allEquipment' activeClassName="text-sky-500 font-semibold" className="text-gray-600 hover:text-sky-500 transition-colors">All Sports Equipment</NavLink>
                    <NavLink to='/addEquipment' activeClassName="text-sky-500 font-semibold" className="text-gray-600 hover:text-sky-500 transition-colors">Add Equipment</NavLink>
                    <NavLink to='/myEquipment' activeClassName="text-sky-500 font-semibold" className="text-gray-600 hover:text-sky-500 transition-colors">My Equipment List</NavLink>
                </div>

                <div className='flex items-center gap-4'>
                    <div>
                        {user?.photoURL &&
                            (<img className='w-12 h-12 rounded-full border-2 border-sky-500 hover:shadow-lg cursor-pointer'
                                src={user.photoURL}
                                title={user?.displayName || 'User'}>
                            </img>)}
                    </div>

                    {
                        user && user?.email ?
                            (<button onClick={handleLogout} className='btn btn-neutral rounded-full px-6 py-2 font-semibold text-white hover:bg-sky-500 transition-colors"'>Logout</button>) : 
                            <div className='space-x-4'>
                                <Link to='/login' className="btn btn-neutral rounded-full px-6 py-2 font-semibold text-white hover:bg-sky-500 transition-colors">Login</Link>
                                <Link to='/register' className="btn btn-neutral rounded-full px-6 py-2 font-semibold text-white hover:bg-sky-500 transition-colors">Register</Link>
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default NavBar;