import React, {useMemo} from 'react'
import { useLanguage } from "../../context/LanguageContext";
import cvDataFr from "@data/cvData.fr";
import cvDataEn from "@data/cvData.en";
import sectionsFr from "@data/sections.fr";
import sectionsEn from "@data/sections.en";

const Education = () => {
  const { language } = useLanguage();
  const cvData = useMemo(() => (language === "en" ? cvDataEn : cvDataFr), [language]);
  const sections = useMemo(() => (language === "en" ? sectionsEn : sectionsFr), [language]);
  return (
    <div className="space-y-8 bg-white rounded-xl shadow-xl p-10 border border-gray-100">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 text-left mb-6">{sections.educationTitle}</h2>
      {cvData.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold text-lg text-gray-900 text-left">{edu.degree}</h4>
          <p className="text-sm text-gray-500 text-left">{edu.institution} | {edu.period}</p>
          <p className='text-lg text-gray-900 text-left'>{edu.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Education
