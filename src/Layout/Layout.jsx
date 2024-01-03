import { Outlet } from "react-router-dom";
import Navber from "../Page/Shared/Navber/Navber";


const Layout = () => {
    return (
        <div >
            <div className="">
                <Navber></Navber>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;