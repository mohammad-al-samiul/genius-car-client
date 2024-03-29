import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import useLoggedInUser from "../../Hooks/useLoggedInUser";
import { AuthContext } from "../../Provider/AuthProvider";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [loggedUser, isUserLoading] = useLoggedInUser();
  const token = localStorage.getItem("access-token");
  //console.log(token);
  
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  if (isUserLoading) {
    return <Spinner/> ;
  }
  
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value.slice(0, 10);
    const name = form.name.value;
    const email = user?.email ? user?.email : form.email.value;
    const message = form.message.value;
    const order = {
      user_id : loggedUser?._id,
      user_name: name,
      service_id: _id,
      service_name: title,
      email,
      img,
      price,
      date,
      status: false,
      description: message,
    };
    //console.log(order);
    fetch(`https://genius-car-server-iota-ochre.vercel.app/api/bookings`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization :  `Bearer ${token}`
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.insertedId) {
          form.reset();
          toast.success("Order Confirmed! ");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
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
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              id="birthdaytime"
              className="input"
              name="date"
              defaultValue={new Date().toJSON().slice(0, 10)}
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
              defaultValue={user?.email}
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
