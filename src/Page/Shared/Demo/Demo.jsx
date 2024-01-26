import { useRef } from 'react';

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




    return (
        <div className='  min-h-[70vh] bg-[#ffffff] '>
            <div>


                <div>
                    <Spline
                        scene="https://prod.spline.design/u37Z9viFO7J8BBfQ/scene.splinecode"
                        onLoad={onLoad}
                    />

                </div>
            </div>



        </div>
    );
};

export default Demo;


