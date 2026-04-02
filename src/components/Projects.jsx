import WeatherAppImg from "../assets/ProjectsImage/weatherapp.png";
import EcommerceAppImg from "../assets/ProjectsImage/ecommerceapp.png";
import OrasAppImg from "../assets/ProjectsImage/orasapp.png";
import EcommerceAppImg2 from "../assets/ProjectsImage/EcommerceApp2.png";
import ProjectCard from "./Elements/ProjectCard.jsx";

const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      Image: WeatherAppImg,
      title: "Project 1",
      description: "This is the first project.",
      link: "https://carlo022.github.io/React.JS-Weather-Application",
    },
    {
      id: 2,
      Image: EcommerceAppImg,
      title: "Project 2",
      description: "This is the second project.",
      link: "https://eshopus.netlify.app/",
    },
    {
      id: 3,
      Image: OrasAppImg,
      title: "Project 3",
      description: "This is the third project.",
      link: "https://carlo022.github.io/Time-Management-App/",
    },
    {
        id: 4,
        Image: EcommerceAppImg2,
        title: "Project 4",
        description: "This is the fourth project.",
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            veniam?
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
