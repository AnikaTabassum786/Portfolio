import React from 'react';
import { Link } from 'react-router'; 

const projects = [
  {
    name: 'BartAlap',
    description: 'A real-time chat application with secure messaging and modern UI.',
    image: 'https://i.ibb.co.com/N2tBL60W/BartAlap.png',
    technology: 'React, Tailwind CSS, Node JS, Express JS, MongoDB',
    liveLink: 'https://lighthearted-zuccutto-6b74a1.netlify.app/',
    githubLink: 'https://github.com/AnikaTabassum786/BartAlap-Client',
    Challenge:'To create two types of Dashboard.Manage database collection is slightly challenging. Admin acctionable want little bit hard.',
    Improvement:'Who posted more than 20 post that user will get a diamond badge'
  },
  {
    name: 'BidyaNiketon',
    description: 'An educational management platform for schools and students.',
    image: 'https://i.ibb.co.com/ch8X3nn8/Bidya-Niketon.png',
    technology: 'React, Tailwind CSS, Node JS, Express JS, MongoDB',
    liveLink: 'https://aesthetic-cannoli-aa3f60.netlify.app/',
    githubLink: 'https://github.com/AnikaTabassum786/Course-Management-client'
  },
  {
    name: 'KolaPata',
    description: 'An online marketplace for organic and locally sourced products.',
    image: 'https://i.ibb.co.com/Y4SMR1vP/Kolapata.png',
    technology: 'React, Tailwind CSS, Node JS, Express JS, MongoDB',
    liveLink: 'https://charming-cocada-a91fb8.netlify.app/',
    githubLink: 'https://github.com/AnikaTabassum786/Recipe-Book-Client'
  }
];

const Project = () => {
  return (
   <>
    {/* <section id="project" className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 py-12 ">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <Link 
                to={`/projects/${project.name}`} 
                className="mt-4 px-3 py-2 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section> */}

    <section
  id="project"
  className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 py-12"
>
  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 text-center mb-10">
    My Projects
  </h2>
  {/* <div className="w-16 h-1 bg-blue-500 rounded-full mb-10"></div> */}

  {/* Projects Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />

        {/* Project Info */}
        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            {project.name}
          </h3>

          <Link
            to={`/projects/${project.name}`}
            className="mt-auto inline-block px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>

   </>
  );
};

export default Project;
