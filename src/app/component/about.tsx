'use client'
import Image from "next/image";
import profile_image from "../Assets/ahzaz pic.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,#005f78_0%,#00a097_100%)] px-10">
    
      <motion.h1 
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      className="text-5xl font-semibold text-[#e0f7f5] text-center pt-8">
        About Me
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-center  mt-10">
        {/*Left side*/}
        <motion.div 
          initial={{ opacity: 0, x: -100}}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 0.8}}
        className="md:w-1/3 pl-4 md:pl-10">
          <Image
            src={profile_image}
            alt="my picture"
            width={200}
            height={200}
            className="rounded-full mx-auto mt-10 border-4 border-white shadow-lg"
          />
        </motion.div>
        {/*Right side*/}
        <motion.div
          initial={{ opacity: 0, x: 100}}
          whileInView={{ opacity:1, x:0}}
          transition={{ duration: 0.8, delay: 0.2}}
         className="max-w-2xl mx-auto mt-10 text-[#e0f7f5]">
          <p className="text-lg leading-relaxed">
            I'm <span className="font-semibold">Ahzaz</span>, an undergraduate
            Computer Engineering student passionate about building modern,
            user-friendly web applications. My toolkit includes{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">React.js</span>,{" "}
            <span className="font-semibold">TailwindCSS</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and{" "}
            <span className="font-semibold">Python</span>.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Currently, I’m exploring <span className="font-semibold">Agentic AI</span> to expand my expertise and aim
            for a future career as an AI developer. I love solving problems,
            learning new technologies, and building projects that make an
            impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
