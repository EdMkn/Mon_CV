import React from "react";
import cvData from "./cvData";

const Experience = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">
        Experience
      </h2>
      {cvData.experience.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
          <p className="text-sm text-gray-500">{job.company}</p>
          <p className="text-sm italic text-gray-400 mb-2">{job.period}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {job.description.map((line, i) => {
              if (line.trim().startsWith("-")) {
                return <li key={i} className="text-justify">{line.replace(/^- /, "")}</li>;
              } else {
                // Sinon, l'afficher comme un paragraphe
                return (
                  <p key={i} className="mt-2">
                    {line}
                  </p>
                );
              }
            })}
          </ul>
          <br/>
          <br/>
        </div>
      ))}
    </div>
  );
};

export default Experience;
