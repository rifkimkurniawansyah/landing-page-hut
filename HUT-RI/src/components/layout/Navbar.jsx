import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center p-4 md:p-8 font-bold">
      <img
        src="../src/assets/logo79.png"
        alt="Logo 79"
        className="w-32 md:w-40 h-auto animate-bounce"
      />

      {/* Desktop NavBar */}
      <nav className="hidden md:flex space-x-6 text-gray-800 text-lg lg:text-xl">
        <button
          onClick={() => scrollToSection("filosofi")}
          className="hover:text-red-600 transition-colors"
        >
          Filosofi Logo
        </button>
        <button
          onClick={() => scrollToSection("sejarah")}
          className="hover:text-red-600 transition-colors"
        >
          Sejarah Kemerdekaan
        </button>
        <button
          onClick={() => scrollToSection("about-us")}
          className="hover:text-red-600 transition-colors"
        >
          About Us
        </button>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile NavBar */}
      {isOpen && (
        <nav className="flex flex-col space-y-8 justify-center items-end font-bold text-slate-700 absolute h-full z-40 left-0 bottom-0 w-full backdrop-blur-lg p-4 md:hidden shadow-lg text-xl">
          <button
            onClick={() => {
              scrollToSection("filosofi");
              toggleMenu();
            }}
            className="hover:text-red-500 transition-colors hover:underline hover:underline-offset-8"
          >
            Filosofi Logo
          </button>
          <button
            onClick={() => {
              scrollToSection("sejarah");
              toggleMenu();
            }}
            className="hover:text-red-600 transition-colors hover:underline hover:underline-offset-8"
          >
            Sejarah Kemerdekaan
          </button>
          <button
            onClick={() => {
              scrollToSection("about-us");
              toggleMenu();
            }}
            className="hover:text-red-600 transition-colors hover:underline hover:underline-offset-8"
          >
            About Us
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
