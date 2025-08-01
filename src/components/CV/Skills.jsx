import React, {useMemo} from "react";
import { useLanguage } from "../../context/LanguageContext";
import cvDataFr from "@data/cvData.fr";
import cvDataEn from "@data/cvData.en";
import sectionsFr from "@data/sections.fr";
import sectionsEn from "@data/sections.en";
const Skills = () => {
  const { language } = useLanguage();
  const cvData = useMemo(
    () => (language === "en" ? cvDataEn : cvDataFr),
    [language]
  );
  const sections = useMemo(() => (language === "en" ? sectionsEn : sectionsFr), [language]);
  return(
  <>
    <div className="space-y-8 bg-white/80 rounded-lg shadow p-8 ">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 text-left mb-6">
        {sections.skillsTitle}
      </h2>
      <ul className="flex flex-wrap gap-3 text-sm">
        {cvData.skills.map((skill, index) => {
          const isCertification = skill.type === "certification";
          const hasLink = skill.link;
          
          const baseClasses = isCertification 
            ? "bg-green-100 text-green-800 border-green-300 hover:bg-green-200 hover:border-green-400"
            : "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 hover:border-blue-300";
          
          const commonClasses = `px-4 py-1 rounded-full font-medium shadow-sm border transition-colors duration-200 ${baseClasses}`;
          
          const StarIcon = () => (
            <svg 
              className="w-4 h-4 ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          );
          
          const ExternalLinkIcon = () => (
            <svg 
              className="w-3 h-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          );
          
          const Element = hasLink ? 'a' : 'span';
          const elementProps = hasLink ? {
            href: skill.link,
            target: "_blank",
            rel: "noopener noreferrer"
          } : {};
          
          return (
            <li key={index}>
              <Element
                {...elementProps}
                className={`${commonClasses} inline-flex items-center gap-1`}
              >
                {skill.name}
                {isCertification && <StarIcon />}
                {hasLink && <ExternalLinkIcon />}
              </Element>
            </li>
          );
        })}
      </ul>
    </div>
  </>
  );
};

export default Skills;
