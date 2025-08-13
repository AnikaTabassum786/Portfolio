
// import React, { useEffect, useState } from "react";

// const Navbar = () => {

//     const [activeSection, setActiveSection] = useState("home");

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = document.querySelectorAll("section");
//             let current = "";
//             sections.forEach((section) => {
//                 const sectionTop = section.offsetTop - 80; // navbar height offset
//                 if (window.scrollY >= sectionTop) {
//                     current = section.getAttribute("id");
//                 }
//             });
//             setActiveSection(current);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const links = (
//         <>
//             <li>
//                 <a
//                     href="#home"
//                     className={activeSection === "home" ? "underline font-bold" : ""}
//                 >
//                     Home
//                 </a>
//             </li>

//             <li>
//                 <a
//                     href="#about"
//                     className={activeSection === "about" ? "underline font-bold" : ""}
//                 >
//                     About
//                 </a>
//             </li>
//         </>
//     );

//     return (
//         <div className="navbar bg-base-100 shadow-sm w-full fixed top-0 left-0 z-10">
//             <div className="navbar-start">
//                 <a className="btn btn-ghost text-xl">daisyUI</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">{links}</ul>
//             </div>
//             <div className="navbar-end">
//                 <a className="btn">Button</a>
//             </div>
//         </div>
//     );
// };

// export default Navbar;




import React, { useEffect, useState } from "react";

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
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed w-full top-0 left-0 z-10">
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
