/* eslint-disable no-unused-vars */
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import signupImage from "../../assets/images/login/login";
const Signup = () => {
  const { googleSignIn, createUser, githubSignIn } = useContext(AuthContext);

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("successfully created user");
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };
  const handleGithubSignUp = () => {
    handleGithubSignUp()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("successfully created user");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, name, password };
    console.log(user);
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={signupImage} alt="" />
        </div>
        <div className="card w-full max-w-sm border border-slate-300 py-6">
          <h1 className="text-center text-2xl font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
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
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control">
              <input
                className="btn btn-error ! hover:text-white text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <label className="text-center my-3">
            or Sign up with
            <br />
          </label>
          <div className="flex justify-center gap-x-3 mb-3 text-red-400">
            <span onClick={handleGithubSignUp}>
              <FaGithub className="text-2xl cursor-pointer" />
            </span>
            <span onClick={handleGoogleSignUp}>
              <FaGoogle className="text-2xl cursor-pointer" />
            </span>
          </div>

          <div>
            <label>
              <span className="block text-center">
                Already have an account?
                <Link
                  to={"/login"}
                  className="link link-hover text-red-500 font-bold"
                >
                  Login
                </Link>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
