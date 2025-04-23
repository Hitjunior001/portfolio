import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { FaAngular, FaReact, FaJava, FaGithub, FaLinkedin, FaEnvelope, FaNodeJs } from 'react-icons/fa';
import { SiSpringboot, SiFirebase, SiMongodb, SiMysql, SiJavascript, SiTypescript, SiPython, SiApache } from 'react-icons/si';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';

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
    "Lore Inspector",
    "Lore Inspector",
    "Lore Inspector"
  ];

  const nameText = "Reginaldo de Oliveira";
  const roleText = "Fullstack Developer, Data Analyst";
  const summaryText = "Former intern at Caixa Econômica, with hands-on experience in web development, database management, and agile methodologies (Scrum). Passionate about building scalable systems and optimizing data analysis for business insights.";

  const typedName = typeWriterEffect(nameText + '.', 50);
  const typedRole = typeWriterEffect(roleText, 20);
  const typedSummary = summaryText

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-green-400 font-mono px-6 py-12 space-y-24 overflow-hidden">

      <motion.section
        className="text-center relative z-10 flex justify-between items-center"
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
            <span className="text-green-300">{typedName}</span>
          </motion.h1>
          <motion.p
            className="text-3xl mt-4 text-green-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {typedRole}
          </motion.p>
          <motion.p
            className="text-xl mt-4 text-gray-400"
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
            Experienced in banking systems, fullstack development, and scalable solutions. Former Caixa Econômica developer. Expertise in Scrum for efficient project delivery.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-12 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center text-green-500">Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 text-center shadow-md hover:shadow-green-400 transition-all duration-300"
            >
              <div className="text-2xl text-green-300 mb-3">{tech.icon}</div>
              <span className="text-sm font-semibold text-white">{tech.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-12 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center text-green-500">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[project1, project2, project3].map((img, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={img} alt={`project${i + 1}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Project {i + 1}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  {projectDescriptions[i]}
                </p>
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
        <h2 className="text-3xl font-bold text-green-500">Special Message</h2>

        <motion.button
          onClick={toggleMessage}
          className="text-2xl font-semibold text-white bg-green-500 hover:bg-green-600 border-4 border-green-600 rounded-lg px-8 py-3 transition-all duration-300 transform hover:scale-105"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Show Message
        </motion.button>

        {showMessage && (
          <motion.p
            className="text-xl font-semibold text-gray-300 mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I love you, Maria Luiza de Moura ❤️
          </motion.p>
        )}
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 relative z-10"
      >
        <h2 className="text-2xl font-bold text-green-500">Contact</h2>
        <div className="flex justify-center gap-6 text-3xl">
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
        <p className="text-sm text-gray-500">© 2025 Reginaldo de Oliveira</p>
      </motion.section>
    </div>
  );
}
