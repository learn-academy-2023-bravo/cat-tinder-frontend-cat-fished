import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CatIndex from "../src/pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import CatEdit from "./pages/CatEdit";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CatMobile from "./pages/CatMobile";
import { useEffect } from "react";


const App = () => {
  const [cats, setCats] = useState([]);
  
  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => {
        setCats(payload)
      })
      .catch((error) => console.log(error))
  }

  const createCat = (newCat) => {
  };
  const updateCat = (cat, id) => {
    console.log('cat:' ,cat )
    console.log('id:' ,id)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat} />} />
        <Route path="/mobile" element={<CatMobile cats={cats} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
