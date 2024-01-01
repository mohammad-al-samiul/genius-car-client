/* eslint-disable react/no-unescaped-entities */
import parts from "../../assets/images/about_us/parts";
import person from "../../assets/images/about_us/person";
const About = () => {
  return (
    <div className="hero lg:h-[600px]">
      <div className="p-0 hero-content flex-col lg:flex-row !justify-between">
        <div className="lg:w-1/2 relative px-5">
          <img src={person} className="lg:w-9/12 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="hidden lg:block lg:max-w-sm rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2  px-5">
          <div>
            <h3 className="text-red-500 text-xl">About</h3>
            <h1 className="text-3xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-3">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="text-white btn btn-error ! hover:text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
