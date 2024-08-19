import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import FilosofiLogo from "./components/FilosofiLogo";

import SejarahKemerdekaan from "./components/SejarahKemerdekaan";
import bg from "/bg.png";
import "animate.css/animate.compat.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="bg-fixed overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Hero />
      <FilosofiLogo />
      <SejarahKemerdekaan />
      <AboutUs />
    </div>
  );
}

export default App;
