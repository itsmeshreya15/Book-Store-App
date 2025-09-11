import React, { useState } from "react";
import { Link } from "react-router-dom"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = () => {
    console.log("[Login] submit clicked:", { email, password });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
        
          <button
  type="button"
  onClick={() => document.getElementById("my_modal_3").close()}
  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
>
  ✕
</button>

        
          <h3 className="font-bold text-lg">Login</h3>

         
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-b-md outline-none"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

         
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-b-md outline-none"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

         
          <div className="flex justify-around items-center mt-4">
           
            <button onClick={handleSubmit} className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>

         
            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
