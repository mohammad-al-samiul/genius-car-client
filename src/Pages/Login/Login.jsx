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
          <form className="card-body">
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
            <div className="form-control mt-6">
              <input
                className="btn btn-error ! hover:text-white text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
