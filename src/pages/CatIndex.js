import React from "react";
import heroLogo from "../assets/heroLogo.png";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import { NavLink } from "react-router-dom";

const CatIndex = ({ cats, id }) => {
  return (
    <>
    <h1>Cat Index</h1>
      <div>
        <div>
          <div>
            <p className=" "></p>
            <div className="flex justify-center  ">
              <img src={heroLogo} alt="company logo" />
            </div>
          </div>
        </div>
        <h1 className="font-display flex justify-center">A dating website.</h1>
        <main className="flex flex-wrap justify-center gap-8 py-8">
          {cats?.map(({ cat, index, name, image, enjoys, age, id }) => {
            return (
              <div
                key={id}
                className="
          group
          bg-gradient-to-tr from-purple-600 to-orange-400 text-white overflow-hidden rounded-2xl shadow
          hover:shadow-md
          transition
          w-64
        "
              >
                <figure className="h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={name}
                  />
                </figure>
                <div className="p-4">
                  <h3 className="text-xl font-bold">
                    {name} Age:{age}
                  </h3>
                  <p className="font-serif">{enjoys}</p>
                </div>
                <footer className="flex gap-2 px-4 pb-4 justify-between">
                  <button className="text-blue-400 hover:text-red-400">
                    <i className="fa-solid fa-heart"></i>
                  </button>
                  <button className="text-blue-400 hover:text-red-400">
                    <i className="fa-solid fa-comment"></i>
                  </button>
                  <NavLink
                    id="button1"
                    className="self-end"
                    to={`/catshow/${id}`}
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    <button>Catch Me</button>
                  </NavLink>
                </footer>
              </div>
            );
          })}
        </main>
      </div>
      <div>
       
      </div>
    </>
  );
};

export default CatIndex;
