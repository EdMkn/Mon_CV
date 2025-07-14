import React from 'react'
import cvData from './cvData'

const Education = () => {
  return (
    <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Education</h2>
    {cvData.education.map((edu, index) => (
      <div key={index} className="mb-2">
        <h4 className="font-bold">{edu.degree}</h4>
        <p className="text-sm text-gray-500">{edu.institution} | {edu.period}</p>
      </div>
    ))}
  </div>
  )
}

export default Education
