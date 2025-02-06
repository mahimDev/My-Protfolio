import { Link } from "react-router-dom";
import img from "../../../../public/2.png"
// import './banner.css'
const Banner = () => {
    return (
        <div className={` `}  >
            <div style={{ background: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} className={`w-full  lg:h-[100vh] h-[40vh] relative mt-20 lg:mt-0`} >
                {/* <h2 className=" my-60 ml-32 flex-1 text-8xl font-bold bg-clip-text bg-gradient-to-r from-[#8E0E00] to-[#1F1C18]  text-transparent">
                    Innovative Web
                    <div className="mt-10 ml-[275px] ">
                        <div className="water">
                            <h2 className='water-1 '>DEVELOPER</h2>
                            <h2 className='water-2 '>DEVELOPER</h2>
                        </div>
                    </div>
                </h2>
                <div className="flex-1"></div> */}
                <div className="absolute bottom-8 right-[10%] flex gap-3">
                    <Link to={"https://www.facebook.com/Mahim717273"}>
                        <img className="lg:w-14 w-10" src="https://img.icons8.com/?size=100&id=z657ovoGgS2o&format=png&color=000000" alt="" />
                    </Link>
                    <Link to={"https://github.com/mahimDev"}>
                        <img className="lg:w-14 w-10" src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;