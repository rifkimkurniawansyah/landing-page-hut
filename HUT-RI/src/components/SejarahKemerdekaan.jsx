import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandFist, faHandshake, faPersonRifle, faScroll,} from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";

export default function SejarahKemerdekaan() {
  return (
    <section id="sejarah" className="mx-auto relative overflow-hidden my-8">
      <div className="relative flex py-5 items-center">
        <h1 className="flex-shrink mx-4 text-red-600 sm:text-5xl text-4xl text-center font-semibold">
          SEJARAH KEMERDEKAAN
        </h1>
        <div className="flex-grow border border-red-400 "></div>
      </div>
      <hr className="sm:hidden w-screen h-0.5 bg-red-600 border-red-600" />

      <div className="flex flex-1 px-8">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-red-600 before:to-transparent mt-8">
          <ScrollAnimation
            animateIn="fadeInRight"
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-red-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FontAwesomeIcon icon={faPersonRifle} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-lg shadow-xl hover:scale-105 transition ease-out duration-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">
                  Penjajahan oleh Belanda
                </div>
                <time className="font-caveat font-medium text-red-500">
                  1602-1942
                </time>
              </div>
              <div className="text-slate-700">
                <ul className="list-disc ml-4">
                  <li>
                    1602: Pendudukan Belanda dimulai dengan pembentukan
                    Vereenigde Oost-Indische Compagnie (VOC), yang menjadi
                    kekuatan utama di Indonesia.
                  </li>
                  <li>
                    1800: VOC dibubarkan, dan Indonesia menjadi koloni resmi
                    Belanda di bawah nama Hindia Belanda.
                  </li>
                  <li>
                    1942: Belanda menyerah kepada Jepang selama Perang Dunia II,
                    mengakhiri lebih dari tiga abad penjajahan Belanda.
                  </li>
                </ul>
              </div>
              <img
                className="mt-4 rounded-xl"
                src="https://dialeksis.com/images/web/2023/03/penjajah-belanda.jpeg"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInLeft"
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-red-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FontAwesomeIcon icon={faPersonRifle} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-lg shadow-xl hover:scale-105 transition ease-out duration-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">
                  Pendudukan Jepang
                </div>
                <time className="font-caveat font-medium text-red-500">
                  1942-1945
                </time>
              </div>
              <div className="text-slate-700">
                <ul className="list-disc ml-4">
                  <li>
                    8 Maret 1942: Jepang mendarat di Indonesia, menggantikan
                    Belanda sebagai kekuatan penjajah.
                  </li>
                  <li>
                    1945: Pendudukan Jepang berakhir dengan kekalahan Jepang
                    dalam Perang Dunia II.
                  </li>
                </ul>
              </div>
              <img
                className="mt-4 rounded-xl"
                src="https://cerdika.com/wp-content/uploads/2021/05/Gambar-Thumbnail-Pendudukan-Jepang-di-Indonesia-compressed.jpg"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInRight"
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-red-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-lg shadow-xl hover:scale-105 transition ease-out duration-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">
                  Pergerakan Nasional
                </div>
                <time className="font-caveat font-medium text-red-500">
                  1908-1927
                </time>
              </div>
              <div className="text-slate-700">
                <ul className="list-disc ml-4">
                  <li>
                    20 Mei 1908: Budi Utomo didirikan oleh Dr. Wahidin
                    Sudirohusodo dan teman-temannya sebagai organisasi nasional
                    pertama yang memperjuangkan kemajuan bangsa.
                  </li>
                  <li>
                    16 Oktober 1911: Sarekat Islam didirikan oleh Haji
                    Samanhudi, menjadi salah satu organisasi pergerakan terbesar
                    yang memperjuangkan hak-hak sosial dan politik.
                  </li>
                  <li>
                    5 Juli 1927: Partai Nasional Indonesia (PNI) didirikan oleh
                    Soekarno dan kawan-kawan, menandai langkah penting dalam
                    perjuangan kemerdekaan.
                  </li>
                </ul>
              </div>
              <img
                className="mt-4 mx-auto w-full rounded-xl"
                src="https://www.studiobelajar.com/wp-content/uploads/2022/01/dokumentasi-boedi-oetomo-organisasi-pergerakan-nasional.jpg"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInLeft"
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-red-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FontAwesomeIcon icon={faScroll} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-lg shadow-xl hover:scale-105 transition ease-out duration-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">
                  Proklamasi Kemerdekaan
                </div>
                <time className="font-caveat font-medium text-red-500">
                  17 Agustus 1945
                </time>
              </div>
              <div className="text-slate-700">
                17 Agustus 1945: Soekarno dan Mohammad Hatta memproklamasikan
                kemerdekaan Indonesia di Jakarta pada pukul 10:00 WIB.
                Proklamasi ini merupakan tonggak utama kemerdekaan Indonesia
                dari penjajahan.
              </div>
              <img
                className="mt-4 mx-auto w-full rounded-xl"
                src="https://sman1tbtlampung.sch.id/media_library/posts/large/1977fbec3be9cdcf6f6a85804a02796d.jpeg"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInRight"
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-red-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FontAwesomeIcon icon={faHandFist} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-lg shadow-xl hover:scale-105 transition ease-out duration-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">
                  Perang Kemerdekaan
                </div>
                <time className="font-caveat font-medium text-red-500">
                  1945-1949
                </time>
              </div>
              <div className="text-slate-700">
                <ul className="list-disc ml-4">
                  <li>
                    21 Juli 1947: Belanda melancarkan Agresi Militer I untuk
                    mengembalikan kekuasaan kolonial di Indonesia, memicu
                    perlawanan sengit dari rakyat Indonesia.
                  </li>
                  <li>
                    19 Desember 1948: Belanda melancarkan Agresi Militer II yang
                    menyebabkan pertempuran sengit dan diplomasi internasional
                    intensif.
                  </li>
                  <li>
                    7 Mei 1949: Setelah perundingan dan tekanan internasional,
                    Belanda menyetujui gencatan senjata dan perundingan lebih
                    lanjut.
                  </li>
                </ul>
              </div>
              <img
                className="mt-4 mx-auto w-full rounded-xl"
                src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2022/01/18/1385486_538714899554621_18105099-20220118115941.jpg"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
