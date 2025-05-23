import React, {useState} from "react";
import {Github, ExternalLink, Eye, Code, Calendar, Tag} from "lucide-react";
import image1 from "../Images/GG1.png";
import image2 from "../Images/GG2.png";
import image3 from "../Images/GG3.png";
import image4 from "../Images/GG4.png";
import image5 from "../Images/GG5.png";
import r1 from "../Images/RM1.png";
import r2 from "../Images/RM2.png";
import r3 from "../Images/RM3.png";
import r4 from "../Images/RM4.png";
import r5 from "../Images/RM5.png";
import rp1 from "../Images/R1.png";
import rp2 from "../Images/R2.png";
import rp3 from "../Images/R3.png";
import rp4 from "../Images/R4.png";
import rp5 from "../Images/R5.png";
import P1 from "../Images/P1.png";
import P2 from "../Images/P2.png";
import P3 from "../Images/P3.png";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "E-Commerce Website",
      briefDescription: "Modern e-commerce Webiste with features like wishlist and add to cart",
      detailedDescription:
        "A comprehensive e-commerce site develiped using React js and Tailwind. Although its a cliché project. it is something to show my react skills. The website includes interactive elements, Seamless User Experience, and responsive design for mobile and desktop use. The features like searching, filtering, sorting, adding to wishlist , adding to cart and even ordering it and tracking the order. It includes almost everything for a front-end part",
      images: [image1, image2, image3, image4, image5],
      githubUrl: "https://github.com/SirAlexGBE/Gadget-Ghar",
      liveUrl: "https://gadget-ghar.vercel.app/",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      id: 2,
      name: "Rick & Morty Universe",
      briefDescription: "A website which to know rick and morty",
      detailedDescription:
        "Built using an Free API, This site features the poular TV show Rick and morty and describes the characters, their origin, their casted episodes and all the information. Along with that this site also features all the locations, their residents and not only that it also features different episodes and other info aboput those episodes ",
      images: [r1, r2, r3, r4, r5],
      githubUrl: "https://github.com/SirAlexGBE/API/tree/main/RickandMorty",
      liveUrl: "https://rickandmorty-tau-seven.vercel.app/",
      technologies: ["React", "Tailwind CSS", "API Integration"],
    },
    {
      id: 3,
      name: "Radiant Memories Website",
      briefDescription: "A Full-Stack Application for a Photography house ",
      detailedDescription:
        "A mordern and responsive web application with both frontend and backend along with database to showcase web development skills. it has filtering and sorting features with showcasing the fiinest work for the portfolio",
      images: [rp1, rp2, rp3, rp4, rp5],
      githubUrl: "https://github.com/username/social-analytics",
      liveUrl: "https://social-analytics-platform.com",
      technologies: ["Bootstrap", "PHP", "MySQL"],
    },
    {
      id: 4,
      name: "Portfolio Using HTML, CSS, JS and PHP",
      briefDescription: "A portfolio profile for myself",
      detailedDescription: "This is a portfolio site i made to explore different web technologies, I played around PHP-Mailer, Email routing, Cloudflare Captcha, SEO, Hosting and others ",
      images: [P1, P2, P3],
      githubUrl: "https://github.com/SirAlexGBE/portfolio",
      liveUrl: "https://yalekshkandel.com.np/?i=1",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
    },
    // {
    //   id: 5,
    //   name: "Cryptocurrency Portfolio Tracker",
    //   briefDescription: "Advanced crypto portfolio management with market analysis tools",
    //   detailedDescription:
    //     "A sophisticated cryptocurrency portfolio tracking application that provides real-time price updates, portfolio performance analytics, market trend analysis, and trading insights. Features include custom alerts, historical data visualization, and multi-exchange integration.",
    //   images: [
    //     "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=400&fit=crop",
    //     "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    //     "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
    //   ],
    //   githubUrl: "https://github.com/username/crypto-portfolio",
    //   liveUrl: "https://crypto-portfolio-tracker.com",
    //   technologies: ["React"],
    // },
    // {
    //   id: 6,
    //   name: "Recipe Sharing Platform",
    //   briefDescription: "Community-driven recipe platform with meal planning features",
    //   detailedDescription:
    //     "A vibrant recipe sharing community platform where users can discover, share, and organize recipes. Features include meal planning, shopping list generation, nutritional information, recipe rating system, and social features for following favorite chefs.",
    //   images: [
    //     "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
    //     "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
    //     "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
    //   ],
    //   githubUrl: "https://github.com/username/recipe-platform",
    //   liveUrl: "https://recipe-sharing-platform.com",
    //   technologies: ["React"],
    // },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  // Get unique technologies for filtering
  const allTechnologies = [...new Set(projectsData.flatMap((project) => project.technologies))];

  // Filter projects based on selected technology
  const filteredProjects = filter === "all" ? projectsData : projectsData.filter((project) => project.technologies.includes(filter));

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const cardColors = [
    {bg: "bg-gradient-to-br from-purple-50 to-pink-50", border: "border-purple-200", accent: "text-purple-600"},
    {bg: "bg-gradient-to-br from-blue-50 to-cyan-50", border: "border-blue-200", accent: "text-blue-600"},
    {bg: "bg-gradient-to-br from-green-50 to-emerald-50", border: "border-green-200", accent: "text-green-600"},
    {bg: "bg-gradient-to-br from-orange-50 to-red-50", border: "border-orange-200", accent: "text-orange-600"},
    {bg: "bg-gradient-to-br from-indigo-50 to-purple-50", border: "border-indigo-200", accent: "text-indigo-600"},
    {bg: "bg-gradient-to-br from-rose-50 to-pink-50", border: "border-rose-200", accent: "text-rose-600"},
  ];

  const techColors = [
    "bg-purple-100 text-purple-800",
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-orange-100 text-orange-800",
    "bg-indigo-100 text-indigo-800",
    "bg-rose-100 text-rose-800",
    "bg-cyan-100 text-cyan-800",
    "bg-emerald-100 text-emerald-800",
    "bg-amber-100 text-amber-800",
    "bg-teal-100 text-teal-800",
  ];

  const ProjectCard = ({project, index}) => {
    const colorScheme = cardColors[index % cardColors.length];

    return (
      <div
        className={`group ${colorScheme.bg} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border ${colorScheme.border} hover:border-opacity-60`}
        onClick={() => handleProjectClick(project)}
      >
        <div className="relative overflow-hidden">
          <img src={project.images[0]} alt={project.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              <Eye className="w-4 h-4 text-gray-700" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover:${colorScheme.accent} transition-colors duration-200`}>{project.name}</h3>
          <p className="text-gray-700 mb-4 line-clamp-2">{project.briefDescription}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span key={tech} className={`px-3 py-1 ${techColors[techIndex % techColors.length]} text-xs font-medium rounded-full`}>
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">+{project.technologies.length - 3} more</span>}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-1 rounded-full hover:bg-white/60"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 hover:${colorScheme.accent} transition-colors duration-200 p-1 rounded-full hover:bg-white/60`}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <span className={`text-sm ${colorScheme.accent} font-medium`}>View Details →</span>
          </div>
        </div>
      </div>
    );
  };

  const ProjectModal = ({project, onClose}) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img src={project.images[0]} alt={project.name} className="w-full h-64 object-cover rounded-t-2xl" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200">
            <span className="text-xl font-semibold text-gray-700">×</span>
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">{project.detailedDescription}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Project Links
              </h3>
              <div className="flex flex-col gap-3">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              </div>
            </div>
          </div>

          {project.images.length > 1 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <img key={index} src={image} alt={`${project.name} screenshot ${index + 2}`} className="w-full h-32 object-cover rounded-lg" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Explore my portfolio of web applications, showcasing expertise in modern development technologies and innovative solutions.</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${filter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            All Projects
          </button>
          {allTechnologies.slice(0, 8).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${filter === tech ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found with the selected technology.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default Projects;
