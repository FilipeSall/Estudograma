import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home.js";
import FrontEnd from '../frontEnd/FrontEnd.js';
import "./mainsection.css";


function MainSection() {

  return (
    <main className="main__section-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/front-end/*" element={<FrontEnd />} />
      </Routes>
    </main>
  );
}

export default MainSection;
