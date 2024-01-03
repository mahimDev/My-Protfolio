import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Carts = () => {
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())

            .then(data => {
                setCartData(data)

            })

    }, [])
    // console.log(cartData)
    return (
        <div className="">


            <div className="flex justify-center">
                <div className="  relative w-56  text-center">
                    <h2 className=" absolute blur-2xl text-5xl font-bold bg-clip-text bg-gradient-to-r from-[#8E0E00] to-[#1F1C18]  text-transparent ">My Work</h2>
                    <h2 className="  text-5xl  font-bold bg-clip-text bg-gradient-to-r from-[#8E0E00] to-[#1F1C18]  text-transparent mx-auto ">My Work</h2>
                </div>
            </div>

            <div className="flex justify-center mt-5  gap-20">
                {
                    cartData.map(data => <Cart key={data?.id} data={data}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;