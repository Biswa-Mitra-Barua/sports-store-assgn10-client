import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { MdAppRegistration } from 'react-icons/md';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { handleRegister, setUser, manageProfile } = useContext(authContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            setError("Password must be 01 uppercase, 01 lowercase & length minimum 06 characters")
            return;
        }

        handleRegister(email, password)
            .then(res => {
                manageProfile(name, photo)
                const user = res.user
                setUser(user);
                
                setSuccess(Swal.fire({
                    icon: "success",
                    title: "Great...",
                    text: "Successful!",
                  }));
                setTimeout(() => {
                    navigate('/');
                }, 2000)
            })
            .catch((error) => {
                setError(error.message)
            });
    };

    return (
        <div className='flex flex-col items-center mt-10 mb-10'>
            <div>
                <h1 className='font-semibold text-2xl mb-4 py-2'>Register Here</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body my-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input name='photo' type="text" placeholder="photoUrl" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password"
                            className="input input-bordered" required />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className='btn btn-xs absolute right-2 top-12'>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />
                            }
                        </button>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-3">
                        <button type='submit' className="btn btn-primary"><MdAppRegistration /> Register</button>
                    </div>
                    <p className='flex justify-center'>Or,</p>
                    <button type='button' className='btn btn-neutral mb-2'><FaGoogle></FaGoogle> Register with Google</button>
                    <p>Already have an account, please <Link to='/login' className='text-blue-400 font-semibold'>Login</Link> here</p>
                </form>
                {
                    error && <p className='text-red-500 text-sm text-center mb-4'>{error}</p>
                }
                {
                    success && <p className='text-red-500 text-sm text-center mb-4'>{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;