

import React from 'react';
// import { Briefcase } from 'lucide-react'; // Icon library (lucide-react)

const Experience = () => {
  const experiences = [
    {
      title: "Teacher Assistant (TA)",
      company: "American International University – Bangladesh (AIUB)",
      duration: "May 1, 2021 - September 1, 2021",
    },
    {
      title: "Intern (React, Frontend Developer)",
      company: "Kodeeo Limited",
      duration: "September 5, 2023 - December 30, 2023",
    },
    {
      title: "Trainee (Frontend Developer)",
      company: "ATI Limited",
      duration: "May 4, 2024 - December 31, 2024",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 py-12  "
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 text-center my-10">
        Experience
      </h2>

      <div className="grid gap-6 w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500 p-6 flex items-start gap-4"
          >
           
            <div>
              <h3 className="text-xl font-semibold ">{exp.title}</h3>
              <p >{exp.company}</p>
              <p className=" mt-1">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
