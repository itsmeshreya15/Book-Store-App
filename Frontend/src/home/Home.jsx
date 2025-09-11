import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Cards from "../components/Cards";   // ✅ add this
import data from "../data/list.json";      // ✅ add this

function Home() {
  return (
    <div>
      <NavBar />
      <Banner />

      {/* ✅ Cards Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {data.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>

      <Freebook />
      <Footer />
    </div>
  );
}

export default Home;
