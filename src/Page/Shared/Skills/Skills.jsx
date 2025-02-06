import Marquee from "react-fast-marquee";
import SectionTitle from "../../../Components/SectionTile/SectionTitle";
import "./skills.css";
const Skills = () => {
    return (
        <div id="skills" className="container mx-auto">
            <SectionTitle title={"// Skills"} />
            <Marquee >
                <div className=" flex justify-evenly gap-20 py-20">

                    <div className="skillsBox ml-20">
                        <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=ffffff" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=2D7700" alt="" />
                    </div>
                    <div className="skillsBox">
                        <img src="https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000" alt="" />
                    </div>
                </div>
            </Marquee>

        </div>
    );
};

export default Skills;