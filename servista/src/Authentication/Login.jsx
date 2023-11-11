import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import { useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginDetails.email,
        loginDetails.password
      );
      console.log(user.user);
      console.log(auth.currentUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const provider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();

  const authWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const authWithFacebook = async () => {
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="w-[50vw] md:block hidden">
        <img
          src="src\Authentication\AuthBg.jpg"
          className="w-[100vw] h-screen"
          alt=""
        />
      </div>
      <div className="md:w-[50vw] w-full flex flex-col items-center">
        <div className=" text-start">
          <h1 className=" text-2xl font-bold">Log in to your Account</h1>
          <span className="text-sm">
            Welcome back! Select method to log in:
          </span>
        </div>
        <div className="flex gap-5 mx-2 mt-5 font-semibold">
          <button
            onClick={authWithGoogle}
            className="py-3 px-8 border rounded-lg flex items-center gap-2 hover:bg-gray-200"
          >
            <FcGoogle size={23} /> Google
          </button>
          <button
            onClick={authWithFacebook}
            className="py-3 px-8 border rounded-lg flex items-center gap-2 hover:bg-gray-200"
          >
            <FaFacebook size={23} color="blue" /> Facebook
          </button>
        </div>
        <div className="flex gap-3 items-center my-3">
          <hr className=" w-20 h-0.5 bg-gray-500" />
          <span className="text-sm">or continue with email</span>
          <hr className=" w-20 h-0.5 bg-gray-500" />
        </div>
        <form onSubmit={handleSubmit} className="w-80">
          <div className="relative my-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <HiOutlineMail className="w-6 h-6 text-gray-500" />
            </div>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="relative my-4">
            <div className="absolute inset-y-0 left-0 flex items-center px-3.5 pointer-events-none">
              <HiOutlineLockClosed className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type={isPasswordVisible ? "text" : "password"}
              onChange={handleChange}
              name="password"
              className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 cursor-pointer"
            >
              {isPasswordVisible ? (
                <HiOutlineEyeOff className="w-6 h-6 text-gray-500" />
              ) : (
                <HiOutlineEye className="w-6 h-6 text-gray-500" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <Checkbox
              color="blue"
              label={<span className=" font-medium">Remember me</span>}
              containerProps={{ className: "-ml-2.5" }}
            />
            <span className="text-blue-600 font-medium">Forgot Password?</span>
          </div>
          <button
            type="submit"
            className="p-3 my-6 bg-blue-600 w-full rounded-md text-white"
          >
            Login
          </button>
          <div className="flex gap-2 text-sm font-medium justify-center">
            <span className="text-gray-700">Don&#39;t have an account?</span>
            <Link to="/signup" className="text-blue-600">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
