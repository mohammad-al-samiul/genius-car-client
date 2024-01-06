import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServicesItem = ({ service }) => {
  const { img, price, title, _id } = service;
  return (
    <Link to={`/checkout/${_id}`}>
      <div className="card lg:h-[420px] bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-bold text-red-500">Price : ${price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-sm btn-outline btn-error ! hover:text-white">
              Add to Cart
            </button>
            <button className="text-white btn btn-sm btn-info ! hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServicesItem;
