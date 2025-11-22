import React from "react";
import { motion } from "framer-motion";

function About() {
  const skills = [
    { name: "HTML / CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Git / GitHub", level: 85 },
  ];

  const education = [
    {
      degree: "Diploma in Electrical Engineering",
      college: "V.P.M.P Polytechnic College",
      year: "2013",
    },
    {
      degree: "Frontend Development Course",
      college: "Tops Technologies",
      year: "Completed in 2025",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0a0c] text-white px-8 md:px-20 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-[#111111] to-[#0a0a0c]"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#00b4d8,transparent_60%)]"></div>

      {/* ===== Section Title ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
      >
        About <span className="text-[#00b4d8]">Me</span>
      </motion.h2>

      <div className="relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center justify-center">
        {/* ===== Left: Bio ===== */}
        <motion.div
          className="flex-1 flex flex-col items-center text-center md:text-left max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-2">Maulik Patel</h3>
          <p className="text-[#00b4d8] font-medium mb-4">
            Frontend Developer
          </p>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-10">
            I’m a passionate frontend developer focused on crafting beautiful,
            responsive, and high-performing web experiences. I love working with
            modern technologies like React, Tailwind CSS, and JavaScript to
            build creative and intuitive interfaces.
          </p>
        </motion.div>
      </div>

      {/* ===== Education + Skills Section ===== */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row gap-16 mt-10 md:gap-24 justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* ===== Education ===== */}
        <div className="flex-1 max-w-md">
          <h4 className="text-2xl font-semibold text-[#00b4d8] mb-4">
            🎓 Education
          </h4>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-l-4 border-[#00b4d8] pl-4 relative"
              >
                <h5 className="text-xl font-semibold">{edu.degree}</h5>
                <p className="text-gray-400">{edu.college}</p>
                <span className="text-sm text-gray-500">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Skills ===== */}
        <div className="flex-1 max-w-md">
          <h4 className="text-2xl font-semibold text-[#00b4d8] mb-4">
            ⚡ Skills
          </h4>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-[#00b4d8] to-[#6a11cb] h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.2 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
