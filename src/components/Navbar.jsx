import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "MyProjects", link: "#myprojects" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-white"
      data-aos="fade-out"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/*LOGO*/}
        <a href="#home" className="text-4xl font-bold italic text-white">
          Portfolio
        </a>

        {/*Mobile Menu toggle*/}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>

        {/*Desktop Navigation*/}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-gray-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg">
            {""}Contact{""}
          </button>
        </nav>
      </div>

      {/*Mobile Navigator*/}
      <div
        className={`${isOpen ? "flex" : "hidden"} md:hidden bg-[#0f0715] fixed top-0 left-0 w-full 
     h-screen z-[100] flex-col items-center justify-center space-y-8 bg-purple-900/90 backdrop-blur-lg`}
      >
        {/*Close Button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>

        {/*Mobile Navigation */}
        {NavbarLinks.map((link) => (
          
          <a
            key={link.id}
            href={link.link}
            className="text-2xl font-bold text-white hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/*Contact Button */}
        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Navbar;
