import React from "react";
import cvData from "./cvData";

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{cvData.name}</h1>
      <h2 className="text-xl text-gray-600">{cvData.title}</h2>
      <p className="mt-4">{cvData.summary}</p>
      <ul className="mt-4 text-sm text-gray-700 space-y-1">
        <li>Email: {cvData.contact.email}</li>
        <li>Phone: {cvData.contact.phone}</li>
        <li>Location: {cvData.contact.location}</li>
        <li>
          GitHub:{" "}
          <a
            href={cvData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            {cvData.contact.github}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
