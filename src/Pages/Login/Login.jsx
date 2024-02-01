import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import loginImage from "../../assets/images/login/login";
const Login = () => {
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user?.email,
        };
        fetch(`http://localhost:8000/api/user/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("access-token", data.accessToken);
            toast.success("successfully created user");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user?.email,
        };
        fetch(`http://localhost:8000/api/user/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("access-token", data.accessToken);
            toast.success("successfully created user");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user?.email,
          password: password,
        };
        fetch(`http://localhost:8000/api/user/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            localStorage.setItem("access-token", data.accessToken);
            form.reset();
            toast.success("successfully created user");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={loginImage} alt="" />
        </div>
        <div className="card w-full max-w-sm border border-slate-300 py-6">
          <h1 className="text-center text-2xl font-bold">Login</h1>
          <form onSubmit={handleSignIn} className="pb-0 card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                autoComplete="on"
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
            <span onClick={handleGithubSignIn}>
              <FaGithub className="text-2xl cursor-pointer" />
            </span>
            <span onClick={handleGoogleLogin}>
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
