// import background from "../assets/Indonesia_island_red.png";
import axel from "../assets/member_photos/axel_photo.png";
import ipin from "../assets/member_photos/ipin.png";
import zul from "../assets/member_photos/zul.png";
import rifki from "../assets/member_photos/rifki.png";
import Carousel from "react-multi-carousel";
import alfin from "../assets/member_photos/alfin.png";
import "react-multi-carousel/lib/styles.css";

export default function AboutUs() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="about-us">
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border border-red-400 "></div>
        <h1 className="flex-shrink mx-4 text-red-600 sm:text-5xl text-4xl text-center font-semibold">
          ABOUT US
        </h1>
      </div>
      <div className="flex justify-between px-8 py-16 sm:flex-row flex-col gap-4">
        <div className="bg-blue-50/0 backdrop-blur-3xl  sm:w-[45%] w-full text-center rounded-lg p-1 ring-1 ring-slate-400">
          <h2 className="py-4 font-bold text-black">About Indonesia</h2>
          <hr className="h-px my-2 bg-red-400 border-0"></hr>
          <blockquote className="text italic  text-slate-600 p-5">
            <p>
              "Indonesia is a country in Southeast Asia and Oceania between the
              Indian and Pacific oceans. It consists of over 17,000 islands,
              including Sumatra, Java, Sulawesi, and parts of Borneo and New
              Guinea."
            </p>
          </blockquote>
        </div>
        <div className="bg-blue-50/0 backdrop-blur-3xl sm:w-[45%] w-full text-center rounded-lg p-1 ring-1 ring-slate-400">
          <h2 className="py-4 font-bold text-black">About Enigma</h2>
          <hr className="h-px my-2 bg-red-400 border-0"></hr>
          <blockquote className="text italic  text-slate-600 p-5">
            <p>
              "Enigma specialized in IT Bootcamp and Talent Management, offering
              two key programs: Talent as a Service and Training as a Service.
              Enigma mission is to empower software engineers to support your
              business."
            </p>
          </blockquote>
        </div>
      </div>
      <div className="bg-red-500 text-white py-12 rounded-lg">
        <div className="text-center mb-10">
          <h3 className="text-4xl sm:text-5xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            MEET THE
          </h3>
          <h3 className="text-4xl sm:text-5xl text-white  font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            TEAM
          </h3>
          <p className="mt-2 text-white">Who developed this website</p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12"> */}
        <div className="m-20">
          <Carousel responsive={responsive} containerClass="carousel-container">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center w-64 carousel-item">
              <div className="w-32 h-32 rounded-full mb-4 overflow-hidden relative">
                <img
                    src={alfin}
                    alt="alfin"
                    className="brightness-150 object-cover scale-150 absolute -top-20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alfin Kurniawan</h3>
              <p className="text-sm">Aryanto</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center w-64 carousel-item">
              <img
                src={axel}
                alt="pp"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Axel</h3>
              <p className="text-sm">Barlian</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center w-64 carousel-item">
              <img
                src={ipin}
                alt="pp"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Nur</h3>
              <p className="text-sm">Aripin</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center w-64 carousel-item">
              <img
                src={rifki}
                alt="pp"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Rifki</h3>
              <p className="text-sm">Mohamad</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center w-64 carousel-item">
              <img
                src={zul}
                alt="pp"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Zul F</h3>
              <p className="text-sm">Baihaqi</p>
            </div>
          </Carousel>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
