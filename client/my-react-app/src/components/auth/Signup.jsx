import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler =async (e) => {
    e.preventDefault();
    document.getElementById("signup_modal").close();
    
  try {
    const userInfo={
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    }
    const res = await axios.post("http://localhost:4000/api/v1/signup",userInfo );
    
    // console.log("Signup success:", res.data);
    if(res.data){
      toast.success(res.data.message)
      navigate("/");
    }
  } catch (err) {
    console.error("Error signing up with Axios:", err);
    toast.error("User already registred")
  }
};
    

  
  return (
    <div className="flex items-center justify-center  bg-gradient-to-br from-green-100 to-blue-200 dark:from-gray-900 dark:to-gray-800">
      {/* Modal */}
      <dialog id="signup_modal" className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8">
          {/* Close Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            Sign Up
          </h1>

          {/* Form */}
          <form onSubmit={onSubmitHandler} className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={onChangeHandler}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={onChangeHandler}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            {/* Create Password */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Create Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={onChangeHandler}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-9 cursor-pointer text-gray-500 dark:text-gray-300"
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </span>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Modal Backdrop */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

  
    </div>
  );
};

export default Signup;
