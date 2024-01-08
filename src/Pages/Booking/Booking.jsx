import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, title, price, img } = service;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const name = form.name.value;
    const email = user?.email;
    const message = form.message.value;
    const order = {
      user_name: name,
      service_id: _id,
      service_name: title,
      email,
      img,
      price,
      date,
      description: message,
    };
    console.log(order);
  };

  return (
    <div className="bg-base-200 p-20 rounded-lg mt-10">
      <form onSubmit={handleBooking} className="card-body space-y-3 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              id="birthdaytime"
              className="input"
              name="date"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <input
              type="number"
              placeholder="Your Phone"
              name="phone"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <textarea
            className="textarea h-32"
            name="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white btn-error resize">
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
