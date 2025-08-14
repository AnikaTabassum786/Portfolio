import React from 'react';

const Education = () => {
    return (

        // <section id="education" className='min-h-screen flex items-center justify-center'>

        //     <div className='flex flex-col gap-2'>
        //         <p>BSc in Computer Science and Engineering</p>
        //         <p>American International University- Bangladesh (AIUB)</p>
        //         <p>(2018-2021, CGPA-3.86)</p>
        //     </div>
        // </section>


        <section
      id="education"
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold  mb-8">
          Education
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            BSc in Computer Science and Engineering
          </h3>
          <p className="text-gray-600 mt-2">
            American International University-Bangladesh (AIUB)
          </p>
          <p className="text-gray-500 mt-1 italic">(2018 - 2021)</p>
          <p className=" mt-3 font-medium">
            CGPA: 3.86 / 4.00
          </p>
        </div>
      </div>
    </section>

    );
};

export default Education;