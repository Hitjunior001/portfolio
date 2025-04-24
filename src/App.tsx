import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  FaAngular, FaReact, FaJava, FaGithub, FaLinkedin, FaEnvelope, FaNodeJs
} from 'react-icons/fa';
import {
  SiSpringboot, SiFirebase, SiMongodb, SiMysql, SiJavascript, SiTypescript, SiPython, SiApache
} from 'react-icons/si';
import { Monitor, Link2, Settings } from "lucide-react";
import "./index.css";


const typeWriterEffect = (text: string, delay = 60) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(typedText + text[index]);
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, typedText, delay]);

  return typedText;
};

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const toggleMessage = () => setShowMessage(!showMessage);

  const techs = [
    { icon: <FaReact />, label: 'ReactJS' },
    { icon: <FaNodeJs />, label: 'NodeJS' },
    { icon: <FaAngular />, label: 'AngularJS' },
    { icon: <FaJava />, label: 'Java' },
    { icon: <SiSpringboot />, label: 'Spring Boot' },
    { icon: <SiFirebase />, label: 'Firebase' },
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <SiMysql />, label: 'MySQL' },
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <SiPython />, label: 'Python' },
    { icon: <SiApache />, label: 'Apache' },
  ];

  const projectDescriptions = [
    {
      title: "PlayerFinder",
      description:
        "PlayerFinder is a project developed with Java for the backend and ReactJS for the frontend. It utilizes modern technologies such as Spring Boot, Tailwind CSS, and Firebase for real-time database management and user authentication. The application connects players based on their skill levels and game preferences, helping them find teammates or opponents for various games.",
      technologies: [
        "Java",
        "Spring Boot",
        "ReactJS",
        "Tailwind CSS",
        "Firebase",
      ],
      githubLink: "https://github.com/Hitjunior001/PlayerFinder-Ceub-",

    },
    {
      title: "Cooperative Member Management System",
      description:
        "A web-based system for managing cooperative members, designed to help organize and track member contributions, profiles, and interactions. The system uses advanced filtering to search for members based on specific skills, qualifications, and contributions. It supports roles like members, administrators, and coordinators, providing a user-friendly interface for seamless management.",
      technologies: ["Spring Boot", "MySQL", "Thymeleaf", "Java", "JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Hitjunior001/Sistema_Cooperados/", 
    },
    {
      title: "Cooperative Member Management System",
      description:
        "A back-end application developed in Node.js designed for managing cooperative members in a database. This project aims to provide an efficient and scalable solution to organize and maintain information about members of a financial institution. It offers real-time data management and filtering capabilities, providing a user-friendly interface for administrators and coordinators to track member contributions, profiles, and activities.",
      technologies: ["Node.js", "ReactJS", "EJS", "MySQL", "JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Hitjunior001/cooperX", 
    },
  ];

  const nameText = "Reginaldo & Gabriel";
  const roleText = "Fullstack Team | Data | Innovation";
  const summaryText = "We are a passionate tech team made up of developers with complementary experiences. We come together to build robust and innovative solutions in web, databases, automation, and data analysis. We work with a focus on performance and scalability.";

  const typedName = typeWriterEffect(nameText + '.', 50);
  const typedRole = typeWriterEffect(roleText, 20);
  const typedSummary = summaryText;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-blue-300 font-mono px-6 py-12 space-y-24 overflow-hidden">

      <motion.section
        className="text-center relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex-1 text-left">
          <motion.h1
            className="text-6xl font-extrabold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 }}
          >
            <span className="text-blue-400 animate-flicker">{typedName}</span>
          </motion.h1>
          <motion.p
            className="text-3xl mt-4 text-blue-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {typedRole}
          </motion.p>
          <motion.p
            className="text-xl mt-4 text-gray-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {typedSummary}
          </motion.p>
        </div>

        <div className="flex-1 text-right">
          <motion.p
            className="text-lg text-gray-400"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our mission is to turn ideas into complete technological solutions that stand out for their efficiency, aesthetics, and innovation. We work on projects that make a real impact.
          </motion.p>
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" rounded-2xl p-10 shadow-2xl text-white space-y-8"
      >
        <h2 className="text-4xl font-bold text-center text-blue-400 drop-shadow-lg glitch-text animate-flicker">
          [ We Turn Ideas Into Digital Experiences ]
        </h2>

        <p className="text-xl text-center text-gray-200 max-w-4xl mx-auto">
          We build complete websites from{" "}
          <span className="text-blue-400 font-semibold">Figma designs</span>,
          develop{" "}
          <span className="text-blue-400 font-semibold">robust APIs</span> for smart integrations,
          and deliver{" "}
          <span className="text-blue-400 font-semibold">robust sites, </span>
          <span className="text-blue-400 font-semibold">fast, secure, and modern systems</span>.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-6 border-l-4 border-blue-400 shadow-lg"
          >
            <Monitor className="text-blue-300 mb-4 w-8 h-8" />
            <h3 className="text-2xl font-semibold text-blue-300">Websites & Portals</h3>
            <p className="text-gray-300 mt-2">
              From layout to code. We deliver the full experience with performance and aesthetics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-6 border-l-4 border-blue-400 shadow-lg"
          >
            <Link2 className="text-blue-300 mb-4 w-8 h-8" />
            <h3 className="text-2xl font-semibold text-blue-300">API Integrations</h3>
            <p className="text-gray-300 mt-2">
              REST, Firebase, NodeJS, Python—everything needed to connect your system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-6 border-l-4 border-blue-400 shadow-lg"
          >
            <Settings className="text-blue-300 mb-4 w-8 h-8" />
            <h3 className="text-2xl font-semibold text-blue-300">Custom Solutions</h3>
            <p className="text-gray-300 mt-2">
              Tailored systems, automations, backoffices, and much more with scalability.
            </p>
          </motion.div>
        </div>
        <div className="text-center pt-6">
          <a href="#contact">
            <button className="bg-blue-400 hover:bg-blue-300 text-black font-bold py-3 px-6 rounded-xl shadow-lg transition">
              Request Your Project
            </button>
          </a>
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-12 relative z-10 rounded-2xl p-10 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-center text-blue-400 drop-shadow-lg glitch-text animate-flicker">[ Technologies We Master ]</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 text-center shadow-md hover:shadow-blue-300 transition-all duration-300"
            >
              <div className="text-2xl text-blue-300 mb-3">{tech.icon}</div>
              <span className="text-sm font-semibold text-white tracking-normal transition-all duration-500 hover:tracking-wider hover:animate-flicker">{tech.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-12 relative z-10 rounded-2xl p-10 shadow-2xl pointer"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400 drop-shadow-lg glitch-text animate-flicker">
        [ Featured Projects ]
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectDescriptions.map((project, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-48 object-cover"
            /> */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4">
                <h4 className="text-md text-blue-400">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-300 px-3 py-1 bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Botão para o GitHub */}
                <div className="mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl font-bold text-blue-400 glitch-text animate-flicker">[ Special Message ] </h2>

        <motion.button
          onClick={toggleMessage}
          className="text-2xl font-semibold text-white bg-blue-500 hover:bg-blue-600 border-4 border-blue-600 rounded-lg px-8 py-3 transition-all duration-300 transform hover:scale-105"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {showMessage ? 'Hide Message' : 'Show Message'}
        </motion.button>

        {showMessage && (
          <motion.p
            className="text-xl font-semibold text-gray-300 mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            “Together we go further. Technology is the bridge between ideas and reality.”
          </motion.p>
        )}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 py-24 text-center text-blue-400 overflow-hidden"
        id="contact"
      >
        <h2 className="text-3xl font-bold tracking-widest mb-16 glitch-text">[ CONTACT US ]</h2>

        <div className="flex flex-col md:flex-row justify-center gap-16 relative z-10">
          <div className="group">
            <h3 className="text-xl font-bold tracking-wider mb-4 animate-flicker">Reginaldo Oliveira</h3>
            <div className="flex gap-6 text-3xl justify-center opacity-90 transition duration-500 group-hover:opacity-100">
              <a href="https://github.com/Hitjunior001" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/reginaldo-oliveira-8926b2225/" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaLinkedin />
              </a>
              <a href="mailto:junior_ferraz_11@hotmail.com" className="hover:text-white">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="group">
            <h3 className="text-xl font-bold tracking-wider mb-4 animate-flicker delay-1000">Gabriel Nunes</h3>
            <div className="flex gap-6 text-3xl justify-center opacity-90 transition duration-500 group-hover:opacity-100">
              <a href="https://github.com/BigBielNunes" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/gabrielnsm/" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaLinkedin />
              </a>
              {/* <a href="mailto:junior_ferraz_11@hotmail.com" className="hover:text-white">
                <FaEnvelope />
              </a> */}
            </div>
          </div>
        </div>

        <p className="mt-16 text-sm text-gray-500 animate-fade">© 2025 Reginaldo & Gabriel</p>
      </motion.section>
    </div>
  );
}
