import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home.js";
import "./mainsection.css";

function MainSection() {
  return (
    <main className="main__section-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default MainSection;
