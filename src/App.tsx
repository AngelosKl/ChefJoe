import React, { useState } from "react";
import Home from "./WelcomeScreen/Home";
import AboutMe from "./TheContents/About";
import Contact from "./TheContents/Contact";
import CuisinesAndTechniques from "./TheContents/CuisineAndTechniques";
import WorkExperience from "./TheContents/WorkExp";
import "./App.css";


type View = "home" | "about" | "workExp" | "cuisineAndTechniques" | "contact";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("home");

  return (
    <div>
      {currentView === "home" && <Home onSectionChange={setCurrentView} />}
      {currentView === "about" && <AboutMe onSectionChange={setCurrentView} />}
      {currentView === "workExp" && <WorkExperience onSectionChange={setCurrentView} />}
      {currentView === "cuisineAndTechniques" && (
        <CuisinesAndTechniques onSectionChange={setCurrentView} />
      )}
      {currentView === "contact" && <Contact onSectionChange={setCurrentView} />}
    </div>
  );
};

export default App;
