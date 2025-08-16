'use client';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {
    const [isOpen,SetIsOpen] = useState(false)
  return (
    
    <div>
      <nav className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-transparent">
        <h1 className="text-white text-xl font-bold">My Portfolio</h1>
        <ul className="hidden md:flex gap-6">
          <li className="text-white hover:text-[#00bba7] cursor-pointer">
            Home
          </li>
          <li className="text-white hover:text-[#00bba7] cursor-pointer">
            About
          </li>
          <li className="text-white hover:text-[#00bba7] cursor-pointer">
            Projects
          </li>
          <li className="text-white hover:text-[#00bba7] cursor-pointer">
            Skills
          </li>
          <li className="text-white hover:text-[#00bba7] cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => SetIsOpen(!isOpen)}
      >
        {isOpen ? <FiX/> : <FiMenu/>}
      </div>
      
        {/* Mobile Menu */}
        {isOpen && 
          <nav className="absolute top-16 left-0 w-full bg-[#007d75] p-4">
            <ul className="flex  flex-col gap-4">
                <li className="text-white hover:text-[#00ffe5]">Home</li>
                <li className="text-white hover:text-[#00ffe5]">About</li>
                <li className="text-white hover:text-[#00ffe5]">Projects</li>
                <li className="text-white hover:text-[#00ffe5]">Skills</li>
                <li className="text-white hover:text-[#00ffe5]">Contact</li>
            </ul>
          </nav>
        }
      </nav>
    </div>
  );
};

export default Navbar;
