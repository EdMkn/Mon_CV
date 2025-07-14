import React from 'react'
import cvData from './cvData'

const Experience = () => {
  return (
    <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Experience</h2>
    {cvData.experience.map((job, index) => (
      <div key={index} className="mb-4">
        <h4 className="font-bold">{job.role} @ {job.company}</h4>
        <p className="text-sm text-gray-500">{job.period}</p>
        <p className="text-sm">{job.description}</p>
      </div>
    ))}
  </div>
  )
}

export default Experience
