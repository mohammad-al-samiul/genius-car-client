/* eslint-disable react/no-unescaped-entities */
import wrenchImg from "../../assets/icons/Wrench";
import checkImg from "../../assets/icons/check";
import deliveryImg from "../../assets/icons/deliveryt";
import groupImg from "../../assets/icons/group";
import personImg from "../../assets/icons/person";

const Blog = () => {
  const featureData = [
    {
      id: 1,
      name: "Expert Team",
      img: `${groupImg}`,
    },
    {
      id: 2,
      name: "Timely Delivery",
      img: `${deliveryImg}`,
    },
    {
      id: 3,
      name: "24/7 Support",
      img: `${personImg}`,
    },
    {
      id: 4,
      name: "Best Equipment",
      img: `${wrenchImg}`,
    },
    {
      id: 5,
      name: "100% Guranty",
      img: `${checkImg}`,
    },
    {
      id: 6,
      name: "Timely Delivery",
      img: `${deliveryImg}`,
    },
  ];

  return (
    <div className="mt-10">
      <div className="lg:flex justify-center">
        <div className="px-4 lg:w-[70%] text-center space-y-2">
          <h3 className="text-red-400 font-bold">Core Features</h3>
          <h1 className="text-3xl font-bold">Why Choose Us</h1>
          <p className="text-center">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="lg:flex justify-center">
        <div className="grid lg:grid-cols-6 gap-3 mt-10 grid-cols-2 mx-5">
          {featureData.map((item) => {
            return (
              <div
                key={item.id}
                className="border border-gray-400 lg:w-[170px] lg:h-[156px] w-[150px] h-[135px] rounded-lg flex flex-col items-center justify-center"
              >
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <p className="">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
