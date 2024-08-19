import Hero from "../Hero.jsx";
import FilosofiLogo from "../FilosofiLogo.jsx";
import SejarahKemerdekaan from "../SejarahKemerdekaan.jsx";
import AboutUs from "../AboutUs.jsx";

// import "animate.css/animate.compat.css";

export default function HomePage() {
  return (
    <div className="poppins-regular">
      <Hero />
      <FilosofiLogo />
      <SejarahKemerdekaan />
      <AboutUs />
    </div>
  );
}
