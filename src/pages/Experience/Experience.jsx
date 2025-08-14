// import React from 'react';

// const Experience = () => {
//     return (
//         <div>
//             <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-12">

//                 <div>Experience</div>
//                 <div>
//                     <div>
//                         <p>Teacher Assistant (TA)</p>
//                         <p>Institution: American International University – Bangladesh (AIUB)</p>
//                         <p>Duration: May 1, 2021- September 1, 2021</p>
//                     </div>

//                     <div>
//                         <p>Intern(React,Frontend Developer)</p>
//                         <p>Company: Kodeeo Limited</p>
//                         <p>5th September to 30th December 2023</p>
//                     </div>

//                     <div>
//                         <p>Trainee(Frontend Developer)</p>
//                         <p>Company: ATI Limited</p>
//                         <p>4th May to 31th December 2024</p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Experience;

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
      className="min-h-screen flex flex-col items-center justify-center  px-6 py-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold  mb-10">
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
