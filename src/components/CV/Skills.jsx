import React from 'react'
import cvData from "./cvData";

const Skills = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Skills</h2>
    <ul className="flex flex-wrap gap-3 text-sm">
      {cvData.skills.map((skill, index) => (
        <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
