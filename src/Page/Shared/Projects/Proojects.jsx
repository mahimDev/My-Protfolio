import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTile/SectionTitle";
import { Link } from "react-router-dom";

const Proojects = () => {
    const [activeCard, setActiveCard] = useState(0);
    const cards = [1, 2, 3, 4];
    const color = "bg-darkGray text-white"
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % cards.length);

        }, 5000)
        return () => clearInterval(interval)
    }, [cards.length])
    return (
        <div id="projects" className="lg:py-20 mx-auto">
            <SectionTitle title={"\\\\ Projects"} />
            {/*  */}
            <div className="mt-20  ">
                <div className="lg:flex justify-center items-center lg:gap-10  ">
                    <div className="space-y-8 hidden lg:block ">
                        {/* card 1 */}
                        <div>
                            <Link to={`page/1`}>
                                <div className={`${activeCard === 0 && `${color} `} flex items-center gap-2 border rounded-xl py-2 px-5 max-w-[550px] transition-all duration-700 hover:scale-105 `}>
                                    {activeCard === 0 ?
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=E6bpJRVimJOF&format=png&color=ffffff" alt="" />
                                        :
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=E6bpJRVimJOF&format=png&color=000000" alt="" />
                                    }
                                    <div>
                                        <h1 className="text-xl font-semibold">
                                            HavenHub
                                        </h1>
                                        <p className="mt-1 ">
                                            Hotel booking service provitor
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* card 2 */}
                        <div>
                            <Link to={"page/4"}>
                                <div className={`${activeCard === 1 && `${color} `} flex items-center gap-2 border rounded-xl py-2 px-5 max-w-[550px] transition-all duration-700 hover:scale-105`}>
                                    {activeCard === 1 ?
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=8576&format=png&color=FFFFFF" alt="" />
                                        :
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=8576&format=png&color=000000" alt="" />
                                    }
                                    <div>
                                        <h1 className="text-xl font-semibold">
                                            Gadget Heaven
                                        </h1>
                                        <p className="mt-1 ">
                                            Smart gadget online shop
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className=" lg:max-w-[700px] max-w-[400px] max-h-[600px] rounded-lg overflow-hidden mx-auto lg:mx-0 mb-5">
                        {
                            activeCard === 0 && <img className="rounded-lg w-full h-full object-cover hover:scale-105 duration-500" src="https://i.ibb.co.com/Wv93Sn8w/Screenshot-2025-02-06-212153.png" alt="" />
                        }
                        {
                            activeCard === 1 && <img className="rounded-lg w-full h-full object-cover hover:scale-105 duration-500" src="https://i.ibb.co.com/7JvDGmM7/Screenshot-239.png" alt="" />
                        }
                        {
                            activeCard === 2 && <img className="rounded-lg w-full h-full object-cover hover:scale-105 duration-500" src="https://i.ibb.co.com/0nWCqXg/employees-using-laptop-800x450.jpg" alt="" />
                        }
                        {
                            activeCard === 3 && <img className="rounded-lg w-full h-full object-cover hover:scale-105 duration-500" src="https://i.ibb.co.com/84ThjtHS/Screenshot-238.png" alt="" />
                        }

                    </div>
                    <div className="space-y-5 block lg:hidden ">
                        {/* card 1 */}
                        <div>
                            <Link to={`page/1`}>
                                <div className={`${activeCard === 0 && `${color} `} flex items-center gap-2 border rounded-xl py-2 px-5 max-w-[550px] transition-all duration-700 hover:scale-105 `}>
                                    {activeCard === 0 ?
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=E6bpJRVimJOF&format=png&color=ffffff" alt="" />
                                        :
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=E6bpJRVimJOF&format=png&color=000000" alt="" />
                                    }
                                    <div>
                                        <h1 className="text-xl font-semibold">
                                            HavenHub
                                        </h1>
                                        <p className="mt-1 ">
                                            Hotel booking service provitor
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* card 2 */}
                        <div className="">
                            <Link to={"page/4"}>
                                <div className={`${activeCard === 1 && `${color} `} flex items-center gap-2 border rounded-xl py-2 px-5 max-w-[550px] transition-all duration-700 hover:scale-105`}>
                                    {activeCard === 1 ?
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=8576&format=png&color=FFFFFF" alt="" />
                                        :
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=8576&format=png&color=000000" alt="" />
                                    }
                                    <div>
                                        <h1 className="text-xl font-semibold">
                                            Gadget Heaven
                                        </h1>
                                        <p className="mt-1 ">
                                            Smart gadget online shop
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-8">

                        {/* card 3 */}
                        <div className="mt-7 lg:mt-0">
                            <Link to={'page/3'}>
                                <div className={`${activeCard === 2 && `${color} `} flex items-center gap-2 border rounded-xl py-2 px-5 max-w-[550px] transition-all duration-700 hover:scale-105`}>
                                    {activeCard === 2 ?
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=VI3CQhv2GdKl&format=png&color=FFFFFF" alt="" />
                                        :
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=VI3CQhv2GdKl&format=png&color=000000" alt="" />
                                    }
                                    <div>
                                        <h1 className="text-xl font-semibold">
                                            ScholarEase
                                        </h1>
                                        <p className="mt-1 ">
                                            Scholarship Navigator Platform
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* card 4 */}
                        <div>
                            <Link to={"page/2"}>
                                <div className={`${activeCard === 3 && `${color} `} flex items-center gap-2 border rounded-xl py-2 px-5 max-w-[550px] transition-all duration-700 hover:scale-105 `}>
                                    {activeCard === 3 ?
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=1429&format=png&color=FFFFFF" alt="" />
                                        :
                                        <img className="w-24" src="https://img.icons8.com/?size=100&id=1429&format=png&color=000000" alt="" />
                                    }
                                    <div>
                                        <h1 className="text-xl font-semibold">
                                            GlobalGate
                                        </h1>
                                        <p className="mt-1 ">
                                            Visa navigation website service
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proojects;