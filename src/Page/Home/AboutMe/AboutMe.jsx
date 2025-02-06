import aboutImg from '../../../assets/1.png';
import SectionTitle from '../../../Components/SectionTile/SectionTitle';
const AboutMe = () => {
    return (
        <div id="aboutMe" className='text-white'>
            <h1 className='text-4xl ml-56'></h1>
            <SectionTitle title={"A little bit  about me"} />
            <p></p>

            <div className="grid grid-cols-1   lg:grid-cols-6  my-20 md:p-10">
                <div className="col-span-3">

                    <div className="relative  flex  justify-center py-10">
                        <div className="w-2/3  h-fit mt-10 text-lg bg-gradient-to-r from-[#1a1a1ae5] to-[#141414] shadow-lg  p-10 rounded-2xl " >
                            <p>
                                Hi, I'm <strong>Mahim</strong>, a passionate web developer skilled in React, Next.js, Tailwind CSS, and the MERN stack. I love building modern, user-friendly websites and web applications.
                            </p>
                            <p className='mt-4'>
                                With experience in frontend and backend development, I enjoy solving problems and creating efficient, scalable solutions. I'm always learning new technologies to improve my skills and stay up-to-date with industry trends.
                            </p>
                        </div>

                        <img className="w-20 h-20 rounded-full absolute left-28" src="https://img.icons8.com/?size=100&id=82433&format=png&color=000000" alt="" />
                    </div>
                </div>
                <div className=" backdrop-blur-2xl shadow-xl bg-gradient-to-r from-[#1a1a1ae5] to-[#141414]  rounded-2xl p-5 col-span-3">
                    <img className="rounded-2xl  shadow-2xl w-full" src={aboutImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutMe;