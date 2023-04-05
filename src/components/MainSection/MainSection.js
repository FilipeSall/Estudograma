import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home.js";
import FrontEnd from '../frontEnd/FrontEnd.js';
import "./mainsection.css";
import BackEnd from "../backEnd/BackEnd.js";
import UiUxDesing from "../Desing/UiUxDesing.js";


function MainSection() {

  return (
    <main className="main__section-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/front-end/*" element={<FrontEnd />} />
        <Route path="/back-end/*" element={<BackEnd />} />
        <Route path="/ui-ux/*" element={<UiUxDesing />} />
      </Routes>
    </main>
  );
}

export default MainSection;
