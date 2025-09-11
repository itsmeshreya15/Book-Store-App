import React from "react";

function Cards({ item }) {
  return (
    <div className="my-4 p-3">
      <div className="card w-80 bg-gray-900 shadow-xl rounded-lg overflow-hidden hover:scale-105 duration-200 dark:bg-slate-900 dark:text">
        <figure className="h-56 flex items-center justify-center bg-gray-100 overflow-hidden">
          <img
            src={item.image || "/placeholder.png"}
            alt={item.title || item.name || "Course image"}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name || "Untitled"}
            {item.price === 0 && (
              <div className="badge badge-secondary ml-2">FREE</div>
            )}
          </h2>
          <p>{item.title || "No description available."}</p>
          <div className="card-actions justify-between">
            {item.price !== 0 && (
              <div className="badge badge-outline">${item.price}</div>
            )}
            <button className="cursor-pointer px-2 py-1 rounded-lg hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
