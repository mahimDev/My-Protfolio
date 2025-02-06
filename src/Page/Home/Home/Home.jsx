import Cursor from "../../Shared/Cursor/Cursor";
import Demo from "../../Shared/Demo/Demo";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";

import Carts from "../Carts/Carts";

const Home = () => {
    return (
        <div className="scrolling">
            <Cursor></Cursor>
            <Banner></Banner>
            {/* <img src="https://github-readme-streak-stats.herokuapp.com/?user=mahimDev&theme=soft-green&card_width=800&card_height=300" alt="GitHub Streak" /> */}
            <main className="w=10/12 mx-auto">
                <section className="my-20">
                    <AboutMe />
                </section>
            </main>
            {/* <Carts></Carts> */}
            {/* 3d text */}
            {/* <Demo></Demo> */}
        </div>
    );
};

export default Home;