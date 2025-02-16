import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import IoBele from "./WelcomeScreen/IoannisBelesis";
import Contents from "./WelcomeScreen/Contents";
import AboutMe from "./TheContents/About";
import Contact from "./TheContents/Contact";
import CuisinesAndTechniques from "./TheContents/CuisineAndTechniques";
import WorkExperience from "./TheContents/WorkExp";
import Navbar from "./Navigation/Navbar";

function App() {
  return (
    <div className="App">
      <div className="IoBele">
        <IoBele />
      </div>
      <div>
        <Contents />
      </div>
    </div>
  );
}

export default App;