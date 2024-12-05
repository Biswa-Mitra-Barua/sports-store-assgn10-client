import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import Error from "../components/Error/Error";
import AllEquipment from "../components/AllEquipment/AllEquipment";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MyEquipment from "../components/MyEquipment/MyEquipment";
import AddEquipment from "../components/AddEquipment/AddEquipment";



const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
                loader: () => fetch('http://localhost:5000/equipment')
            },
            {
                path: '/allEquipment',
                element:<AllEquipment></AllEquipment> 
            },
            {
                path: '/addEquipment',
                element: <PrivateRoute>
                    <AddEquipment></AddEquipment>
                </PrivateRoute>
            },
            {
                path: '/myEquipment',
                element: <PrivateRoute>
                    <MyEquipment></MyEquipment>,
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/equipment')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/forgotPassword',
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: '*',
                element: <Error></Error>
            },
        ]
    }
])


export default router;