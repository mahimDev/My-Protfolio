import { NavLink } from 'react-router-dom';
import './Navber.css'

const Navber = () => {

    const nav =
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active hover:border-b-2 hover:border-[#414345] text-transparent bg-clip-text  bg-gradient-to-r from-[#8E0E00] to-[#1F1C18]" : " "
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/servises"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active hover:border-b-2 hover:border-[#414345]text-transparent bg-clip-text  bg-gradient-to-r from-[#8E0E00] to-[#1F1C18]" : " "
                    }
                >
                    Servises
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active hover:border-b-2 hover:border-[#414345] text-transparent bg-clip-text  bg-gradient-to-r from-[#8E0E00] to-[#1F1C18]" : " "
                    }
                >
                    About
                </NavLink>
            </li>
        </>


    return (
        <div className="  flex justify-between py-5 px-5 border-0 rounded items-center shadow-xl ">
            <div className={`text-3xl bg-clip-text bg-gradient-to-r from-[#3e0101] to-[#2d1d1c] font-bold text-transparent `}>
                Mahim
            </div>
            <div>
                <ul className="flex gap-7 font-medium">
                    {nav}

                </ul>
            </div>
            <div>
                <button className="botton text-white " >Login</button>


            </div>



        </div>
    );
};

export default Navber;