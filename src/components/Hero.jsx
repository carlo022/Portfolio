import React from "react";
import Navbar from "./Navbar.jsx";
import HeroImg from "../assets/HeroImg.PNG";
import Github from "../assets/Socials/github.png";
import Facebook from "../assets/Socials/facebook.png";
import Instagram from "../assets/Socials/instagram.png";
import Linkedin from "../assets/Socials/linkedin.png";
import CV from "../assets/CV(Carl Leonard Lalas)2026.pdf";

const Hero = () => {
  const Socials = [
    {
      id: 1,
      name: "Github",
      icon: Github,
      link: "https://github.com/carlo022",
    },
    {
      id: 2,
      name: "Linkedin",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/carl-leonard-lalas-805279187",
    },
    {
      id: 3,
      name: "Facebook",
      icon: Facebook,
      link: "https://www.facebook.com/carlleonardlalas/",
    },
    { id: 4, name: "Instagram", icon: Instagram, link: "#" },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center">
      {/* Background Decoration */}
      <div
        className="md:h-[550px] h-[400px] w-[400px] md:w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] 
    transform rotate-45 z-0 -right-20 top-20 md:right-2 md:top-28 rounded-3xl opacity-80"
      ></div>

      <Navbar />

      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-between w-full px-6 
    md:px-20 lg:px-32 pb-12 md:py-24 mt-14 md:mt-0 z-10 gap-10"
      >
        {/* Text Section */}
        <section
          className="flex-1 md:text-left mt-10 relative"
          data-aos="fade-up"
          data-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-30 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Carl Leonard Lalas
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-[#c774ec] mb-4">
              Design Engineer
            </h2>
          </header>
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-lg">
            Web Developer & Engineer with 6 years of IT field experience. Expert
            in building modern web interfaces using the React ecosystem.
            Combines a strong foundation in full-stack development with a
            professional background in technical problem-solving. Committed to
            writing clean, maintainable code and delivering user-centric UI
            components.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-8">
            {Socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-10 h-10"
                />
              </a>
            ))}
          </div>

          <a href={CV} download>
            <button className="text-white border-2 py-2 px-8 hover:bg-[#801b9c] hover:shadow-[0_0_30px_rgba(128,0,128,0.5)] transition-all rounded-full text-lg">
              Download My CV
            </button>
          </a>
        </section>

        {/* Image Section - The Fix is here */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end w-full"
        >
          <img
            src={HeroImg}
            alt="Hero Image"
            className="w-full max-w-[180px] sm:max-w-[150px] md:max-w-[250px] h-auto object-contain rounded-lg drop-shadow-2xl"
          />
        </figure>
      </main>
    </div>
  );
};

export default Hero;
