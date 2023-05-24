import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navigation from "../pages/Navigation";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;