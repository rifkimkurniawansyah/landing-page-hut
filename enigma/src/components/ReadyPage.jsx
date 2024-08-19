import "./ReadyPage.css";

const ReadyPage = () => {
  const items = [
    {
      letter: "R",
      title: "Respect each other",
      description: "Saling menghargai dan menghormati satu sama lain.",
    },
    {
      letter: "E",
      title: "Effective & Efficient",
      description:
        "Memaksimalkan proses bekerja untuk mendapatkan hasil yang baik.",
    },
    {
      letter: "A",
      title: "Agile spirit",
      description:
        "Mampu menyesuaikan diri atau beradaptasi dengan segala perubahan.",
    },
    {
      letter: "D",
      title: "Discipline",
      description:
        "Taat dan patuh pada aturan, termasuk yang berkaitan dengan diri sendiri.",
    },
    {
      letter: "Y",
      title: "Yes I can",
      description:
        "Memiliki pandangan positif dan optimis terhadap segala sesuatu.",
    },
  ];

  return (
      <div>
        <div
            className="min-h-screen bg-white flex items-center justify-center p-5 bg-gradient-to-bl from-blue-800 to-indigo-400 ">
          <div className="space-y-12">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  <div
                      className={`bg-white rounded-full p-2 shadow-lg transition-transform ${
                          index % 2 === 0 ? "hover-rotate-left" : "hover-rotate-right"
                      }`}
                  >
                    <div
                        className={`flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 text-white text-6xl font-bold rounded-full ${
                            index % 2 === 0 ? "bg-blue-900" : "bg-orange-600"
                        }`}
                    >
                      {item.letter}
                    </div>
                  </div>
                  <div
                      className={`text-center md:text-left p-6 ${
                          index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                      }`}
                  >
                    <h2
                        className={`text-3xl sm:text-4xl font-bold ${
                            index % 2 === 0
                                ? "text-white flex flex-row-reverse"
                                : "text-orange-500"
                        }`}
                    >
                      {item.title}
                    </h2>
                    <p className="mt-2 text-lg text-indigo-100 md:text-xl">{item.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>

      </div>
  );
};

export default ReadyPage;
