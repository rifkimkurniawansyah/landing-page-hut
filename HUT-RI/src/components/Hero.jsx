import dirgahayu from "/dirgahayu.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative overflow-hidden -mt-24"
    >
      <div className="my-auto mx-auto px-8">
        <div className="px-4 fade-in">
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
