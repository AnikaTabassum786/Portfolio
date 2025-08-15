

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-blue-50 px-6 py-16"
    >
      <div className="max-w-4xl w-full text-center md:text-left bg-white/80 backdrop-blur-md px-8 py-10 rounded-2xl shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 mb-6 text-center">
          About Me
        </h2>
        {/* <div className="w-16 h-1 bg-green-500 mx-auto md:mx-0 mb-8"></div> */}

        {/* Paragraphs */}
        <div className="flex flex-col gap-5 text-gray-700 leading-relaxed">
          <p>
            I am <span className="font-semibold">Anika Tabassum</span>. I
            completed my BSc in Computer Science and Engineering from the
            American International University-Bangladesh (AIUB).
          </p>

          <p>
            Recently, I completed a web development course from{" "}
            <span className="font-semibold">Programming Hero</span>, which
            helped me become a strong frontend developer.
          </p>

          <p>
            I am an aspiring <span className="font-semibold">Full Stack Developer</span> with a strong passion for building
            dynamic and user-friendly applications. My next goal is to dive
            into backend technologies to complete my full-stack journey.
          </p>

          <p>
            Alongside technical skills, I aim to strengthen my foundation in
            programming concepts, including{" "}
            <span className="italic">data structures, algorithms</span>, and
            problem-solving.
          </p>

          <p>
            I am also interested in <span className="font-semibold">Python</span> and plan to explore its vast potential in
            both web development and other fields.
          </p>

          <p>
            Beyond coding, I am passionate about{" "}
            <span className="font-semibold">research</span> and aspire to publish more
            papers in the future. One of my papers has already been published in
            Springer Nature.
          </p>

          <p>
            My hobbies include{" "}
            <span className="italic">reading storybooks, gardening</span>, and{" "}
            <span className="italic">interior design</span>. These activities
            help me relax and spark creativity.
          </p>

          <p>
            I am slightly introverted and take time to adapt to a new
            environment, but I always strive to build strong professional
            relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
