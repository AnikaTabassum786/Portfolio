


import React from 'react';
import About from '../About/About';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';
import img from '../../assets/images/profile.png';
import resume from '../../assets/resume.pdf';
import Skill from '../Skill/Skill';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import Publication from '../Publication/Publication';
import Contact from '../Contact/Contact';

const Home = () => {
  const [text] = useTypewriter({
    words: ['I am Anika Tabassum', 'I am MERN Stack Developer'],
    loop: 0,
  });

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-6 py-12"
      >
        {/* Intro text */}
        <div className="text-center my-10">
          <span className="text-3xl md:text-4xl font-bold text-blue-500">
            Hello, <span className="text-blue-500">{text}</span>
            <Cursor />
          </span>
        </div>

        {/* Image + Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              className="h-[350px] md:h-[400px] hover:scale-105 transition-transform duration-300 rounded-md"
              src={img}
              alt="Anika Tabassum"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              I create beautiful, responsive, and user-friendly websites using
              modern web technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <Link
                to="https://github.com/AnikaTabassum786"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="badge badge-outline hover:bg-gray-800 hover:text-white transition-all cursor-pointer">
                  Github
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/in/anika-tabassum-1b62541b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="badge badge-outline hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                  LinkedIn
                </div>
              </Link>
            </div>

            {/* Resume Button */}
            <a
              href={resume}
              download="Anika_Tabassum_Resume.pdf"
              className="px-6 py-3 font-medium bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
               Resume
            </a>
          </div>
        </div>
      </section>

      {/* Sections */}
      <About />
      <Skill />
      <Education />
      <Experience />
      <Project />
      <Publication />
      <Contact />
    </div>
  );
};

export default Home;
