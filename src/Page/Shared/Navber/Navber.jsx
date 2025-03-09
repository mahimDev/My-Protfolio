import { Link } from 'react-router-dom';
import './Navber.css'
import { useState } from 'react';

const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const nav =
        <>
            <li>
                <button
                    onClick={() => document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" })}
                >
                    {"\\\\About Me"}
                </button>
            </li>
            <li>
                <button
                    onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}
                >
                    {"\\\\Skills"}
                </button>
            </li>
            <li>
                <button
                    onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
                >
                    {"\\\\Projects"}
                </button>
            </li>
        </>


    return (
        <Link to={'/'}>
            <div className="font-josefin fixed top-0 z-20  flex justify-between py-5 px-5 border-0  items-center shadow-2xl bg-gradient-to-r from-[#1a1a1ae5] to-[#141414] w-full backdrop-blur-lg">
                {/* <div className={`text-3xl bg-clip-text bg-gradient-to-r from-[#c4c4c4] to-[#1f1f1f] font-bold text-transparent `}>
                    Mahim
                </div> */}

                <div className='ml-24 hidden lg:block'>
                    <div className="water ">
                        <h2 className='water-1 '>Mahim</h2>
                        <h2 className='water-2 '>Mahim</h2>
                    </div>
                </div>
                {
                    menuOpen ?
                        <div>

                            <button
                                onClick={() => setMenuOpen(false)}
                                className="sticky top-10 z-50 left-0 bg-black p-1 rounded-r lg:hidden block">
                                <img className="w-9 " src="https://img.icons8.com/?size=100&id=dnWj68fbIjQS&format=png&color=E7E7E7" alt="" />
                            </button>
                            <ul className="absolute left-0 font-medium text-white bg-black w-fit p-4 rounded-r ">
                                {nav}

                            </ul>
                        </div>
                        :
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="sticky top-0 z-50  bg-black p-1 rounded-r lg:hidden block">
                            <img className="w-9 " src="https://img.icons8.com/?size=100&id=36389&format=png&color=E7E7E7" alt="" />
                        </button>
                }

                <div className='hidden lg:block'>
                    <ul className="lg:flex gap-7 font-medium text-white ">
                        {nav}

                    </ul>

                </div>
                <div>
                    <Link to="https://drive.google.com/file/d/1rsQvDUMGDC-wDq-BA5trQYYH33qJVuNL/view?usp=sharing">
                        <button className="botton text-white " >RESUME</button>

                    </Link>

                </div>



            </div>
        </Link>
    );
};

export default Navber;