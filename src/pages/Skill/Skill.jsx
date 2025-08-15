// import React from 'react';

// const Skill = () => {
//     return (
//         <section id="skill" className="min-h-screen flex items-center justify-center bg-green-00">

//             <div className='flex flex-col gap-8'>

//                 <div><p className='text-2xl font-medium text-center'>Skills That I  Have</p></div>

//                 <div className='flex flex-col gap-3'>
//                     <div className='text-lg font-medium'>Frontend</div>
//                     <div className='flex gap-4'>
//                         <img className='w-16 h-7' src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
//                         <img className='w-14 h-7' src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
//                         <img className='w-24 h-7' src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
//                         <img className='w-18 h-7' src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" />
//                         <img className='w-28 h-7' src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" /></div>
//                 </div>


//                 <div className='flex flex-col gap-3'>
//                     <div className='text-lg font-medium'>Backend</div>
//                     <div className='flex gap-4'>
//                         <img className='w-24 h-7' src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
//                         <img className='w-24 h-7' src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white" />
//                         <img className='w-24 h-7' src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
//                     </div>
//                 </div>

//                 <div className='flex flex-col gap-3'>
//                     <div className='text-lg font-medium'>Tools</div>
//                     <div className='flex gap-4'>
//                         <img className='w-20 h-7' src="https://img.shields.io/badge/VS_Code-007ACC?logo=visual-studio-code&logoColor=white" />
//                         <img className='w-16 h-7' src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white" />
//                         <img className='w-24 h-7' src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" />
//                     </div>
//                 </div>

//             </div>

//         </section>
//     );
// };

// export default Skill;



const Skill = () => {
  const frontend = [
    "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white",
    "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white",
    "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black",
    "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black",
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white",
  ];

  const backend = [
    "https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white",
    "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white",
    "https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white",
  ];

  const tools = [
    "https://img.shields.io/badge/VS_Code-007ACC?logo=visual-studio-code&logoColor=white",
    "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white",
    "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white",
  ];

  return (
    <section
      id="skill"
      className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-12"
    >
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md px-8 py-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 text-center mb-10 ">
          Skills That I Have
        </h2>

        <div className="space-y-8">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold  mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {frontend.map((src, idx) => (
                <div
                  key={idx}
                  className=" rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <img src={src} className="h-7" alt="frontend-skill" />
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-semibold  mb-4">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {backend.map((src, idx) => (
                <div
                  key={idx}
                  className=" rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <img src={src} className="h-7" alt="backend-skill" />
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold  mb-4">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((src, idx) => (
                <div
                  key={idx}
                  className=" rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <img src={src} className="h-7" alt="tool-skill" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;




