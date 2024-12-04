import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6';
import { AiOutlineLogin } from 'react-icons/ai';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { user, handleGoogleLogin, handleLogin, setUser } = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (user) {
            navigate(location.state?.from || '/');
        }
    }, [user, navigate, location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(null);
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then(res => {
                setUser(res.user)
                navigate(location.state?.from || '/')
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Incorrect Credentials!",
                  });
            });
    }
    const googleHandler = () => {
        handleGoogleLogin()
            .then(res => {
                setUser(res.user);
                navigate(location.state?.from || '/')
            })
            .cath(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Incorrect Credentials!",
                  });
            })
    };

    return (
        <div className='flex flex-col items-center mt-10 mb-10'>
            <div>
                <h1 className='font-semibold text-2xl mb-4'>Login Here</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body my-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link
                                to="/forgotPassword"
                                state={{ email }}
                                className="label-text-alt link link-hover"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>
                    <div className="form-control mt-3">
                        <button type='submit' className="btn btn-primary"><AiOutlineLogin /> Login</button>
                    </div>
                    <p className='flex justify-center'>Or,</p>
                    <button type='button' onClick={googleHandler} className='btn btn-neutral mb-2'><FaGoogle></FaGoogle> Login with Google</button>
                    <p>Don't have an account, please <Link to='/register' className='text-blue-400 font-semibold'>Register</Link> here</p>
                </form>
            </div>
        </div>
    );
};

export default Login;