"use client";
import { useEffect, useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FiMoon,
  FiSun,
  FiEye,
  FiLinkedin,
  FiExternalLink,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";
import { SiElectron, SiMongodb, SiCss3, SiHtml5 } from "react-icons/si";
import profilePic from "@/image/profile.jpg";
const ThemeContext = createContext();

export default function Page() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}
function Home() {
  const { theme } = useContext(ThemeContext);
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => setShowContent(true), 1000);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full min-h-screen overflow-x-hidden relative transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <ThemeToggleButton />

      <AnimatePresence>
        {showIntro && (
          <motion.div
            exit={{ opacity: 0 }}
            className="flex items-center justify-center h-screen"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              exit={{
                x: "120vw",
                width: "500px",
                height: "8px",
                transition: { duration: 1.5, ease: "easeIn" },
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className={`w-16 h-16 rounded-full ${
                theme === "dark"
                  ? "bg-yellow-400 shadow-[0_0_80px_30px_rgba(250,204,21,0.7)]"
                  : "bg-blue-500 shadow-[0_0_80px_30px_rgba(93,95,239,0.7)]"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <div className="w-full p-8 flex flex-col items-center">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Image
                  src={profilePic}
                  alt="Muhammad Talha"
                  width={200}
                  height={200}
                  className="object-cover w-32 h-32 md:w-48 md:h-48 rounded-full md:rounded-3xl shadow-lg border-4 border-gray-700"
                  priority
                />
              </motion.div>

              <div className="flex flex-col items-center md:items-start">
                <AnimatedText text="Muhammad Talha" />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className={`mt-4 text-lg md:text-xl max-w-xl ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  A passionate Full-Stack Developer with 6 months of hands-on
                  experience in building innovative web and mobile solutions. My
                  expertise lies in React, React Native, and Node.js, and I am
                  driven to create seamless, user-friendly applications.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="flex gap-4 mt-8"
                >
                 
                  <a
                    href="/Muhammad_Talha_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all no-underline ${
                      theme === "dark"
                        ? "bg-yellow-400 text-black hover:bg-yellow-300"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    <FiEye /> View My CV
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-talha-936b071a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all no-underline ${
                      theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    <FiLinkedin /> Contact Me
                  </a>
                </motion.div>
              </div>
            </motion.section>

            <SkillsSection />

            <motion.section
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-6xl mx-auto py-24"
            >
              <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               
                <ProjectCard
                  title="Halal Connect"
                  description="A full-stack web app designed to bridge the gap between halal consumers and certified businesses. Features include a powerful search engine, user reviews and ratings, and detailed business profiles to foster a trusted community."
                  tags={["Next.js", "React.js", "TailwindCSS"]}
                  className="md:col-span-2"
                  liveLink="https://halal-connect.vercel.app/login"
                />
                <ProjectCard
                  title="HomeStyle Furniture Website"
                  description="A web platform for managing furniture shop operations with role-based access control for admins, shop owners, and customers."
                  tags={["React.js", "Node.js", "MongoDB"]}
                  className="md:col-span-1"
                />
              
                <ProjectCard
                  title="WagSafe App"
                  description="A real-time mobile application for pet safety, built with React Native and Firebase. Users can track pets on an interactive MapBox map, receive hazard alerts (e.g., broken glass, stray animals), manage detailed pet profiles, and engage with the community for lost & found posts."
                  tags={["React Native", "Firebase", "MapBox"]}
                  className="md:col-span-1"
                />

                <ProjectCard
                  title="Desktop App for SMHcoders"
                  description="An Electron app with a Python backend for processing CSV files, featuring real-time status updates via WebSockets."
                  tags={["Electron", "Python", "React", "MySQL"]}
                  className="md:col-span-2"
                />
              </div>
            </motion.section>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
const AnimatedText = ({ text }) => {
  return (
    <h1 className="text-center md:text-left text-5xl md:text-7xl font-extrabold">
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap md:mr-4"
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + (wordIndex * 0.2 + letterIndex * 0.03),
                duration: 0.5,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
};
const SkillsSection = () => {
  const { theme } = useContext(ThemeContext);
  const skills = [
    { name: "React.js", icon: <FaReact size={40} className="text-blue-400" /> },
    {
      name: "React Native",
      icon: <FaReact size={40} className="text-purple-400" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} className="text-green-400" />,
    },
    {
      name: "Python",
      icon: <FaPython size={40} className="text-yellow-400" />,
    },
    {
      name: "Electron",
      icon: <SiElectron size={40} className="text-teal-400" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} className="text-green-500" />,
    },
    { name: "MySQL", icon: <FaDatabase size={40} className="text-blue-500" /> },
    { name: "HTML5", icon: <SiHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 size={40} className="text-blue-500" /> },
    { name: "Figma", icon: <FaFigma size={40} className="text-pink-500" /> },
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto py-24 text-center"
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ y: -10 }}
            className={`p-6 rounded-xl flex flex-col items-center gap-4 transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-800" : "bg-white shadow-md"
            }`}
          >
            {skill.icon}
            <p className="font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
const ProjectCard = ({ title, description, tags, className, liveLink }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`p-8 rounded-2xl shadow-lg cursor-pointer transition-colors duration-500 flex flex-col justify-between min-h-[250px] ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } ${className}`}
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
          {description}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-sm rounded-full ${
                theme === "dark"
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 text-sm rounded-lg font-semibold whitespace-nowrap transition-all no-underline ${
              theme === "dark"
                ? "bg-gray-600 hover:bg-yellow-400 hover:text-black"
                : "bg-gray-200 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo <FiExternalLink />
          </a>
        )}
      </div>
    </motion.div>
  );
};
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-5 right-5 z-50 p-3 rounded-full transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-700 text-white hover:bg-yellow-400"
          : "bg-gray-200 text-black hover:bg-blue-500"
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`w-full text-center py-8 border-t ${
        theme === "dark" ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <p>
        &copy; {new Date().getFullYear()} Muhammad Talha. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.linkedin.com/in/muhammad-talha-936b071a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors"
        >
          <FiLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};
