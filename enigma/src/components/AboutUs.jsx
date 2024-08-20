import axelImg from "../assets/member_images/axel_photo.png";
import alfinDinoImg from "../assets/member_images/alfin-dino.jpg";

const teamMembers = [
  {
    name: "Alfin",
    title: "Paria",
    description: "Lorem ipsum dolor sit amet.",
    imageUrl: alfinDinoImg,
  },
  {
    name: "Axel",
    title: "Barlian",
    description: "Unite Enigmanians!",
    imageUrl: axelImg,
  },
  {
    name: "Aripin",
    title: "Paria",
    description: "Lorem ipsum dolor sit amet.",
    imageUrl:
      "https://i.pinimg.com/564x/25/b4/2b/25b42b59b9633a9198b1e5cf65bb0492.jpg",
  },
  {
    name: "Rifki",
    title: "Sigma",
    description: "Lorem ipsum dolor sit amet.",
    imageUrl:
      "https://tr.rbxcdn.com/b222158573472ec00e298c199325639b/420/420/Hat/Webp",
  },
  {
    name: "Zul",
    title: "Paria",
    description: "Lorem ipsum dolor sit amet.",
    imageUrl:
      "https://i.pinimg.com/564x/25/b4/2b/25b42b59b9633a9198b1e5cf65bb0492.jpg",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-gray-900 dark:bg-gray-900 rounded-t-lg shadow pb-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="font-light text-gray-300 lg:mb-16 sm:text-xl">
            Kami adalah tentara siber yang siap bekerja secara professional
            untuk perusahaan bangsa dan negara!
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="mt-4 w-[200px] rounded-lg sm:rounded-none sm:rounded-l-lg mx-auto"
                  src={member.imageUrl}
                  alt={`${member.name} Avatar`}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {member.title}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
