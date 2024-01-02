import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login";
const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={loginImage} alt="" />
        </div>
        <div className="card w-full max-w-sm border border-slate-300 py-6">
          <h1 className="text-center text-2xl font-bold">Login</h1>
          <form className="pb-0 card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <input
                className="btn btn-error ! hover:text-white text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <label className="text-center my-3">
            or Sign in with
            <br />
          </label>
          <div className="flex justify-center gap-x-3 mb-3 text-red-400">
            <span>
              <FaFacebook className="text-2xl cursor-pointer" />
            </span>
            <span>
              <FaGoogle className="text-2xl cursor-pointer" />
            </span>
          </div>

          <div>
            <label>
              <span className="block text-center">
                Create an account?
                <Link
                  to={"/signup"}
                  className="link link-hover text-red-500 font-bold"
                >
                  Signup
                </Link>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
