import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams();
  const selectedCat = cats.find((cat) => cat.id === +id);
  console.log("id: ", id);

  //==================================================================================
  //very cool
  if (!selectedCat) {
    return <div>Loading...</div>;
  }
  //===================================================================================

  return (
    <div className="h-screen bg-gradient-to-br from-gray-600 to-gray-900 flex justify-center items-center">
      <div className="backdrop w-full md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white bg-opacity-10 rounded p-6 text-white border border-white shadow-lg">
        <div className="aspect-w-3 aspect-h-4 mb-6">
          <img
            src={selectedCat.image}
            alt="image3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mb-6 pb-3 border-b border-1 border-white">
          <h3 className="text-2xl font-bold text-shadow mb-2">
            {selectedCat.name} <br /> Age: {selectedCat.age}
          </h3>
          <p className="text-base text-shadow">{selectedCat.enjoys}</p>
        </div>
        <div className="flex justify-center">
          <NavLink
            to={`/catedit/${selectedCat.id}`}
            className="mx-2"
          >
            <button className="backdrop bg-white bg-opacity-0 border border-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
              Edit Profile
            </button>
          </NavLink>
          <NavLink
            to="/"
            className="mx-2"
          >
            <button className="backdrop bg-white bg-opacity-0 border border-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg" onClick={() => deleteCat(selectedCat.id)} name="destroyer">
              Delete Profile
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CatShow;
