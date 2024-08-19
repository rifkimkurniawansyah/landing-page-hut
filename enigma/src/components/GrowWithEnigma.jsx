import Picture1 from "../assets/2.jpg";
import Picture2 from "../assets/3.jpg";
import Picture3 from "../assets/4.jpg";
import Picture4 from "../assets/5.jpg";
import Picture5 from "../assets/11.jpg";
import Picture6 from "../assets/7.jpg";
import Picture7 from "../assets/8.jpg";
import Picture8 from "../assets/9.jpg";

export default function GrowWithEnigma() {
  return (
    <section className="flex flex-col min-h-screen bg-gray-900 py-20">
      <header className=" py-6">
        <h2 className="text-4xl font-bold text-center text-white underline underline-offset-8 decoration-blue-500">
          Grow <span className="text-blue-500 text-4xl">With</span> Enigma
        </h2>
      </header>
      <div className="flex-1 container mx-auto px-4 mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img src={Picture1} alt="Dokumentasi 1" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img src={Picture2} alt="Dokumentasi 2" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img src={Picture3} alt="Dokumentasi 3" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img src={Picture4} alt="Dokumentasi 4" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img src={Picture5} alt="Dokumentasi 5" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img src={Picture6} alt="Dokumentasi 6" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img src={Picture7} alt="Dokumentasi 7" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img src={Picture8} alt="Dokumentasi 8" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
