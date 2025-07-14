import React from 'react'
import cvData from './cvData'

const Education = () => {
  return (
    <div className="space-y-6">
    <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Education</h2>
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
