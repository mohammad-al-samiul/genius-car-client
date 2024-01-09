/* eslint-disable react/prop-types */
const OrderRow = ({ booking, handleUpdate, handleDelete }) => {
  const { _id, service_name, price, img, date, status } = booking;
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-neutral btn-sm btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_name}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{date?.slice(0, 10)}</td>
      <th>
        {status ? (
          <>
            <button
              
              onClick={() => handleUpdate(_id)}
              className="btn bg-green-400 text-white btn-sm"
              disabled
            >
              Approved
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleUpdate(_id)}
              className="btn btn-error text-white btn-sm"
            >
              Pending
            </button>
          </>
        )}
      </th>
    </tr>
  );
};

export default OrderRow;
