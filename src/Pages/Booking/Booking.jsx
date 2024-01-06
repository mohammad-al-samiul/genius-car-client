import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const service = useLoaderData();
  console.log(service);
  const { title } = service;
  return (
    <div className="bg-base-200 p-20 rounded-lg mt-10">
      <form className="card-body space-y-3 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="First Name"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last Name"
              className="input"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <input
              type="number"
              placeholder="Your Phone"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your Email"
              className="input"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <textarea className="textarea h-32" placeholder="Your Message"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white btn-error resize">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
