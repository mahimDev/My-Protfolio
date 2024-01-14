import './cart.css'
// import img1 from '../../../../public/Screenshot_24.png';
import { Link } from 'react-router-dom';
const Cart = ({ data }) => {
    const { image, heading, paragraph, link } = data;

    return (
        <div className='mt-20'>
            <div className="cart ">
                <span> </span>
                <div className='mahim text-xl '>

                    <div className='py-2 px-2'>
                        <img
                            className='rounded-t-xl rounded-b  '
                            src={image} alt="" />
                        <h2 className='text-2xl font-bold text-center mt-3'>{heading}</h2>
                        <p className='text-center mt-4'>

                        </p>
                        <Link to={link}><p className='text-base font-light ml-2'>Live Link :{link} </p></Link>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default Cart;