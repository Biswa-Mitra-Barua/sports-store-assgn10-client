import NavBar from '../components/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto mt-5"><NavBar></NavBar></div>
            <div className="w-11/12 mx-auto mt-5"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;