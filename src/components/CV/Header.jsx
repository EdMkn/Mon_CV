import React from 'react'

const Header = ({currentSection, onSelect}) => {
    const sections = ["A propos", "Experiences", "Educations", "Competences"];

  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6 justify-center">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onSelect(section)}
          className={`hover:underline ${
            currentSection === section ? "font-bold text-yellow-300" : ""
          }`}
        >
          {section}
        </button>
      ))}
    </nav>
  )
}

export default Header
