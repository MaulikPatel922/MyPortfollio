import React from "react";
import { motion } from "framer-motion";
import Mobileecommerce from "../Assets/Images/Mobileecom.png";
import Employeestask from "../assets/Images/Employeestask.png";
import DoctorAppoiment from "../assets/Images/DoctorAppoiment.png"

function Projects() {
  const projects = [
    {
      title: "Doctor Appointment System",
      description:
        "An advanced web application for booking and managing doctor appointments with real-time availability tracking and admin dashboard.",
      tech: ["React", "Tailwind CSS", "LocalStorage"],
      link: "https://maulikpatel922.github.io/DoctorAppoiment/",
      image: `url(${DoctorAppoiment})`  

    },
    {
      title: "Mobile Shop E-Commerce",
      description:
        "Mobile Ecommerce is a responsive online store built with React and Tailwind CSS, featuring a sleek design and seamless user experience for browsing and purchasing mobile phones.",
      tech: ["React", "Tailwind","JSON"],
      link: " https://maulikpatel922.github.io/Mobileshop/",
      image: `url(${Mobileecommerce})`
    },
    {
      title: "Employee Task Manager",
      description:
        "A productivity app that allows managers to assign, track, and manage employee tasks efficiently using React and LocalStorage.",
      tech: ["React", "LocalStorage", "GSAP"],
      link: "https://maulikpatel922.github.io/EmployeesTask/",
      image: `url(${Employeestask})`
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0a0a0c] text-white px-8 md:px-20 pt-28 pb-20 relative overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-[#111111] to-[#0a0a0c]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_right,#00b4d8,transparent_70%)]" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-20"
      >
        My <span className="text-[#00b4d8]">Projects</span>
      </motion.h2>

      {/* Project Cards */}
      <div className="relative z-10 flex flex-col gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Card Image Placeholder */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full md:w-1/2 h-64 md:h-80 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(0,180,216,0.3)] border border-white/10 cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute h-72 inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: project.image,
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00b4d8]/40 via-transparent to-[#6a11cb]/40" />

              {/* Title */}
              <h3 className="absolute bottom-3 left-4 text-2xl font-bold text-white z-10 hover:underline hover:text-blue-500">
                <a href={project.link} target="_blank">{project.title}</a>
              </h3>
            </motion.div>

            {/* Card Content */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4 text-[#9fa8a8]">
                {project.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm border border-[#00b4d8]/50 rounded-full bg-[#111111] text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#00b4d8] to-[#6a11cb] text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_#00b4d8] transition-all"
              >
                View Project →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Lights */}
      <div className="absolute top-32 left-20 w-40 h-40 bg-[#00b4d8]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#6a11cb]/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}

export default Projects;
