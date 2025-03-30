import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function JobDetail() {
  const { id } = useParams();
  // In a real implementation, you would fetch the job details based on the id parameter
  // This is mock data for demonstration
  const jobDetail = {
    title: "Technical Product Manager",
    description: [
      "Demonstrated ability to work effectively with engineering teams, translating complex technical concepts into actionable plans.",
      "Solid understanding of backend systems, including microservices, databases, messaging systems, and modern platform architectures",
      "Strong communication and stakeholder management skills, with the ability to influence at all levels, including senior leadership",
      "Experience managing technical backlogs and working closely with cross-functional teams",
      "Familiarity with Agile methodologies, particularly Scrum and Kanban",
      "Proven track record of successfully delivering technical products in fast-paced environments"
    ],
    responsibilities: [
      "Collaborate closely with business and engineering stakeholders to identify pain points and opportunities for infrastructure and tooling improvements",
      "Facilitate internal discovery and proof of concepts to validate new ideas and solutions",
      "Lead the end-to-end product development process, from gathering technical requirements to driving execution with Agile teams",
      "Manage and prioritize backlogs to ensure alignment with business and engineering objectives",
      "Continuously improve team methodologies to accelerate processes and enhance collaboration",
      "Translate business needs and technical challenges into detailed user stories, acceptance criteria, and product artifacts",
      "Drive cross-team coordination and ensure the timely delivery of features with high quality standards",
      "Conduct market and technical research to guide product decisions and strategy",
      "Serve as the product expert, understanding the technical architecture, business logic, and integration points for your areas of responsibility"
    ],
    qualifications: [
      "5+ years of product management experience in a technical environment",
      "Strong background in computer science, engineering, business, or related fields"
    ],
    jobBenefits: [
      "Base Salary Range: $90,000–$150,000 CAD"
    ],
    hiringOrg: "FeiFei Ltd",
    employmentType: "Full-time",
    startDate: "Summer 2025",
    duration: "Permanent",
    industry: "Technology",
    location: "Canada",
    workingHours: "Flexible working hours full time",
    datePosted: "December 31, 2024"
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main content - 2/3 width on desktop */}
        <div className="md:col-span-2">
          <h1 className="text-purple-800 text-2xl font-medium mb-4">{jobDetail.title}</h1>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Description</h2>
            <ul className="list-disc pl-5 space-y-2">
              {jobDetail.description.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              {jobDetail.responsibilities.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Qualifications</h2>
            <ul className="list-disc pl-5 space-y-2">
              {jobDetail.qualifications.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Job Benefits</h2>
            <ul className="list-disc pl-5 space-y-2">
              {jobDetail.jobBenefits.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Contacts</h2>
            <p className="text-gray-700">
              To apply, please complete the form below and include links to your portfolio in the comment box.
            </p>
            <p className="text-gray-700 mt-2">
              We look forward to hearing from you!
            </p>
          </div>
        </div>
        
        {/* Sidebar - 1/3 width on desktop */}
        <div className="bg-gray-50 p-6 rounded">
          <div className="mb-6">
            <h3 className="text-orange-600 font-medium mb-2">Hiring organization</h3>
            <div className="flex items-center">
              <div className="w-16 h-16 relative mr-2">
                {/* You can replace with your actual company logo */}
                <div className="w-full h-full bg-blue-200 flex items-center justify-center text-blue-600">
                  Logo
                </div>
              </div>
              <span>{jobDetail.hiringOrg}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-orange-600 font-medium mb-1">Employment Type</h3>
              <p className="text-blue-600 font-medium">{jobDetail.employmentType}</p>
            </div>
            
            <div>
              <h3 className="text-orange-600 font-medium mb-1">Beginning of employment</h3>
              <p>{jobDetail.startDate}</p>
            </div>
            
            <div>
              <h3 className="text-orange-600 font-medium mb-1">Duration of employment</h3>
              <p>{jobDetail.duration}</p>
            </div>
            
            <div>
              <h3 className="text-orange-600 font-medium mb-1">Industry</h3>
              <p>{jobDetail.industry}</p>
            </div>
            
            <div>
              <h3 className="text-orange-600 font-medium mb-1">Job Location</h3>
              <p>{jobDetail.location}</p>
            </div>
            
            <div>
              <h3 className="text-orange-600 font-medium mb-1">Working Hours</h3>
              <p>{jobDetail.workingHours}</p>
            </div>
            
            <div>
              <h3 className="text-orange-600 font-medium mb-1">Date posted</h3>
              <p>{jobDetail.datePosted}</p>
            </div>
            
            <div>
              <h3 className="text-orange-600 font-medium mb-1">PDF Export</h3>
              <p className="text-blue-600 underline cursor-pointer">Export as PDF</p>
            </div>
            
            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded mt-4">
              APPLY NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}