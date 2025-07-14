import React from "react";
import cvData from "./cvData";

const About = () => {
  return (
    <div className="space-y-6 ">
      <div>
        <h1 className="text-3xl font-bold">{cvData.name}</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-300">
          {cvData.title}
        </h2>
      </div>
      
      <div className="max-w-2xl text-justify text-gray-800">{cvData.summary.map((line,i) => (
        <p key={i} className="mt-4">
        {line}
      </p>
      ))}</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <p>
          <strong>Email:</strong> {cvData.contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {cvData.contact.phone}
        </p>
        <p>
          <strong>Location:</strong> {cvData.contact.location}
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href={cvData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            {cvData.contact.github}
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
