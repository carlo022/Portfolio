import React from "react";
import img_about1 from "../assets/img1.png";
import img_about2 from "../assets/img2.png";
import img_about from "../assets/img.PNG";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const FullText = `I’m Carl Leonard Lalas, a Design Software Engineer and Web Developer with over six years of experience in the IT field. 
  My journey at DENSO Techno Philippines Inc. has taken me from Junior Software Engineer to Senior Design Engineer, where I lead projects, improve application quality, and build modern web solutions using the React ecosystem.
I specialize in full-stack development, with strong skills in JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, and Tailwind CSS. 
My work spans creating scalable APIs, secure authentication systems, and user-focused interfaces. Alongside my professional career, 
I’ve built projects like SmartCart (a lightweight e-commerce platform), a Weather Update App, and a Time Management Application—each 
reflecting my drive to solve problems through design and technology.
I’m passionate about continuous learning, with certifications and masterclasses in React, MERN stack, and advanced JavaScript shaping 
my growth. Right now, I’m focused on expanding my portfolio with polished web projects and pursuing part-time opportunities in web 
development and e-commerce to fuel my creative ambitions.
I’m excited to connect with like-minded professionals and explore new opportunities in the web development space. Let’s create something 
amazing together!`;

    // Define how many characters to show by default
  const characterLimit = 210;

  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"></div>
          <img
            src={img_about1}
            alt="about picture 1"
            className="absolute top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
          <img
            src={img_about}
            alt="about picture 2"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg"
          />
          <img
            src={img_about2}
            alt="about picture"
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg "
          />
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#dc3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
            {isExpanded ? FullText : `${FullText.substring(0, characterLimit)}...`}
          </p>
          <footer>
            <button 
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default About;
