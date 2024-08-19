const Hero = () => {
    return (
        <section className="h-screen flex flex-col custom-gradient justify-between relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full z-0"></div>

          <div className="relative z-20 flex flex-col justify-between h-full px-8">


            <div className="text-center justify-center mx-auto mt-36 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-red-600 fade-in">
                Dirgahayu
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-red-600 fade-in mt-2">
                Republik Indonesia
              </h1>
              <p className="relative text-slate-700 p-4 text-lg">
                Bersatu kita teguh, bercerai kita runtuh,
                <br/>
                Mari kita jaga persatuan dan kesatuan bangsa, Demi masa depan yang
                lebih gemilang.
              </p>
            </div>
          </div>
          <div className="bg-red-600 text-white text-center py-4 mt-4">
            <p className="fade-in">
              JAYALAH NEGERIKU TERCINTA ✦ SATU NUSA SATU BANGSA ✦ INDONESIA
            </p>
          </div>
        </section>
    );
};

export default Hero;
  