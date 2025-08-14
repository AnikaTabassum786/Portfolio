import React from 'react';
import About from '../About/About';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';
import img from '../../assets/images/profile.jpeg'
import resume from '../../assets/resume.pdf'
import Skill from '../Skill/Skill';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import Publication from '../Publication/Publication';


const Home = () => {
  const [text] = useTypewriter({
    words: ['I am Anika Tabassum', 'I am MERN Stack Developer'],
    loop: 0
  })
  return (
    <div>
      {/* flex items-center justify-center */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-blue-00">
        <div><span className='text-2xl font-semibold'>Hello <span className='text-2xl font-semibold'>{text}</span><Cursor></Cursor></span></div>
        
        <div className='text-center grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 md:gap-16 mt-8'>
          <div>
            <img className='h-[250px] w-full rounded-full' src={img} alt="Image of Anika Tabassum" />
          </div>

          <div className='flex flex-col gap-2'>        
            <div><p className='text-lg '>I can make beautiful website</p></div>

            <div className='flex justify-center items-center gap-2'>
              <Link to='https://github.com/AnikaTabassum786' target="_blank"
                rel="noopener noreferrer"><div className="badge badge-neutral badge-outline">Github</div></Link>
              <Link to='https://www.linkedin.com/in/anika-tabassum-1b62541b1/' target="_blank"
                rel="noopener noreferrer"><div className="badge badge-neutral badge-outline">LinkedIn</div></Link>
            </div>

            <div>
               <a 
              href={resume} 
              download="Anika_Tabassum_Resume.pdf" 
              className='btn'
            >
              Resume
            </a>
            </div>
          
          </div>
        </div>

      </section>

      <About></About>
      <Skill></Skill>
      <Education></Education>
      <Experience></Experience>
      <Project></Project>
      <Publication></Publication>
    </div>
  );
};

export default Home;