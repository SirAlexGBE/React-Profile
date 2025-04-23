import React from "react";
import {motion} from "framer-motion";
import {Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-16" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">I'd love to hear from you — whether it's a project, opportunity, or just to chat!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            className="space-y-4 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8"
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="w-full px-4 py-3 rounded-lg bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8"
            initial={{opacity: 0, x: 30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <Mail /> Alexkandel03@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone /> +977-9842852413
              </div>
              <div className="flex items-center gap-3">
                <MapPin /> Bharatpur, Nepal
              </div>
            </div>
            <div className="flex gap-4 mt-6 flex-wrap text-blue-600 dark:text-blue-400">
              <a href="https://github.com/SirAlexGBE" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/yaleksh-kandel-2542a4284/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <Linkedin size={28} />
              </a>
              <a href="https://x.com/Sir69Alex" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <Twitter size={28} />
              </a>
              <a href="https://facebook.com/Neonales" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <Facebook size={28} />
              </a>
              <a href="https://instagram.com/Sir69Alex" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <Instagram size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
