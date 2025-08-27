"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaReact , FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPython } from "react-icons/si";
import profile_image from "../Assets/ahzaz pic.jpg"; // Adjust the path as necessary
import Link from "next/link";

export default function Hero() {
  const roles = ["Frontend Developer", "Learning AI", "Agentic AI"];
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <section className="min-h-screen flex flex-col-reverse py-30 gap-y-10 md:flex-row md:gap-4 items-center justify-between px-10 bg-[linear-gradient(to_bottom,#00bba7_0%,#00a097_40%,#005f78_100%)] text-white">
      
      {/* Left Side */}
      <div className="flex flex-col gap-6 max-w-lg pl-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl  lg:text-6xl  font-bold"
        >
          Hi, I’m Ahzaz
        </motion.h1>

        <motion.h2 
          key={roleIndex} 
          className="text-2xl md:text-3xl font-semibold text-[#e0f7f5] min-h-[40px]"
        >
          {displayedText}
        </motion.h2>
        
        {/* Tech Stack Icons */}
        <div className="flex gap-6 text-4xl">
          <FaReact className="hover:text-cyan-400 transition-colors duration-200" />
          <SiNextdotjs className="hover:text-gray-400 transition-colors duration-200" />
          <SiTailwindcss className="hover:text-sky-400 transition-colors duration-200" />
          <SiTypescript className="hover:text-blue-400 transition-colors duration-200" />
          <SiPython className="hover:text-yellow-400 transition-colors duration-200" />
        </div>
        <div className="flex gap-4 items-center mt-4">
        <motion.button className="text-white border-2 border-white font-semibold w-fit p-2 rounded-lg hover:bg-white hover:text-[#005f78]">
          Download Resume
        </motion.button>
        
          <Link href="https://github.com/AHZAZAHMED" rel="noopener noreferrer" target="_blank" className="text-4xl hover:text-[#00a097] hover:bg-white rounded-full hover:scale-110 transition-colors duration-200">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/ahzaz-ahmed-a41606277/" rel="noopener noreferrer" target="_blank" className="text-4xl hover:text-[#00a097] hover:bg-white rounded-lg hover:scale-110 transition-colors duration-200">
            <FaLinkedin />
          </Link>
        
        </div>
      </div>

      {/* Right Side (Profile Picture) */}
      <motion.div 
        whileHover={{ scale: 1.05, rotate: 2 }} 
        transition={{ type: "spring", stiffness: 200 }}
        className="mt-10 md:mt-0 md:pr-20"
      >
        <Image
          src={profile_image} // Replace with your actual image in public folder
          alt="My Picture"
          width={250}
          height={250}
          className="rounded-full border-4 border-white shadow-xl"
        />
      </motion.div>
    </section>
  );
}
