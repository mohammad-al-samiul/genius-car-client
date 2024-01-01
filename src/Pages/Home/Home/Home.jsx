import About from "../../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="w-full flex justify-center">
          <Banner />
        </div>
        <div className="mt-10">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
