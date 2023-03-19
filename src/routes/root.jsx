import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import ScrollToTop from "../components/utils/utils";


export default function Root(){

    return(
        <>  
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}