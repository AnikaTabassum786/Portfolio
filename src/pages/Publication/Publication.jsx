


import React from 'react';

const Publication = () => {
  return (
    <section
      id="publish"
      className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 py-12"
    >
      

      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 text-center mb-10 ">Publication</h2>
        <h3 className="text-xl font-semibold mb-4">Data-Medi: A Web Database System for E-Health</h3>
        
        <div className="text-gray-700 space-y-2">
          <p><span className="font-semibold">Conference:</span> 6th World S4 2022</p>
          <p><span className="font-semibold">Publisher:</span> Springer Nature</p>
          <p><span className="font-semibold">Authors:</span> Anika Tabassum, Tahmidul Islam, Tajim Md. Niamat Ullah Akhund</p>
        </div>

        <div className="mt-4 flex gap-4">
          <a
            href="https://link.springer.com/chapter/10.1007/978-981-19-7663-6_58"
            target='_blank'
            className="px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            View Publication
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Publication;
