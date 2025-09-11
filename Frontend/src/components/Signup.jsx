import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  // Signup form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignupSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to sign up");
      }

      const result = await res.json(); // ✅ parse JSON
      console.log("Signup Success:", result);
      alert("Signup successful!");
    } catch (err) {
      console.error("Signup Error:", err);
      alert("Signup failed. Please try again.");
    }
  };

  // Login form
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm();

  const onLoginSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const result = await res.json(); // ✅ parse JSON
      console.log("Login Success:", result);
      alert("Login successful!");
    } catch (err) {
      console.error("Login Error:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Signup Card */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-96 relative">
        <form onSubmit={handleSubmit(onSignupSubmit)}>
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg text-center text-gray-900 dark:text-white">
            Sign Up
          </h3>

          {/* Full Name */}
          <div className="mt-4 space-y-2">
            <span>Full Name</span>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
            >
              Sign Up
            </button>

            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Have an account?{" "}
              <button
                type="button"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="underline text-blue-500 cursor-pointer"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>

      {/* Login Modal */}
      <dialog id="my_modal_3" className="modal">
        <form onSubmit={handleLoginSubmit(onLoginSubmit)} className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <input
              type="email"
              {...loginRegister("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
            {loginErrors.email && (
              <p className="text-red-500 text-sm">
                {loginErrors.email.message}
              </p>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <span>Password</span>
            <input
              type="password"
              {...loginRegister("password", {
                required: "Password is required",
              })}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
            {loginErrors.password && (
              <p className="text-red-500 text-sm">
                {loginErrors.password.message}
              </p>
            )}
          </div>

          <div className="modal-action">
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn bg-pink-500 text-white hover:bg-pink-700"
            >
              Login
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Signup;
