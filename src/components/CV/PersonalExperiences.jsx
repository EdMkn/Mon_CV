import React, { useState } from "react";
import cvData from "./cvData";

const PersonalExperiences = () => {
  const [zoomedImg, setZoomedImg] = useState(null);
  return (
    <div className="space-y-8 bg-white/80 rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 text-left mb-6">
        Projets personnels et académiques
      </h2>
      <div className="flex flex-col">
        {cvData.personalProjects.map((job, index) => {
          return (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-extrabold text-gray-900 text-left mb-1">
                {job.name}
              </h3>
              <p className="text-base font-medium text-gray-500 text-left mb-1">
                {job.link}
              </p>
              <p className="text-sm italic text-gray-400 mb-2 text-left">
                {job.duration}
              </p>
              {job.images && job.images.length > 0 && (
                <div className="flex gap-4 overflow-x-auto mb-4">
                  {job.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Screenshot ${i + 1} for ${job.name}`}
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

export default PersonalExperiences;
