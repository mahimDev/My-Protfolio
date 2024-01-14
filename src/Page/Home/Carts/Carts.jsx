import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import MyWork from "../../Shared/MyWork/MyWork";

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


            <div className="flex justify-center my-10">
                <MyWork></MyWork>
            </div>

            <div className="grid lg:grid-cols-3 mx-auto mt-5  gap-20">
                {
                    cartData.map(data => <Cart key={data?.id} data={data}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;