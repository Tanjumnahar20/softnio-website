import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import  '../App.css';
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;