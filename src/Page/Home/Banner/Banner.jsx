import img from "../../../assets/Screenshot_27.png"
import './banner.css'
const Banner = () => {
    return (
        <div className={` w-full h-[90vh]`}  >
            <div style={{ background: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover ' }} className={`   flex`} >
                <h2 className=" my-60 ml-32 flex-1 text-8xl font-bold bg-clip-text bg-gradient-to-r from-[#8E0E00] to-[#1F1C18]  text-transparent">
                    Innovative Web
                    <div className="mt-10 ml-[275px] ">
                        <div className="water">
                            <h2 className='water-1 '>DEVELOPER</h2>
                            <h2 className='water-2 '>DEVELOPER</h2>
                        </div>
                    </div>
                </h2>
                <div className="flex-1"></div>
            </div>
        </div>
    );
};

export default Banner;