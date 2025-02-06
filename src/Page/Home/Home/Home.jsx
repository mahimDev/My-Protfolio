import Cursor from "../../Shared/Cursor/Cursor";
import Proojects from "../../Shared/Projects/Proojects";
import Skills from "../../Shared/Skills/Skills";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
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
                <section className="my-20">
                    <Skills />
                </section>
                <section className="my-20">
                    <Proojects />
                </section>
            </main>
            {/* <Carts></Carts> */}
            {/* 3d text */}
            {/* <Demo></Demo> */}
        </div>
    );
};

export default Home;