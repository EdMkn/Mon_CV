import React from "react";

const Header = ({ currentSection, onSelect, toggleDarkMode }) => {
  const sections = ["A propos", "Experiences", "Projets Personnels","Educations", "Competences"];

  return (
    <nav className="bg-primary text-white p-4 flex flex-wrap items-center justify-between">
      <div className="flex gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onSelect(section)}
            className={`hover:underline ${
              currentSection === section
                ? "font-bold text-yellow-300"
                : "text-blue-100"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {toggleDarkMode? "":""}
      {/*<button
        onClick={toggleDarkMode}
        hidden
        className="ml-auto text-sm px-3 py-1 border rounded hover:bg-blue-700"
      >
        🌙 Toggle Dark Mode
      </button> */}
    </nav>
  );
};

export default Header;
