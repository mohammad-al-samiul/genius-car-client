import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/logo";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {
      localStorage.removeItem("access-token");
      toast.success("log out successful");
      <Navigate to={"/home"} />;
    });
  };
  const listItems = (
    <>
      <li>
        <NavLink to={"/home"}> Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}> About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}> Services</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}> Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}> Contact</NavLink>
      </li>
      {user && user?.uid ? (
        <>
          <li>
            <NavLink to={"/order"}> Order</NavLink>
          </li>
          <button
            onClick={handleLogout}
            className="mt-1 btn btn-sm btn-ghost"
            to={"/login"}
          >
            Log out
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}> Login</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}> Signup</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listItems}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img className="w-14" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{listItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-error ! hover:text-white">
            Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
