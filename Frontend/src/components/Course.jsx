import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import list from "../data/list.json"; 
import Cards from "../components/Cards";
import {Link} from "react-router-dom";

function Course() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar at the top */}
      <NavBar />

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl text-white">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse error,
            dignissimos earum provident, porro, possimus eum quisquam autem non quasi?
            Nihil, quia? Sint tempora quibusdam voluptates tempore beatae id!
          </p>
         <Link to="/">
          <button
            onClick={() => navigate("/courses")} 
            className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
          >
            Back
          </button>
         </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {list.map((item, i) => (
            <Cards key={i} item={item} />
          ))}
        </div>

   
      </div>
    </>
  );
}

export default Course;
