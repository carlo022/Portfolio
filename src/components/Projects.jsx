import WeatherAppImg from "../assets/ProjectsImage/WeatherApp.png";
import EcommerceAppImg from "../assets/ProjectsImage/EcommerceApp.png";
import OrasAppImg from "../assets/ProjectsImage/OrasApp.png";
import EcommerceAppImg2 from "../assets/ProjectsImage/EcommerceApp2.png";
import ProjectCard from "./Elements/ProjectCard.jsx";

const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      Image: WeatherAppImg,
      title: "Weather Update Application",
      description: " React weather application built to demonstrate modern front-end engineering skills: clean component design, API integration, responsive UI, performance-conscious builds, accessibility considerations, and deployment readiness.",
      link: "https://carlo022.github.io/React.JS-Weather-Application",
    },
    {
      id: 2,
      Image: EcommerceAppImg,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce application built with modern web technologies, featuring a responsive user interface and RESTful backend API. This project demonstrates expertise in building scalable, production-ready web applications with React, Node.js, and JSON-Server authentication.",
      link: "https://eshopus.netlify.app/",
    },
    {
      id: 3,
      Image: OrasAppImg,
      title: "Time Management Application",
      description: "a productivity companion designed to help you plan, track, and optimize your daily routine. This project reflects my passion for building intuitive applications and my continuous growth as a developer. Below, I present a quick overview of the app’s functions, the skills I harnessed, and the technologies I leveraged.",
      link: "https://carlo022.github.io/Time-Management-App/",
    },
    {
        id: 4,
        Image: EcommerceAppImg2,
        title: "SmartCart Online Store",
        description: "A lightweight e-commerce platform built with modern web technologies, featuring a responsive user interface and seamless shopping experience. This project showcases my ability to create efficient, user-friendly applications.",
        link: "https://github.com/carlo022/SmartCart-Lightweight-E-Commerce#readme",
    }
  ];

  return (
    <main id="myprojects" className="p-4">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-base">
            Here are some of the projects I've worked on. Click on the images to see more details and live demos!
          </p>
        </header>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {ProjectList.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.Image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;
