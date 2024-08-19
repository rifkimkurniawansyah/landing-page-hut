import { useState } from 'react'
import Hero from './components/Hero'
import AboutUs from "./components/AboutUs";

import SejarahKemerdekaan from "./components/SejarahKemerdekaan";
import bg from "/bg.png";
import "animate.css/animate.compat.css";

function App() {
  return (
    <>
      <Hero />
    </>
  )
    <div
      className="bg-fixed overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SejarahKemerdekaan />
      <AboutUs />
    </div>
  );
}

export default App;
