import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hero from "./component/Hero.jsx";
import Navbar from "./component/Navbar.jsx";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
