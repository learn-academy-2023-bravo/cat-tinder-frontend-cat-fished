import React from "react";
import errorPic from "../assets/errorPic.png";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col p-10">
      <img src={errorPic} alt="404 not found" />
    </div>
  );
};

export default NotFound;
