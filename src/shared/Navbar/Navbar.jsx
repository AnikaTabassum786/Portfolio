




import React, { useEffect, useState } from "react";
import resume from '../../assets/resume.pdf'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // navbar height offset
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <li>
        <a
          href="#home"
          className={activeSection === "home" ? "underline font-bold" : ""}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={activeSection === "about" ? "underline font-bold" : ""}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skill"
          className={activeSection === "skill" ? "underline font-bold" : ""}
        >
          Skill
        </a>
      </li>
      <li>
        <a
          href="#education"
          className={activeSection === "education" ? "underline font-bold" : ""}
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className={activeSection === "experience" ? "underline font-bold" : ""}
        >
          Experience
        </a>
      </li>
      <li>
        <a
          href="#project"
          className={activeSection === "project" ? "underline font-bold" : ""}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#publish"
          className={activeSection === "publish" ? "underline font-bold" : ""}
        >
          Publication
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={activeSection === "contact" ? "underline font-bold" : ""}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <>
<div className="navbar bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-10 px-4">
  {/* Left side */}
  <div className="navbar-start">
    {/* Mobile dropdown */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-md rounded-xl shadow-lg mt-3 w-52 p-2"
      >
        {links}
      </ul>
    </div>

    <a className="text-xl font-bold text-blue-500 tracking-wide hover:text-blue-400 transition-colors duration-300">
      Anika Tabassum
    </a>
  </div>

  {/* Desktop menu */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-700 font-medium">
      {links}
    </ul>
  </div>

  {/* Right side */}
  <div className="navbar-end">
    <a
      href={resume}
      download="Anika_Tabassum_Resume.pdf"
      className="px-4 py-2 font-medium bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
    >
      Resume
    </a>
  </div>
</div>

    </>
  );
};

export default Navbar;
