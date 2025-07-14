import React from 'react'
import cvData from "./cvData";

const Skills = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Skills</h2>
    <ul className="flex flex-wrap gap-3 text-sm">
      {cvData.skills.map((skill, index) => (
        <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
