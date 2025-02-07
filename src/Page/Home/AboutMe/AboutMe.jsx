import aboutImg from '../../../assets/1.png';
import SectionTitle from '../../../Components/SectionTile/SectionTitle';
const AboutMe = () => {
    return (
        <div id="aboutMe" className='text-gray-200'>

            <SectionTitle title={"\\\\ A little bit  about me"} />
            <p></p>

            <div className="grid grid-cols-1   lg:grid-cols-6  my-20 md:p-10">
                <div className="col-span-3">

                    {/* <div className="relative  flex  justify-center pb-10">
                        <div className="w-2/3  h-fit mt-10 text-lg bg-gradient-to-r from-[#1a1a1ae5] to-[#141414] shadow-lg  p-10 rounded-2xl " >
                            <p>
                                Hi, I'm <strong>Mahim</strong>, I am an enthusiastic web developer skilled in React, Next.js, Tailwind CSS and MERN stack. I love to build modern, user-friendly websites and web applications. And besides that, I have been passionate about photography since I was a child.
                            </p>
                            <p className='mt-4'>
                                With experience in frontend and backend development, I enjoy solving problems and creating efficient, scalable solutions. I'm always learning new technologies to improve my skills and stay up-to-date with industry trends.
                            </p>
                            <p className='mt-4'>
                                My <strong>Programming journey</strong> was very difficult, because I am a madrasa student, and we have a business, so time management was a challenging issue.
                            </p>
                        </div>

                        <img className="w-20 h-20 rounded-full absolute left-28" src="https://img.icons8.com/?size=100&id=82433&format=png&color=000000" alt="" />
                    </div> */}
                    {/*  */}
                    <div className="relative flex justify-center ">
                        <div className="md:w-2/3 h-fit mt-10 text-lg bg-gradient-to-r from-[#1a1a1ae5] to-[#141414] shadow-lg p-10 rounded-2xl">
                            <p>
                                Hi, I'm <strong>Mahim</strong>. I am a passionate <strong>frontend developer</strong> skilled in **React, Next.js, Tailwind CSS**, and modern web technologies.
                                I love crafting visually appealing, **responsive**, and **high-performance** websites that enhance user experience.
                                Beyond coding, I have been passionate about **photography** since childhood, capturing creativity through my lens.
                            </p>

                            <p className="mt-4">
                                I specialize in **frontend development**, creating seamless and interactive user interfaces.
                                Currently, I am also **learning backend technologies** like **Node.js, Express.js, and MongoDB** to become a well-rounded full-stack developer.
                            </p>

                            <p className="mt-4">
                                My <strong>programming journey</strong> was challenging. As a **madrasa student** while managing a family business,
                                time management was difficult. But my **passion for coding** kept me motivated, and I worked hard to learn and grow.
                            </p>

                            <p className="mt-4">
                                Outside of coding, I enjoy **photography, exploring new technologies, and traveling**.
                                I believe in continuous learning and always push myself to improve and stay updated with industry trends.
                            </p>
                        </div>

                        <img
                            className="w-20 h-20 rounded-full absolute left-28"
                            src="https://img.icons8.com/?size=100&id=82433&format=png&color=000000"
                            alt="Profile"
                        />
                    </div>

                    {/*  */}
                </div>
                <div className=" backdrop-blur-2xl shadow-xl bg-gradient-to-r from-[#1a1a1ae5] to-[#141414]  rounded-2xl p-5 col-span-3">
                    <img className="rounded-2xl  shadow-2xl w-full h-full object-cover" src={aboutImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutMe;