import React, {useState, useMemo} from "react";
import { useLanguage } from "../../context/LanguageContext";
import cvDataFr from "@data/cvData.fr";
import cvDataEn from "@data/cvData.en";

const LANGUAGES = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  // Ajouter plus de langues si nécessaire
];

const Header = ({ currentSection, onSelect, toggleDarkMode }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const sections = ["about", "experiences", "projects","education", "skills"];
  const sectionsLang = (useMemo(() => (language === "en" ? cvDataEn : cvDataFr), [language])).sections;

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
            {sectionsLang[section]}
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
      
      {/* Language Dropdown */}
      <div className="relative ml-4">
        <button
          onClick={() => setOpen((o) => !o)}
          className="px-3 py-1 border rounded bg-white text-primary font-semibold flex items-center gap-2"
        >
          {LANGUAGES.find((l) => l.code === language)?.label || "Langue"}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 
                  text-blue-700 
                  hover:bg-primary hover:text-cyan-400 
                  ${language === lang.code ? "font-bold bg-blue-700 text-cyan-400" : ""}
                `}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
