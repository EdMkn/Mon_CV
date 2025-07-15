// src/components/CV/CV.jsx
import { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import PersonalExperiences from "./PersonalExperiences";
import Education from "./Education";
import Skills from "./Skills";

const CV = () => {
  const [currentSection, setCurrentSection] = useState("A propos");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const renderSection = () => {
    switch (currentSection) {
      case "Experiences":
        return <Experience />;
      case "Projets Personnels":
        return <PersonalExperiences />;
      case "Educations":
        return <Education />;
      case "Competences":
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header 
        currentSection={currentSection} 
        onSelect={setCurrentSection}
        toggleDarkMode={toggleDarkMode} />
      <div className="transition-opacity duration-500 ease-in-out">{renderSection()}</div>
    </div>
  );
};

export default CV;
