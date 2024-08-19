// import React, { PureComponent } from 'react'

export default function Hero() {
  return (
    <section>
      <div
        className="shadow-lg"
        style={{
          backgroundImage: `url(https://enigmacamp.com/images/program/offline-bootcamp.webp)`,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-gradient-to-r opacity-70 hover:opacity-100 rounded-lg from-blue-500 to-blue-900 text-white p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold mb-4">Celebrate</h2>
            <p className="text-lg mb-4">With Enigma</p>
            <p className="text-sm mb-8">
              Enigma is having their 5th anniversary. Become an Enigmanians now!
            </p>
            <div className="flex items-center justify-center">
              <div className="flex justify-center space-x-4">
                <button className="bg-white hover:bg-blue-900 text-black hover:text-white font-bold py-2 px-4 rounded-full">
                  Join Now
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white hover:text-black font-bold py-2 px-4 rounded-full">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#182b66] rounded-full w-32 h-32 flex items-center justify-center transform rotate-12">
                <h3 className="text-6xl font-extrabold">5</h3>
                <p className="text">th</p>
              </div>
              <div className="absolute inset-0 flex items-center transform -rotate-12">
                <span className="bg-white px-3 py-1 rounded-lg text-black font-boldrounded-full text-sm flex lg-block">
                  ANNIVERSARY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
