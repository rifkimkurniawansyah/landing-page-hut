import AboutUs from './components/AboutUs'

import SejarahKemerdekaan from "./components/SejarahKemerdekaan";
import bg from "/bg.png";
import "animate.css/animate.compat.css";

function App() {

  return (
    <>
      <AboutUs />
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
    </div>
  );
}

export default App;
