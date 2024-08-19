import Hero from "../Hero.jsx";
import FilosofiLogo from "../FilosofiLogo.jsx";
import SejarahKemerdekaan from "../SejarahKemerdekaan.jsx";
import AboutUs from "../AboutUs.jsx";
import bg from "/bg.png";
// import "animate.css/animate.compat.css";

export default function HomePage() {

    return (
        <div className="poppins-regular">
            <div
                className="bg-fixed overflow-hidden"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
            <Hero/>
            <FilosofiLogo/>
            <SejarahKemerdekaan/>
            <AboutUs/>
            </div>
        </div>
    )
}