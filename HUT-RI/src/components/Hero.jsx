const Hero = () => {
    return (
      <section className="custom-gradient h-screen flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0"></div>
  
        <div className="relative z-20 flex flex-col justify-between h-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img
              src="../src/assets/logo79.png"
              alt="Logo 79"
              className="w-32 md:w-40 h-auto mb-4 md:mb-0"
            />
            <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-black">
              <a href="#" className="hover:text-red-600 transition-colors">
                Filosofi Logo
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                Sejarah Kemerdekaan
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                About Us
              </a>
            </nav>
          </div>
  
          <div className="text-center mb-8 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-red-600 fade-in">
              Dirgahayu
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-red-600 fade-in mt-2">
              Republik Indonesia
            </h1>
            <p className="relative text-gray-600 p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
  
          <div className="bg-red-600 text-white text-center py-4 mt-4">
            <p className="fade-in">
              JAYALAH NEGERIKU TERCINTA ✦ SATU NUSA SATU BANGSA ✦ INDONESIA
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  