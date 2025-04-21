import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Menu, X} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    {name: "Home", to: "/"},
    {name: "About", to: "/about"},
    {name: "Projects", to: "/projects"},
    {name: "Skills", to: "/skills"},
    {name: "Contact", to: "/contact"},
  ];

  const linkClasses = ({isActive}) => `relative uppercase tracking-wide font-medium transition ${isActive ? "text-blue-400" : "text-white hover:text-blue-400"}`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-40 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-extrabold text-white">
          Alex<span className="text-blue-400">K.</span>
        </NavLink>

        <ul className="hidden md:flex space-x-8">
          {links.map(({name, to}) => (
            <li key={to}>
              <NavLink end to={to} className={linkClasses}>
                {name}
                <span className="absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`md:hidden bg-black bg-opacity-60 backdrop-blur-md transition-all duration-300 ${open ? "max-h-screen py-6" : "max-h-0 overflow-hidden"}`}>
        <ul className="flex flex-col items-center space-y-6">
          {links.map(({name, to}) => (
            <li key={to} onClick={() => setOpen(false)}>
              <NavLink end to={to} className={linkClasses}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
