import React from "react";
import profilePic from "../assets/Profile.jpg";
import profilePic2 from "../assets/Profile2.jpg";
import {Github, Linkedin, Mail} from "lucide-react";
import {motion} from "framer-motion";
import FloatingDonut from "./FloatingDonut";
export default function Hero() {
  return (
    <section id="home" className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-gray-950 via-gray-400 to-blue-400 relative overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Background floating elements - adjusted position for all screen sizes */}
      <FloatingDonut size="50px" color="rgba(156, 163, 175, 0.3)" duration={Infinity} style={{left: "10%", top: "20%", display: "block"}} />

      <FloatingDonut size="70px" color="rgba(96, 165, 250, 0.3)" duration={Infinity} style={{right: "15%", bottom: "15%", display: "block"}} />

      <FloatingDonut size="100px" color="rgba(134, 239, 172, 0.3)" duration={Infinity} style={{left: "50%", top: "10%", display: "block"}} />

      <div className="w-full lg:w-1/2 text-white flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 relative z-10">
        {/* Increased contrast and visibility for small screens */}
        <h2 className="text-md uppercase text-gray-200 font-medium mb-2 bg-opacity-30 inline-block px-2 py-1 rounded">Hello, I'm</h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          Alex <span className="dark:text-blue-400">Kandel</span>
        </h1>
        <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-md">A Nepal based Web developer passionate about building accessible and user friendly websites.</p>

        {/* Social buttons - made more compact on mobile */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a href="/contact" className="px-4 sm:px-6 py-2 sm:py-3 bg-lime-400 text-black font-medium rounded-full hover:bg-lime-500 transition hover:scale-105">
            Contact Me
          </a>

          <a href="mailto:Alexkandel03@gmail.com" className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition hover:scale-105">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>

          <a href="https://www.linkedin.com/in/yaleksh-kandel-2542a4284/" target="_blank" rel="noreferrer" className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition hover:scale-105">
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>

          <a href="https://github.com/SirAlexGBE" target="_blank" rel="noreferrer" className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition hover:scale-105">
            <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Image Container - reduced spacing between image and text content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start p-4 sm:p-6 lg:p-4 relative z-10 mt-4 lg:mt-0">
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center lg:justify-start"
          initial={{opacity: 0, x: 40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay: 0.2}}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img src={profilePic2} alt="Alex Kandel" className="object-cover w-full h-full" />
            <div className="absolute bottom-2 right-2 bg-white text-gray-500 bg-opacity-75 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium hover:scale-105 transition-transform">
              Based in Nepal 🇳🇵
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
