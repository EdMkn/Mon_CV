import React, {useMemo} from "react";
import { useLanguage } from "../../context/LanguageContext";
import cvDataFr from "@data/cvData.fr";
import cvDataEn from "@data/cvData.en";

const Skills = () => {
  const { language } = useLanguage();
  const cvData = useMemo(
    () => (language === "en" ? cvDataEn : cvDataFr),
    [language]
  );
  return(
  <>
    <div className="space-y-8 bg-white/80 rounded-lg shadow p-8 ">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 text-left mb-6">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-3 text-sm">
        {cvData.skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-medium shadow-sm border border-blue-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

export default Skills;
