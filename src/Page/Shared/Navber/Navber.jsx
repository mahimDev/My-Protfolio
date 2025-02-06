import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {

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
                    onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}
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

                <div className='ml-24 '>
                    <div className="water ">
                        <h2 className='water-1 '>Mahim</h2>
                        <h2 className='water-2 '>Mahim</h2>
                    </div>
                </div>

                <div>
                    <ul className="lg:flex gap-7 font-medium text-white hidden lg:block">
                        {nav}

                    </ul>
                </div>
                <div>
                    <button className="botton text-white " >RESUME</button>


                </div>



            </div>
        </Link>
    );
};

export default Navber;