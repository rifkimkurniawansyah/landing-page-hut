// import background from "../assets/Indonesia_island_red.png";
import axel from "../assets/member_photos/axel_photo.png";
import defPP from "../assets/member_photos/default_profile.jpg";
import logo from "../assets/HUT RI 79 - Logo Utama - Warna.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function AboutUs() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section>
      <div className="bg-red-500 text-white py-8 flex items-center justify-center">
        <img
          src={logo}
          alt="logo 79"
          className="w-[10%] h-auto rounded-lg shadow-lg mr-4"
        />
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>
      <div className="flex justify-between px-8 py-16">
        <div className="bg-gray-300 opacity-85 w-[45%] text-center rounded-lg p-1">
          <h2 className="py-4 font-bold text-black">About Indonesia</h2>
          <hr className="h-px my-2 bg-gray-700 border-0"></hr>
          <blockquote className="text italic font-semibold text-gray-900 p-5">
            <p>
              "Indonesia is a country in Southeast Asia and Oceania between the
              Indian and Pacific oceans. It consists of over 17,000 islands,
              including Sumatra, Java, Sulawesi, and parts of Borneo and New
              Guinea."
            </p>
          </blockquote>
        </div>
        <div className="bg-gray-300 opacity-85 w-[45%] text-center rounded-lg p-1">
          <h2 className="py-4 font-bold text-black">About Enigma</h2>
          <hr className="h-px my-2 bg-gray-700 border-0"></hr>
          <blockquote className="text italic font-semibold text-gray-900 p-5">
            <p>
              "Enigma specialized in IT Bootcamp and Talent Management, offering
              two key programs: Talent as a Service and Training as a Service.
              Enigma mission is to empower software engineers to support your
              business."
            </p>
          </blockquote>
        </div>
      </div>
      <div className="bg-red-500 text-white py-12">
        <div className="text-center mb-10">
          <h3 className="text-4xl text-white font-bold">Meet the</h3>
          <h3 className="text-4xl text-[#182b66] font-bold">Team</h3>
          <p className="mt-2 text-white">Who developed this website</p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12"> */}
        <div className="m-20">
          <Carousel
            responsive={responsive}
            containerClass="carousel-container"
            mr-12
          >
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center w-64 carousel-item">
              <img
                src={defPP}
                alt="pp"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Name</h3>
              <p className="text-sm">Name</p>
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
                src={defPP}
                alt="pp"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Name</h3>
              <p className="text-sm">Name</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center w-64 carousel-item">
              <img
                src={defPP}
                alt="pp"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Name</h3>
              <p className="text-sm">Name</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center w-64 carousel-item">
              <img
                src={defPP}
                alt="pp"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Name</h3>
              <p className="text-sm">Name</p>
            </div>
          </Carousel>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
