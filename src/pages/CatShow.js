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
    <>
      <main className="grid justify-center items-center min-h-screen p-8">
        <div
          className="
      group
      inline-block
      pb-4
      bg-gradient-to-tr
      from-purple-600
      to-orange-400
      text-white
      overflow-hidden
      rounded-2xl
      shadow
      hover:shadow-md
      transition
    "
        >
          <figure class="max-h-100 aspect-square overflow-hidden">
            <img
              className="w-full h-full object-cover transition group-hover:scale-125"
              src={selectedCat.image}
            />
          </figure>
          <div className="p-4">
            <h3 className="text-xl font-bold">
              {selectedCat.name} Age:{selectedCat.age}
            </h3>
            <p className="font-serif">{selectedCat.enjoys}</p>
          </div>
          <footer className="flex gap-2 px-4">
            <button className="text-blue-400 hover:text-red-400">
              <i className="fa-solid fa-heart"></i>
            </button>
            <button className="text-blue-400 hover:text-red-400">
              <i className="fa-solid fa-comment"></i>
            </button>
          </footer>
        </div>
        {/* Style button for edit */}
        <NavLink
          color="primary"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
          to={`/catedit/${selectedCat.id}`}
          className="nav-link"
        >
          Edit Profile
        </NavLink>
        <NavLink
          color="primary"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
          to="/"
          className="nav-link"
        >
          <button onClick={() => deleteCat(selectedCat.id)} name="destroyer">
            Delete Profile
          </button>
        </NavLink>
      </main>
    </>
  );
};

export default CatShow;
