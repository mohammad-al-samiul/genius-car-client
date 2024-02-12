import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../Provider/AuthProvider";
import OrderRow from "./OrderRow/OrderRow";

const Order = () => {
  const [bookings, setBookings] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    if (loading) {
      return;
    }
    fetch(`https://genius-car-server-iota-ochre.vercel.app/api/bookings?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user?.email, token, loading, refresh]);
  //console.log(bookings);

  if (!Array.isArray(bookings) || bookings.length === 0) {
    return <Spinner />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://genius-car-server-iota-ochre.vercel.app/api/bookings/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your service has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleUpdate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://genius-car-server-iota-ochre.vercel.app/api/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: true }),
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            if (data.success) {
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const approved = bookings.find((booking) => booking._id === id);
              const newBooking = [...remaining, approved];
              setBookings(newBooking);
              setRefresh(!refresh);
            }
          });
        Swal.fire({
          title: "Approved!",
          text: "Order Successful",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <OrderRow
                key={i}
                booking={booking}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></OrderRow>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Order;
