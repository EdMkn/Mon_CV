import React from 'react'
import cvData from './cvData'

const Education = () => {
  return (
    <div className="space-y-8 bg-white/80 rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 text-left mb-6">Education</h2>
      {cvData.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold text-lg text-gray-900 text-left">{edu.degree}</h4>
          <p className="text-sm text-gray-500 text-left">{edu.institution} | {edu.period}</p>
          <p className='text-lg text-gray-900 text-left'>{edu.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Education
