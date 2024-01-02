import About from "../../About/About";
import Services from "../../Services/Services";
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
        <div>
          <Services/>
        </div>
      </div>
    </div>
  );
};

export default Home;
