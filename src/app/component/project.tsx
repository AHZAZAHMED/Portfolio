import Image from "next/image";
import profile_image from "../Assets/ahzaz pic.jpg";
import Link from "next/link";

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Project 1",
            description: "This is the first project.",
            image: {profile_image},
            github_link: "https://github.com/AHZAZAHMED",
            demo_link:"https://nikeui-orcin.vercel.app/"
            
        },
        {
            id: 2,
            name: "Project 1",
            description: "This is the first project.",
            image: {profile_image},
            github_link: "https://github.com/AHZAZAHMED",
            demo_link:"https://nikeui-orcin.vercel.app/"
            
        },
        {
            id: 3,
            name: "Project 1",
            description: "This is the first project.",
            image: {profile_image},
            github_link: "https://github.com/AHZAZAHMED",
            demo_link:"https://nikeui-orcin.vercel.app/"
            
        }
    ]
    return(
        <div className="min-h-screen bg-[linear-gradient(to_bottom,#ffffff_0%,#e6f8f6_100%)] p-10">
            
            <h1 className="text-5xl font-semibold text-[#005f78] text-center mb-10">Projects</h1>
            <div className="flex flex-wrap gap-10 justify-center">
            {
                projects.map((projects)=>(
                    <div key={projects.id} className="flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,#00bba7_0%,#00a097_40%,#005f78_100%)] w-fit h-fit p-6 rounded-lg shadow-lg gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* left side */}
                        <div className="flex flex-col items-center justify-center">
                        <Image  src={profile_image} alt="my_image" width={200} height={200} className="border-2 rounded-lg"/>
                        <h1 className="text-3xl font-semibold text-[#e0f7f5]  ">{projects.name}</h1>
                        
                        </div>
                        {/* right side */}
                        <div>
                            <p className="text-[#e0f7f5]">{projects.description}</p>

                        </div>
                    </div>
                        <div className="flex gap-4 mt-4 justify-between w-full px-10">
                            <button className="text-white font-semibold p-2 px-6 border-2 border-white rounded-lg bg-transparent hover:bg-white hover:text-transition-colors hover:text-blue-600 duration-200">
                                <Link href={projects.github_link} target="_blank" rel="noopener noreferrer" className="">GitHub</Link>
                            </button>
                            <button className="text-white font-semibold p-2 px-6 border-2 border-white rounded-lg bg-transparent hover:bg-white hover:text-transition-colors hover:text-blue-600 duration-200">
                                <Link href={projects.demo_link} target="_blank" rel="noopener noreferrer" className="">Demo</Link>
                            </button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Projects;