import { Outlet } from "react-router-dom";
import Navber from "../Page/Shared/Navber/Navber";
import Fotter from "../Page/Shared/Fotter/Fotter";


const Layout = () => {
    return (
        <div >
            <div className="">
                <Navber></Navber>
            </div>
            <Outlet></Outlet>
            {/* <Fotter></Fotter> */}
        </div>
    );
};

export default Layout;