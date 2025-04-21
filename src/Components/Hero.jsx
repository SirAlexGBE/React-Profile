import React from "react";
import profilePic from "../assets/Profile.jpg";
import {Github, Linkedin, Mail} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-gray-950 via-gray-400 to-blue-500">
      <div className="lg:w-1/2 text-white flex flex-col justify-center px-8 lg:px-16 py-16">
        <h2 className="text-sm uppercase text-gray-400 mb-2">Hello, I’m</h2>
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          Alex <span className="text-black">Kandel</span>
        </h1>
        <p className="text-lg text-white mb-8 max-w-md">Full‑Stack & UI/UX Developer building modern, responsive web experiences from Nepal 🇳🇵.</p>
        <div className="flex items-center space-x-4">
          <a href="#contact" className="px-6 py-3 bg-lime-400 text-black font-medium rounded-full hover:bg-lime-500 transition">
            Contact Me
          </a>
          <a href="mailto:Alexkandel03@example.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <Mail className="w-5 h-5 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/yaleksh-kandel-2542a4284/" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a href="https://github.com/SirAlexGBE" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <Github className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>

      <div className="lg:w-1/2  flex items-center justify-center p-8 lg:p-0">
        <div className="w-full max-w-sm bg-white/20 backdrop-blur-lg rounded-[2rem] overflow-hidden shadow-2xl">
          <img src={profilePic} alt="Alex Kandel" className="w-full h-120 object-cover" />
        </div>
      </div>
    </section>
  );
}
