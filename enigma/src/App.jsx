// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AboutUs from "./component/AboutUs.jsx";
import Hero from "./component/Hero.jsx";
import Navbar from "./component/Navbar.jsx";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
    </>
  );
}

export default App;
