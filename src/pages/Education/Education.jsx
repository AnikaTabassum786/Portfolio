import React from 'react';

const Education = () => {
    return (
<>
{/* <section
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
    </section> */}

    <section
  id="education"
  className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-12"
>
  <div className="max-w-3xl w-full bg-white backdrop-blur-md rounded-2xl shadow-lg p-8">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 text-center mb-10">
      Education
    </h2>
    {/* <div className="w-16 h-1  mx-auto mb-8"></div> */}

    {/* Card */}
    <div className=" ">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
        BSc in Computer Science and Engineering
      </h3>
      <p className="text-gray-600 mt-2">
        American International University-Bangladesh (AIUB)
      </p>
      <p className="text-gray-500 mt-1 italic">(2018 - 2021)</p>
      <p className="mt-3 font-medium text-gray-700">
        CGPA: 3.86 / 4.00
      </p>
    </div>
  </div>
</section>

</>
        

    );
};

export default Education;