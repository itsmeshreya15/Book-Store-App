import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Login from "../components/Login"; 
function NavBar() {
const [theme, setTheme] = useState(
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
);
const element=document.documentElement;
useEffect(() => {
  if (theme === "dark") {
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <div
     className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky
          ? "bg-base-200 shadow-md ease-in-out"
          : "bg-transparent"
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navItems}
              <li><a className="btn">Button</a></li>
            </ul>
          </div>
       <a className="text-2xl font-bold cursor-pointer text-black dark:text-white">
  Book Store
</a>

        </div>

        {/* Desktop menu */}
        <div className="navbar-end hidden lg:flex pr-4">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Type here"
            className="px-3 py-1 border rounded grow outline-none mx-2"
          />

          {/* Theme toggle */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="synthwave" />
          {/* Sun icon */}
<svg className="swap-off h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={()=>setTheme(theme==="light"?"dark":"light")}>
  <path d="M12 4.354a1 1 0 011 1V7a1 1 0 11-2 0V5.354a1 1 0 011-1zm0 12.292a1 1 0 011 1v1.646a1 1 0 11-2 0v-1.646a1 1 0 011-1zm7.071-5.071a1 1 0 011 1h1.646a1 1 0 110 2h-1.646a1 1 0 11-1-1 1 1 0 011-1zM4.354 12a1 1 0 011 1H2.708a1 1 0 110-2h2.646a1 1 0 011 1zm10.607-6.364a1 1 0 011.414 1.414l-1.164 1.164a1 1 0 01-1.414-1.414l1.164-1.164zM6.343 17.657a1 1 0 011.414 0l1.164-1.164a1 1 0 10-1.414-1.414L6.343 17.657zm10.607 0l-1.164-1.164a1 1 0 10-1.414 1.414l1.164 1.164a1 1 0 101.414-1.414zM6.343 6.343L5.179 5.179a1 1 0 10-1.414 1.414l1.164 1.164a1 1 0 101.414-1.414zM12 8a4 4 0 100 8 4 4 0 000-8z"/>
</svg>

{/* Moon icon */}
<svg className="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={()=>setTheme(theme==="dark"?"light":"dark")}>
  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
</svg>


          </label>

          {/* Login button */}
          <a className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
          onClick={()=>document.getElementById("my_modal_3").showModal()}>
            Login
          </a>
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
