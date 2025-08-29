import React, { useState, useMemo, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import cvDataFr from "@data/cvData.fr";
import cvDataEn from "@data/cvData.en";
import sectionsFr from "@data/sections.fr";
import sectionsEn from "@data/sections.en";

const PersonalExperiences = () => {
  const [zoomedImg, setZoomedImg] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentJobImages, setCurrentJobImages] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { language } = useLanguage();
  const cvData = useMemo(() => (language === "en" ? cvDataEn : cvDataFr), [language]);
  const sections = useMemo(() => (language === "en" ? sectionsEn : sectionsFr), [language]);
  const filteredProjects = keyword.trim()
    ? cvData.personalProjects.filter(project =>
        project.keywords && project.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
      )
    : cvData.personalProjects;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!zoomedImg || currentJobImages.length <= 1) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentJobImages.length - 1;
        setCurrentImageIndex(newIndex);
        setZoomedImg(currentJobImages[newIndex]);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const newIndex = currentImageIndex < currentJobImages.length - 1 ? currentImageIndex + 1 : 0;
        setCurrentImageIndex(newIndex);
        setZoomedImg(currentJobImages[newIndex]);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setZoomedImg(null);
        setCurrentJobImages([]);
        setCurrentImageIndex(0);
      }
    };

    if (zoomedImg) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [zoomedImg, currentImageIndex, currentJobImages]);

  const handleImageClick = (img, jobImages) => {
    const imageIndex = jobImages.indexOf(img);
    setCurrentImageIndex(imageIndex);
    setCurrentJobImages(jobImages);
    setZoomedImg(img);
  };

  const handleCloseZoom = () => {
    setZoomedImg(null);
    setCurrentJobImages([]);
    setCurrentImageIndex(0);
  };

  return (
    <div className="space-y-8 bg-white/80 rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 text-left mb-6">
        {sections.projectsTitle}
      </h2>
      <input
        type="text"
        placeholder={sections.experiencesfilter}
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        className="mb-6 p-2 border rounded w-full"
      />
      <div className={keyword?"grid grid-cols-1 md:grid-cols-2 gap-6":"flex flex-col"}>
        {filteredProjects
        .sort((job1, job2) => job1.name.localeCompare(job2.name))
        .map((job, index) => {
          return (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-extrabold text-gray-900 text-left mb-1">
                {job.name}
              </h3>
              <p className="text-base font-medium text-gray-500 text-left mb-1">
                {job.link.map((url, i) => (
                  <div key={i}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline break-all"
                    >
                      {url}
                    </a>
                  </div>
                ))}
              </p>
              <p className="text-sm italic text-gray-400 mb-2 text-left">
                {job.duration}
              </p>
              {job.images && job.images.length > 0 && (
                <div className={keyword?"grid grid-cols-1 md:grid-cols-2 gap-6":"flex gap-4 overflow-x-auto mb-4"}>
                  {job.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Screenshot ${i + 1} for ${job.name}`}
                      className="w-64 h-40 object-cover rounded-lg shadow border cursor-pointer"
                      onClick={() => handleImageClick(img, job.images)}
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
          className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 cursor-zoom-out"
          onClick={handleCloseZoom}
        >
          {/* Left arrow - absolutely positioned to viewport */}
          {currentJobImages.length > 1 && (
            <button
              className="fixed left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-all duration-300 p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-xl border-2 border-white hover:scale-110 hover:shadow-2xl z-50"
              onClick={(e) => {
                e.stopPropagation();
                const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentJobImages.length - 1;
                setCurrentImageIndex(newIndex);
                setZoomedImg(currentJobImages[newIndex]);
              }}
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right arrow - absolutely positioned to viewport */}
          {currentJobImages.length > 1 && (
            <button
              className="fixed right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-all duration-300 p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-xl border-2 border-white hover:scale-110 hover:shadow-2xl z-50"
              onClick={(e) => {
                e.stopPropagation();
                const newIndex = currentImageIndex < currentJobImages.length - 1 ? currentImageIndex + 1 : 0;
                setCurrentImageIndex(newIndex);
                setZoomedImg(currentJobImages[newIndex]);
              }}
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div className="relative flex items-center justify-center max-w-full max-h-full">
            <img
              src={zoomedImg}
              alt="Zoomed project"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              onClick={e => e.stopPropagation()}
            />
            
            {/* Image counter */}
            {currentJobImages.length > 1 && (
              <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {currentJobImages.length}
              </div>
            )}
          </div>
          <button
            className="absolute top-4 right-4 text-yellow-300 hover:text-red-300 transition-all duration-200 p-3 rounded-full bg-red-600 hover:bg-red-700 shadow-lg border-2 border-white hover:scale-110"
            onClick={handleCloseZoom}
            aria-label="Close"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalExperiences;
