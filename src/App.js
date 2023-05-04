import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CatIndex from "../src/pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import CatEdit from "./pages/CatEdit";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import mockCats from "./mockCats";
import { Routes, Route } from "react-router-dom";
import CatMobile from "./pages/CatMobile";

const App = () => {
  const [cats, setCats] = useState(mockCats);

  const createCat = (newCat) => {
    // console.log(newCat)
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="/mobile" element={<CatMobile cats={cats} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
