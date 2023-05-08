import React from "react";
import heroLogo from "../assets/heroLogo.png";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const CatIndex = ({ cats, id }) => {
  return (
    <>
      <body className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
        <div>
          <div>
            <div className="flex justify-center">
              <img className="h-50 w-50" src={logo} alt="company logo" />
            </div>
          </div>
        </div>
        <h1 className="font-display flex justify-center border-1 border-white">
          A dating website.
        </h1>
        <main className="flex justify-center gap-8 py-8 flex-wrap">
          {cats?.map(({ cat, index, name, image, enjoys, age, id }) => {
            return (
              <div
                className="backdrop w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-lg flex-shrink-0"
                key={id}
              >
                <div className="aspect-w-3 aspect-h-4 mb-3">
                  <img
                    src={image}
                    alt="image3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full mb-3 pb-3 border-b border-1 border-white">
                  <h3 className="text-xl font-semibold text-shadow">
                    {name} <br /> Age: {age}
                  </h3>
                </div>
                <div className="mb-3 tracking-wide text-base text-shadow">
                  {enjoys}
                </div>
                <NavLink to={`/catshow/${id}`}>
                  <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    View Profile
                  </button>
                </NavLink>
              </div>
            );
          })}
        </main>
      </body>
    </>
  );
};

export default CatIndex;
