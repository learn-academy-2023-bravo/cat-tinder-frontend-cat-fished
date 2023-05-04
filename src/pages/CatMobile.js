//save for later
import React from "react";

const CatMobile = ({ cats }) => {
  return (
    <>
      {cats.map(({ cat, age, name, image, index, id, enjoys }) => {
        return (
          //enter card here
          <h1>{name}</h1>
        );
      })}
    </>
  );
};

export default CatMobile;
