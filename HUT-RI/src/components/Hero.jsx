import dirgahayu from "/dirgahayu.png";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-between relative overflow-hidden">
      <div className="relative z-20 flex flex-col justify-between h-full px-8">
        <div className="mx-auto my-auto px-4 fade-in">
          <img src={dirgahayu} />
        </div>
      </div>
      <div className="bg-red-600 text-white text-center py-4 mt-4">
        <p className="marquee">
          <span>
            JAYALAH NEGERIKU TERCINTA ✦ SATU NUSA SATU BANGSA ✦ INDONESIA
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
