import React from "react";
import cvData from "./cvData";

const About = () => {
  return (
    <>
      <div className="space-y-8 bg-white/80 rounded-lg shadow p-8 ">
        <div className="mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={cvData.image}
            alt="Photo de profil de Manyim MA MAKON (Edouard)"
            className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-primary"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1 text-left">{cvData.name}</h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-400 font-medium text-left">{cvData.title}</h2>
          </div>
        </div>
        <div className="max-w-2xl text-left text-gray-800 space-y-3">
          {cvData.summary.map((line, i) => (
            <p key={i} className="mt-0 leading-relaxed">{line}</p>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-6">
          <p className="text-left"><strong>Email:</strong> {cvData.contact.email}</p>
          <p className="text-left"><strong>Phone:</strong> {cvData.contact.phone}</p>
          <p className="text-left"><strong>Location:</strong> {cvData.contact.location}</p>
          <p className="text-left"><strong>GitHub:</strong> <a href={cvData.contact.github} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{cvData.contact.github}</a></p>
        </div>
      </div>
    </>
  );
};

export default About;
