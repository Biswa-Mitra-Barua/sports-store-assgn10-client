import { sendPasswordResetEmail } from "firebase/auth";
import { useLocation } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { toast } from "react-toastify";


const ForgotPassword = () => {
    const location = useLocation();
    const email = location.state?.email || '';

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Password reset link sent to your email!')
                window.location.href = 'https://mail.google.com/';
            })
            .catch(error => {
                toast(error.message)
            })

    };

    return (
        <div className="flex flex-col items-center mt-10 mb-10">
            <div>
                <h1 className="font-semibold text-2xl mb-4">Forgot Password</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleResetPassword} className="card-body my-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            defaultValue={email}
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-3">
                        <button type="submit" className="btn btn-primary">
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;