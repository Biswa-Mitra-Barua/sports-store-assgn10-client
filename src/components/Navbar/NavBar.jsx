import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import '../Navbar/Navbar.css';

const NavBar = () => {
    const { user, handleLogout } = useContext(authContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className='w-11/12 mx-auto py-4 sticky top-0 z-50 shadow-md rounded-md bg-white dark:bg-gray-900 transition-all duration-300'>
            <div className='flex justify-between items-center px-4 md:px-6'>

                <Link to='/' className='text-2xl md:text-5xl font-bold neon text-gray-900 dark:text-white'>
                    <span className="font-extrabold">Sports</span>Pro
                </Link>

                <nav className='hidden md:flex space-x-6 items-center'>
                    <NavLink
                        onClick={closeMenu}
                        to='/'
                        className={({ isActive }) =>
                            `${isActive ? 'text-sky-500 font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-sky-400'} transition-colors`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to='/allEquipment'
                        className={({ isActive }) =>
                            `${isActive ? 'text-sky-500 font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-sky-400'} transition-colors`
                        }
                    >
                        All Sports Equipment
                    </NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to='/addEquipment'
                        className={({ isActive }) =>
                            `${isActive ? 'text-sky-500 font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-sky-400'} transition-colors`
                        }
                    >
                        Add Equipment
                    </NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to='/myEquipment'
                        className={({ isActive }) =>
                            `${isActive ? 'text-sky-500 font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-sky-400'} transition-colors`
                        }
                    >
                        My Equipment List
                    </NavLink>
                </nav>

                <div className='flex items-center gap-2 md:gap-4'>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        {user?.photoURL && (
                            <img
                                className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-sky-700 hover:shadow-lg cursor-pointer'
                                src={user.photoURL}
                                title={user?.displayName || 'User'}
                                alt="User Avatar"
                            />
                        )}
                    </div>

                    {user && user.email ? (
                        <button
                            onClick={handleLogout}
                            className='btn btn-neutral rounded-full px-4 py-2 text-sm md:text-base text-white hover:bg-sky-500 transition-colors'
                        >
                            Logout
                        </button>
                    ) : (
                        <div className='hidden md:flex gap-2'>
                            <Link to='/login' className="btn btn-neutral rounded-full px-4 py-2 text-white hover:bg-sky-500 transition-colors">Login</Link>
                            <Link to='/register' className="btn btn-neutral rounded-full px-4 py-2 text-white hover:bg-sky-500 transition-colors">Register</Link>
                        </div>
                    )}

                    <button onClick={toggleMenu} className="md:hidden text-2xl text-sky-700 ml-2">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden flex flex-col gap-3 bg-white dark:bg-gray-800 px-4 py-4 rounded-md mt-2 shadow-md'>
                    <NavLink onClick={closeMenu} to='/' className="text-gray-800 dark:text-gray-100 hover:text-sky-500">Home</NavLink>
                    <NavLink onClick={closeMenu} to='/allEquipment' className="text-gray-800 dark:text-gray-100 hover:text-sky-500">All Sports Equipment</NavLink>
                    <NavLink onClick={closeMenu} to='/addEquipment' className="text-gray-800 dark:text-gray-100 hover:text-sky-500">Add Equipment</NavLink>
                    <NavLink onClick={closeMenu} to='/myEquipment' className="text-gray-800 dark:text-gray-100 hover:text-sky-500">My Equipment List</NavLink>

                    {!user?.email && (
                        <div className='flex flex-col gap-2 mt-2'>
                            <Link to='/login' className="btn btn-neutral rounded-full text-white">Login</Link>
                            <Link to='/register' className="btn btn-neutral rounded-full text-white">Register</Link>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default NavBar;
