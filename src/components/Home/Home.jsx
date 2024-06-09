import Hero from "../Hero/Hero";
import wave from '../../assets/wave.svg'
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
            <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;