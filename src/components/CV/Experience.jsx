import React from 'react'
import cvData from './cvData'

const Experience = () => {
  return (
    <div className="space-y-4">
    <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Experience</h2>
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
