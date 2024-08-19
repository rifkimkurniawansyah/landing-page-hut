// import React, { PureComponent } from 'react'
import logo from "../assets/images/logo_white_enigmacamp.png";
import { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <header className="bg-[#182b66] py-6 flex items-center justify-between">
        <img src={logo} alt="logo" className="w-24 h-auto pl-4" />
        <div className="hidden md:flex w-full justify-end pr-4 gap-4 text-sm text-white">
          <p>
            <a className="hover:text-blue-300">Home</a>
          </p>
          <p>
            <a className="hover:text-blue-300">Filosofi</a>
          </p>
          <p>
            <a className="hover:text-blue-300">Grow</a>
          </p>
          <p>
            <a className="hover:text-blue-300">About us</a>
          </p>
        </div>
        <div className="md:hidden flex items-center pr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </header>
      {isOpen && (
        <nav className="md:hidden bg-[#182b66] text-white text-sm">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <a className="hover:text-blue-300" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-blue-300" href="#">
                Filosofi
              </a>
            </li>
            <li>
              <a className="hover:text-blue-300" href="#">
                Grow
              </a>
            </li>
            <li>
              <a className="hover:text-blue-300" href="#">
                About us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
}
