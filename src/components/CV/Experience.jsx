import React, { useState, useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";
import cvDataFr from "@data/cvData.fr";
import cvDataEn from "@data/cvData.en";


const Experience = () => {
  const [zoomedImg, setZoomedImg] = useState(null);
  const [keyword, setKeyword] = useState("");

  const { language } = useLanguage();
  const cvData = useMemo(() => (language === "en" ? cvDataEn : cvDataFr), [language]);
  
  const filteredExperiences = keyword.trim()
    ? cvData.experience.filter(exp =>
        exp.keywords && exp.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
      )
    : cvData.experience;
  return (
    <div className="space-y-8 bg-white/80 rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 text-left mb-6">
        {cvData.sections.experiencesTitle}
      </h2>
      <input
        type="text"
        placeholder={cvData.sections.experiencesfilter}
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        className="mb-6 p-2 border rounded w-full"
      />
      <div className={keyword ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "flex flex-col"}>
        {filteredExperiences.map((job, index) => {
          return (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-extrabold text-gray-900 text-left mb-1">
                {job.role}
              </h3>
              <p className="text-base font-medium text-gray-500 text-left mb-1">
                {job.company}
              </p>
              <p className="text-sm italic text-gray-400 mb-2 text-left">
                {job.period}
              </p>
              {job.images && job.images.length > 0 && (
                <div className={keyword ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "flex gap-4 overflow-x-auto mb-4"}>
                  {job.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Photo ${i + 1} pour ${job.role} à ${job.company}`}
                      className="w-64 h-40 object-cover rounded-lg shadow border"
                      onClick={() => setZoomedImg(`${img}`)}
                    />
                  ))}
                </div>
              )}
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.description.map((line, i) => {
                  if (line.trim().startsWith("-")) {
                    return (
                      <li key={i} className="text-left leading-relaxed">
                        {line.replace(/^- /, "")}
                      </li>
                    );
                  } else
                    return (
                      <p key={i} className="mt-2 text-left leading-relaxed">
                        {line}
                      </p>
                    );
                })}
              </ul>
              {job.keywords && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.keywords.map((kw, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Zoomed image overlay */}
      {zoomedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setZoomedImg(null)}
        >
          <img
            src={zoomedImg}
            alt="Zoomed project"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setZoomedImg(null)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
