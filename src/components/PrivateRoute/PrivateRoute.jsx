import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    
    if(loading){
        return <h2><span className="loading loading-bars loading-lg"></span></h2>
    }
    if(!user){
        return <Navigate state={{from:location.pathname}} to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;