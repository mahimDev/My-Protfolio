import Marquee from "react-fast-marquee";
import SectionTitle from "../../../Components/SectionTile/SectionTitle";

const Tools = () => {
    return (
        <div id="skills" className="container mx-auto">
            <SectionTitle title={"\\\\ Tools"} />
            <Marquee direction="right">
                <div className=" flex justify-evenly gap-20 py-20">

                    <div className="skillsBox ml-20">
                        <img src="https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff" alt="" />
                    </div>
                    <div className="skillsBox ">
                        <img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox ">
                        <img src="https://img.icons8.com/?size=100&id=8gWOBXY72Osj&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox ">
                        <img src="https://img.icons8.com/?size=100&id=24895&format=png&color=000000" alt="" />
                    </div>

                </div>
            </Marquee>

        </div>
    );
};

export default Tools;