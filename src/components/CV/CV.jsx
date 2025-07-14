// src/components/CV/CV.jsx
import { useState } from "react";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

const CV = () => {
  const [currentSection, setCurrentSection] = useState("About");
  const renderSection = () => {
    switch (currentSection) {
      case "Experiences":
        return <Experience />;
      case "Educations":
        return <Education />;
      case "Competences":
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header currentSection={currentSection} onSelect={setCurrentSection} />
      <div className="max-w-3xl mx-auto">{renderSection()}</div>
    </div>
  );
};

export default CV;
