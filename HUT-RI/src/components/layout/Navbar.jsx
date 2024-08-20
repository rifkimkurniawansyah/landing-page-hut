"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function useReadingProgress() {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    function updateScrollCompletion() {
      // see how much we have scrolled
      const currentProgress = window.scrollY;
      // see how much total scroll is available
      let scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }
    // add scroll event listener
    window.addEventListener("scroll", updateScrollCompletion);

    // remove scroll event listener on umount
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);
  return completion;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const completion = useReadingProgress();

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
    <header>
      <div className="z-50 top-0 backdrop-blur-3xl py-0.5 w-full fixed">
        <span
          id="progress-bar"
          style={{
            transform: `translateX(${completion - 100}%)`,
          }}
          className={`absolute bottom-0 w-full transition-transform duration-150 h-0.5 bg-red-500`}
        />
      </div>
      <div className="flex justify-between items-center p-4 font-bold">
        <img
          src="./logo79.png"
          alt="Logo 79"
          className="w-32 h-auto animate-bounce"
        />

        {/* Desktop NavBar */}
        <nav className="hidden md:flex top-0 z-50 space-x-6 text-gray-800 text-lg lg:text-xl px-10">
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
          <nav className="flex flex-col space-y-8 justify-center items-end font-bold text-gray-900 absolute h-full z-40 left-0 bottom-0 w-full backdrop-blur-2xl p-4 md:hidden shadow-lg text-xl">
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
      </div>
    </header>
  );
};

export default Navbar;
