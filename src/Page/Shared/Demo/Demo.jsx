import { useRef } from 'react';
import imageM from '../../../assets/m_8112623.png'

// import { Application } from '@splinetool/runtime';
import Spline from '@splinetool/react-spline';
const Demo = () => {
    // const [value, setValue] = useState('')
    // const canvas = document.getElementById('canvas3d');
    // const app = new Application(canvas);
    // setValue(app.load('Loading...'))
    // // .......................
    const cube = useRef();

    function onLoad(spline) {
        const obj = spline.findObjectByName('Cube');
        // or
        // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

        // save it in a ref for later use
        cube.current = obj;
    }

    function moveObj() {
        console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

        // move the object in 3D space
        cube.current.position.x += 30;
    }


    return (
        <div className='  min-h-[100vh] bg-[#ffffff] '>
            <div>
                <div className='flex items-center'>
                    <img
                        className='w-10 mr-2 '
                        src={imageM} alt="" />
                    <h2 className='text-2xl font-bold'>Mahim</h2>
                </div>
                <div className='flex  text-lime-600 bg-red-100'>
                    <ul className=' ml-20'>
                        <li className='font-medium hover:border-b-4 border-red-500'> Servises</li>
                        <li className='font-medium hover:border-b-4 border-red-500'>About me</li>
                        <li className='font-medium hover:border-b-4 border-red-500'>Contact</li>
                        <li className='font-medium hover:border-b-4 border-red-500'>Contact</li>
                    </ul>
                    <ul className='ml-20  '>
                        <li className='font-medium hover:border-b-4 border-red-500'> Servises</li>
                        <li className='font-medium hover:border-b-4 border-red-500'>About me</li>
                        <li className='font-medium hover:border-b-4 border-red-500'>Contact</li>
                        <li className='font-medium hover:border-b-4 border-red-500'>Contact</li>
                    </ul>
                </div>
                <div>
                    <Spline scene="Loading..." />
                    <button type="button" onClick={moveObj}>
                        Move Cube
                    </button>


                </div>
            </div>



        </div>
    );
};

export default Demo;


