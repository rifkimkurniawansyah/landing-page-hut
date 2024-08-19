import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutUs from "./components/AboutUs";
import FilosofiLogo from "./components/FilosofiLogo";

import SejarahKemerdekaan from "./components/SejarahKemerdekaan";
import bg from "/bg.png";
import "animate.css/animate.compat.css";

function App() {

  return (
      <div>
          <header className="flex justify-between items-center p-4 md:p-8 navbar-bg">
              <img
                  src="../src/assets/logo79.png"
                  alt="Logo 79"
                  className="w-32 md:w-40 h-auto"
              />
              <Navbar/>
          </header>
          <Hero/>
          <FilosofiLogo/>
          <SejarahKemerdekaan/>
          <AboutUs/>
      </div>
  );
}

export default App
