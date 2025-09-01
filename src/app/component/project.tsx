import Image from "next/image";
import profile_image from "../Assets/ahzaz pic.jpg";
import Link from "next/link";
import nikeui from "../Assets/nikeui.png";
import countdown from "../Assets/countdown_timer.png";
import website from "../Assets/website.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "NIKEUI",
      description: "A multi-page e-commerce app with product showcase, cart, and login system.",
      image: nikeui,
      github_link: "https://github.com/AHZAZAHMED/nikeui",
      demo_link: "https://nikeui-orcin.vercel.app/",
    },
     {
      id: 2,
      name: "CountDown Timer",
      description: "A clean and interactive timer app with set, start, pause, and reset controls — built to strengthen my understanding of React states and event handling while practicing UI design.",
      image: countdown,
      github_link: "https://github.com/AHZAZAHMED/Frontend-Projects/tree/main/countdown-timer",
      demo_link: "https://frontend-projects-uh4q.vercel.app/",
    },
    {
      id: 3,
      name: "First Next.js App",
      description: "Beginner-level web app built with Next.js, featuring only static pages and design elements.",
      image: website,
      github_link: "https://github.com/AHZAZAHMED/Q2---assingments/tree/main/Assingment-3",
      demo_link: "https://q2-assingments-js6w.vercel.app/"
    },
  ];
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#ffffff_0%,#e6f8f6_100%)] p-10 flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-[#005f78] text-center mb-10">
        Projects
      </h1>
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center px-10 sm:px-0">
        {projects.map((projects) => (
          <div
            key={projects.id}
            className="card relative flex flex-col  items-center 
             bg-[linear-gradient(to_bottom,#00bba7_0%,#00a097_40%,#005f78_100%)] 
             w-full hover:min-h-fit rounded-lg shadow-lg group hover:scale-105 hover:max-h-full transition-all duration-500 ease-in-out"
          >
            {/* Image */}
            <Image
              src={projects.image}
              alt={projects.name}
              className="w-full max-w-full h-auto object-contain rounded-lg 
               transition-transform duration-300 group-hover:scale-105 "
            />

            

            {/* Text overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center 
                  text-center px-4 text-gray-700 
                  opacity-0 group-hover:opacity-100 
                   bg-white/70 rounded-lg hover:scale-105 group-hover:max-h-full transition-all duration-500 ease-in-out"
            >
              <h2 className="font-semibold text-xl">{projects.name}</h2>
              <p className="mt-2 px-6 text-xs">{projects.description}</p>

              <div className="flex gap-2 mt-4 pb-4">
                <Link
                  href={projects.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="font-semibold p-2 px-6 border-2 border-white rounded-lg 
                           bg-transparent hover:bg-white hover:text-blue-600 
                           transition-colors duration-200"
                  >
                    GitHub
                  </button>
                </Link>

                <Link
                  href={projects.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="font-semibold p-2 px-6 border-2 border-white rounded-lg 
                           bg-transparent hover:bg-white hover:text-blue-600 
                           transition-colors duration-200"
                  >
                    Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
