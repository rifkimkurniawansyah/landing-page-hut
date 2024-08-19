import Hero from "../Hero.jsx";
import FilosofiLogo from "../FilosofiLogo.jsx";
import SejarahKemerdekaan from "../SejarahKemerdekaan.jsx";
import AboutUs from "../AboutUs.jsx";

export default function HomePage() {

    return (
        <div>
            {/*<header className="flex justify-between items-center p-4 md:p-8 navbar-bg">*/}
            {/*    <img*/}
            {/*        src="../src/assets/logo79.png"*/}
            {/*        alt="Logo 79"*/}
            {/*        className="w-32 md:w-40 h-auto"*/}
            {/*    />*/}
            {/*    <Navbar/>*/}
            {/*</header>*/}
            <Hero/>
            <FilosofiLogo/>
            <SejarahKemerdekaan/>
            <AboutUs/>
        </div>
    )
}