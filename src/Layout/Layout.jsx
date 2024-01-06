import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    const location = useLocation();

    const isLocation =
      location.pathname.includes("login") ||
      location.pathname.includes("signup");
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {isLocation || <Footer></Footer>}
        </div>
    );
};

export default Layout;