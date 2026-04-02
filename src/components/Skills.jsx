import FrontEnd from "../assets/SkillIcon/FrontEnd.png";
import BackEnd from "../assets/SkillIcon/BackEnd.png";
import Tools from "../assets/SkillIcon/Tools.png";
import DataBase from "../assets/SkillIcon/DataBases.png";
import Security from "../assets/SkillIcon/Security.png";
import web from "../assets/SkillIcon/web.png";
import Api from "../assets/SkillIcon/Api.png";
import SkillBox from "./Elements/SkillBox";
import SkillImg1 from "../assets/SkillImg1.png";
import SkillImg2 from "../assets/SkillImg2.png";
import { useState } from "react";

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      image: FrontEnd,
      title: "FrontEnd Development",
      Description: "TailWind CSS, React.Js, JavaScript ES6, BootStrap, JSON",
      proficiency: 90,
      category: "FrontEnd",
    },
    {
      id: 2,
      image: BackEnd,
      title: "BackEnd Development",
      Description: "Node.Js, Express.Js, firebase,",
      proficiency: 85,
      category: "BackEnd",
    },
    {
      id: 3,
      image: DataBase,
      title: "Database Management",
      Description: "MySQL, PostgreSQL, MongoDB",
      proficiency: 80,
      category: "Database",
    },
    {
      id: 4,
      image: web,
      title: "Web Technologies",
      Description: "HTML5, CSS3, JavaScript ES6",
      proficiency: 95,
      category: "FrontEnd",
    },
    {
      id: 5,
      image: Security,
      title: "Authentication & Security",
      Description: "JWT, bcrypt, OAuth, encryption",
      proficiency: 80,
      category: "Security",
    },
    {
      id: 6,
      image: Api,
      title: "API Development",
      Description: "RESTful APIs, GraphQL, API",
      proficiency: 90,
      category: "BackEnd",
    },
    {
      id: 7,
      image: Tools,
      title: "Tools & Technologies",
      Description: "Git, Github , Webpack, Vite, Gitlab",
      proficiency: 95,
      category: "Tools",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % skillsData.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + skillsData.length) % skillsData.length,
    );

  // --- Touch Logic for Mobile ---
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden flex flex-col items-center justify-center text-white px-4 py-20 min-h-screen"
    >
      {/* AOS on Background Elements */}
      <img
        src={SkillImg1}
        data-aos="fade-right"
        className="hidden lg:block animate-float absolute left-[5%] top-[20%] w-[12%] opacity-40 z-10"
        alt=""
      />
      <img
        src={SkillImg2}
        data-aos="fade-left"
        className="hidden lg:block animate-float-reverse absolute right-[5%] top-[25%] w-[14%] opacity-40 z-10"
        alt=""
      />

      <header className="text-center mb-16 z-10" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          My <span className="text-purple-400">Skills</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Explore my technical expertise and capabilities across different
          domains.
        </p>
      </header>

      {/* Carousel Container */}
      <div
        className="relative w-full max-w-6xl mx-auto h-[450px] flex items-center justify-center group overflow-hidden z-10"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <button
          onClick={prevSlide}
          className="absolute left-0 lg:left-[1px] z-50 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20
           hover:bg-purple-600 opacity-0 group-hover:opacity-100 transition-all hidden md:block"
        >
          ←
        </button>

        <div
          className="relative w-full h-full flex items-center justify-center touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {skillsData.map((skill, index) => {
            const total = skillsData.length;
            let position = "hidden";

            if (index === currentIndex) position = "active";
            else if (index === (currentIndex - 1 + total) % total)
              position = "prev";
            else if (index === (currentIndex + 1) % total) position = "next";

            const styles = {
              active: "z-30 opacity-100 scale-100 translate-x-0",
              prev: "z-20 opacity-40 scale-75 -translate-x-[60%] md:-translate-x-[85%] blur-[2px]",
              next: "z-20 opacity-40 scale-75 translate-x-[60%] md:translate-x-[85%] blur-[2px]",
              hidden:
                "z-10 opacity-0 scale-50 translate-x-0 blur-xl pointer-events-none",
            };

            return (
              <div
                key={skill.id}
                className={`absolute transition-all duration-700 ease-in-out ${styles[position]} w-[280px] sm:w-[350px]`}
              >
                <SkillBox {...skill} />
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 lg:right-[1px] z-50 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20
           hover:bg-purple-600 opacity-0 group-hover:opacity-100 transition-all hidden md:block"
        >
          →
        </button>
      </div>

      {/* Background Glow */}
      <div className="absolute z-0 w-96 h-44 bg-[#dc3cf5] rounded-full blur-[120px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Skills;
