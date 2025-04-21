import React from "react";
import profilePic from "../assets/Profile.jpg";
import {Github, Linkedin, Mail} from "lucide-react";
import {motion} from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-gray-950 via-gray-400 to-blue-800">
      <div className="lg:w-1/2 text-white flex flex-col justify-center px-8 lg:px-16 py-16">
        <h2 className="text-sm uppercase text-gray-400 mb-2">Hello, I’m</h2>
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          Alex <span className="text-black">Kandel</span>
        </h1>
        <p className="text-lg text-white mb-8 max-w-md">A Nepal based Web developer passionate about building accessible and user friendly websites.</p>
        <div className="flex items-center space-x-4">
          <a href="/contact" className="px-6 py-3 bg-lime-400 text-black font-medium rounded-full hover:bg-lime-500 transition hover:scale-105">
            Contact Me
          </a>
          <a href="mailto:Alexkandel03@example.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition  hover:scale-105">
            <Mail className="w-5 h-5 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/yaleksh-kandel-2542a4284/" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition  hover:scale-105">
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a href="https://github.com/SirAlexGBE" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition  hover:scale-105">
            <Github className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
      <div className="lg:w-1/2  flex items-center justify-center p-8 lg:p-0">
        <motion.div className="w-full lg:w-1/2 flex justify-center lg:justify-end" initial={{opacity: 0, x: 40}} animate={{opacity: 1, x: 0}} transition={{duration: 0.6, delay: 0.2}}>
          <div className="relative w-72 h-110 rounded-2xl overflow-hidden shadow-2xl">
            <img src={profilePic} alt="Alex Kandel" className="object-cover w-full h-full" />
            <div className="absolute bottom-2 right-2 bg-white text-gray-500 bg-opacity-75 px-3 py-1 rounded-full text-xs font-medium">Based in Nepal 🇳🇵</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
