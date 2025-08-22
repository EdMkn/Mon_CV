import React, { useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";
import cvDataFr from "@data/cvData.fr";
import cvDataEn from "@data/cvData.en";
import sectionsFr from "@data/sections.fr";
import sectionsEn from "@data/sections.en";

const About = () => {
  const { language } = useLanguage();
  const cvData = useMemo(() => (language === "en" ? cvDataEn : cvDataFr), [language]);
  const sections = useMemo(() => (language === "en" ? sectionsEn : sectionsFr), [language]);
  
  return (
    <div className="space-y-12 bg-gradient-to-br from-white/90 to-gray-50/90 rounded-xl shadow-xl p-10 border border-gray-100">
      {/* Header Section with Profile */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
        <div className="relative">
          <img
            src={cvData.image}
            alt="Photo de profil de Manyim MA MAKON (Edouard)"
            className="w-36 h-36 rounded-full object-cover shadow-2xl border-4 border-blue-500 transition-transform hover:scale-105"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
        </div>
        
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
            {cvData.name}
          </h1>
          <h2 className="text-xl text-gray-600 font-medium mb-4 leading-relaxed">
            {cvData.title}
          </h2>
          
          {/* Summary Section */}
          <div className="max-w-3xl space-y-4 text-gray-700">
            {cvData.summary.map((line, i) => (
              <p key={i} className="text-lg leading-relaxed font-light">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white/60 rounded-lg p-6 shadow-inner border border-gray-200 mt-16">
                 <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{sections.contactInformation}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Email</p>
              <a href={`mailto:${cvData.contact.email}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                {cvData.contact.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Phone</p>
              <a href={`tel:${cvData.contact.phone}`} className="text-green-600 hover:text-green-800 font-semibold">
                {cvData.contact.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Location</p>
              <p className="text-purple-600 font-semibold">{cvData.contact.location}</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">GitHub</p>
              <a 
                href={cvData.contact.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-800 hover:text-gray-600 font-semibold flex items-center space-x-1"
              >
                <span>View Profile</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
