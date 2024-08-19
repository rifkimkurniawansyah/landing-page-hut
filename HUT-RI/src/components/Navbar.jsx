import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row px-8 w-screen justify-between items-center fixed z-50">
      <img
        src="../src/assets/logo79.png"
        alt="Logo 79"
        className="w-32 md:w-40 h-auto mb-4 md:mb-0"
      />

      {/* Burger Icon for Mobile */}
      <div
        className="sm:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-2xl focus:outline-none"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-8 text-black">
          <a href="#" className="hover:text-red-600 transition-colors">
            Filosofi Logo
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            Sejarah Kemerdekaan
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            About Us
          </a>
        </nav>
      </div>

      {/* Regular Navigation for larger screens */}
      <nav className="hidden sm:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-black">
        <a href="#" className="hover:text-red-600 transition-colors">
          Filosofi Logo
        </a>
        <a href="#" className="hover:text-red-600 transition-colors">
          Sejarah Kemerdekaan
        </a>
        <a href="#" className="hover:text-red-600 transition-colors">
          About Us
        </a>
      </nav>
    </div>
  );
}
