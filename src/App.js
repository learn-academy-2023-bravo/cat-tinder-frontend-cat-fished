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

const App = () => {
  const [cats, setCats] = useState(mockCats);
  console.log(cats);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
