// import React, { PureComponent } from 'react'
import logo from "../assets/images/logo_white_enigmacamp.png";
export default function Hero() {
  return (
    <section>
      <header className="bg-[#182b66] py-6 flex">
        <img src={logo} alt="logo" className="w-[10%] h-auto pl-4" />
        <div className="w-full flex justify-end pr-4 gap-4 text-sm text-white">
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
      </header>
    </section>
  );
}
