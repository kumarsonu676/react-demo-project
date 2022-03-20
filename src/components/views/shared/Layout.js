
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";

export default function Layout(){

    return (

        <>
        <Header />
        <Banner />                
        <Outlet />
        <Footer />       
        </>
    );

}