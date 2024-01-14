import { useEffect, useState } from "react";
import './cursor.css'
const Cursor = () => {
    const [cursor1Style, setCursor1Style] = useState({ left: 0, top: 0 });
    const [cursor2Style, setCursor2Style] = useState({});

    useEffect(() => {
        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Update styles for Curso1
            setCursor1Style({ left: posX, top: posY, });

            // Update styles for Curso2
            setCursor2Style({ left: posX, top: posY, transition: 'left 0.4s,  top 0.3s ,  ' });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])


    return (
        <div className="cursor ">
            <div style={cursor1Style} className='custom-cursor'></div>
            <div style={cursor2Style} className='cursor-outLine'></div>
        </div>
    );
};

export default Cursor;