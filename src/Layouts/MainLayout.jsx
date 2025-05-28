import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import ContactUs from '../Components/ContactUs';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <ContactUs></ContactUs> */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;