/* eslint-disable react/prop-types */
const OrderRow = ({ booking }) => {
  const { service_name, price, img, date } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
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
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default OrderRow;
