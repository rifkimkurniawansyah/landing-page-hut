import dirgahayu from "/dirgahayu.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="sm:h-[520px] h-[565px] flex flex-col justify-between relative overflow-hidden min-h-screen"
    >
      <div className="relative z-20 flex flex-col justify-between h-full px-8 -m-32">
        <div className="mx-auto my-auto px-4 fade-in">
          <img src={dirgahayu} />
        </div>
      </div>
      <div className="bg-red-600 text-white text-center py-4 mt-4" id="filosofi">
        <p className="marquee tracking-tight">
          <span>
            JAYALAH NEGERIKU TERCINTA ✦ SATU NUSA SATU BANGSA ✦ INDONESIA
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
