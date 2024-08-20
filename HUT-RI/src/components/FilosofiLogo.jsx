import headerImage from "../assets/HUT RI 79 - Logo Utama.png";
import contentImage1 from "../assets/Filosopi Logo.jpg";
import contentImage2 from "../assets/Filosopi Elemen.jpg";

export default function FilosofiLogo() {
  return (
    <section>
      <div className="flex flex-col min-h-screen">
        <header className="bg-red-600 text-white flex items-center justify-center p-6 animate-fadeIn">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl sm:text-6xl font-bold transition-transform duration-500 transform hover:scale-105">
              FILOSOFI LOGO
            </h1>
            <div className="bg-white rounded-full p-1 shadow-lg transition-transform duration-500 transform hover:rotate-12">
              <img
                src={headerImage}
                alt="Header Visual"
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col pt-6 sm:pt-12">
              <h3 className="text-md sm:text-xl font-medium animate-slideInRight">
                Nusantara Baru
              </h3>
              <h3 className="text-md sm:text-xl font-medium animate-slideInRight delay-200">
                Indonesia Maju
              </h3>
            </div>
          </div>
        </header>

        <main className="flex-grow py-8 px-6 md:px-12 bg-white-100">
          <div className="container mx-auto animate-fadeInUp">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex flex-col items-center md:items-start md:w-1/2 pr-3 mb-10">
                  <img
                    src={contentImage1}
                    alt="Content Image 1"
                    className="w-full h-full object-cover rounded-lg border border-gray-300 shadow-md transition-transform duration-500 transform hover:scale-105"
                  />
                  <div className="bg-slate-50 shadow-lg mt-4 p-4 rounded-lg hover:ring-1 hover:ring-red-500">
                    <h2 className="text-xl font-semibold mb-2 pb-2 transition-opacity duration-500 hover:opacity-75  animate-fadeIn">
                      <span className="text-red-500">Elemen</span> Grafis Logo
                    </h2>
                    <p className="text-black-700 mb-4 text-justify">
                      Mengutip penjelasan Kementerian Sekretariat Negara, elemen
                      grafis logo ini terinspirasi dari aliran sungai yang
                      merupakan sumber kehidupan. Secara umum sungai memiliki
                      cabang-cabang yang pada akhirnya akan mengarah pada satu
                      muara yang sama.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-start md:w-1/2 mt-6 md:mt-0  pb-2 mb-2">
                  <div className="bg-slate-50 shadow-lg mb-4 p-4 rounded-lg hover:ring-1 hover:ring-red-500">
                    <h2 className="text-xl font-semibold mb-2 transition-opacity duration-500 hover:opacity-75  animate-fadeIn">
                      Logo HUT <span className="text-red-500">ke-79 RI</span>
                    </h2>
                    <p className="text-gray-700 mb-4 text-justify">
                      Logo HUT ke-79 RI merupakan hasil desain oleh Inggrid
                      Wenas, salah satu anggota Asosiasi Desainer Grafis
                      Indonesia (ADGI) asal Surabaya, Jawa Timur. Desain dari
                      logo ini terdiri dari angka 79 yang menjadi tanda usia
                      Indonesia, dan tulisan tema “Nusantara Baru Indonesia
                      Maju”.
                    </p>
                  </div>
                  <img
                    src={contentImage2}
                    alt="Content Image 2"
                    className="w-full h-full object-cover rounded-lg border border-gray-300 shadow-md transition-transform duration-500 transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
