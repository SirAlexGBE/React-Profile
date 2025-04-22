import React from "react";
import {motion} from "framer-motion";
import {Code, Briefcase, GraduationCap, User} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-16" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Get to know me better - my journey, skills, and what drives me as a web developer.</p>
        </motion.div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Column - Personal Info */}
          <motion.div className="w-full lg:w-1/2" initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0}} transition={{duration: 0.6, delay: 0.2}}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-4 text-gray-900 dark:text-white">Who I Am</h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm Alex Kandel, a passionate web developer based in Nepal. With a keen eye for design and a love for clean code, I create responsive and user-friendly websites that deliver
                exceptional digital experiences.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                My journey in web development began 2 years ago, and since then, I've had the privilege to work on diverse projects ranging from small business websites to complex web applications.
                I'm particularly interested in creating accessible interfaces that make the web better for everyone.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                When I'm not coding, you can find me hiking in the beautiful Himalayan mountains, reading about new technologies, or contributing to open-source projects.
              </p>

              {/* Personal Details */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Name:</span>
                  <span className="text-gray-900 dark:text-white font-medium">Alex Kandel</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Email:</span>
                  <span className="text-gray-900 dark:text-white font-medium">Alexkandel03@gmail.com</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Location:</span>
                  <span className="text-gray-900 dark:text-white font-medium">Bharatpur, Nepal</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Available for:</span>
                  <span className="text-gray-900 dark:text-white font-medium">Freelance & Full-time</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div className="w-full lg:w-1/2" initial={{opacity: 0, x: 30}} animate={{opacity: 1, x: 0}} transition={{duration: 0.6, delay: 0.4}}>
            {/* Skills Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-lime-100 dark:bg-lime-900 p-3 rounded-full">
                  <Code className="w-6 h-6 text-lime-600 dark:text-lime-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-4 text-gray-900 dark:text-white">Skills</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Frontend */}
                <div className="col-span-2 sm:col-span-3">
                  <h4 className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap", "Tailwind CSS"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="col-span-2 sm:col-span-3 mt-4">
                  <h4 className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "MongoDB", "PHP", "MySQL"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="col-span-2 sm:col-span-3 mt-4">
                  <h4 className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VS Code", "Figma", "Responsive Design", "SEO Basics"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Experience Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-4 text-gray-900 dark:text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">BSc (Hons) Computer Systems Engineering (IT)</h4>
                  <p className="text-gray-600 dark:text-gray-400">ISMT College, Chitwan</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2023 - Present</p>
                </div>
              </div>

              <div className="flex items-center mt-8 mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-4 text-gray-900 dark:text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Developer Intern</h4>
                  <p className="text-gray-600 dark:text-gray-400">Intelzy Software Solutions</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2022 - Present</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">Developing responsive web applications and implementing user interfaces using React and Next.js.</p>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-lime-500"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Web Design and Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">Freelance</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2023 - Present</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">Helping Local businesses and non-profit organizations with designing and developing websites.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition hover:scale-105">
            Let's Work Together!
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
