import dirgahayu from "/dirgahayu.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen justify-around flex flex-col relative overflow-hidden"
    >
      <div className="relative z-20 flex flex-col px-8">
        <div className="mx-auto my-auto px-4 fade-in">
          <img src={dirgahayu} />
        </div>
      </div>
      <div className="bg-red-600 text-white text-center py-4 mb-2 absolute inset-x-0 bottom-0">
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
