import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import HeroImg from "../assets/Images/profileimg.jpeg"; // Make sure to have your profile image in the specified path
import Resume from "../assets/Maulik_Patel.pdf"; // Make sure to have your resume in the specified path
function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-[#0a0a0c] text-white overflow-hidden px-8 md:px-20 pt-24"
    >
      {/* Background gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#1a1a1d] to-[#111111]"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#00b4d8,transparent_60%)]"></div>

      {/* ===== Left Side (Text Section) ===== */}
      <motion.div
        className="relative z-10 md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-lg md:text-xl text-[#00b4d8] font-semibold tracking-widest uppercase">
          Hello, I’m
        </h3>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Maulik Patel
          <span className="block bg-gradient-to-r from-[#00b4d8] to-[#6a11cb] bg-clip-text text-transparent">
            Frontend Developer
          </span>
        </h1>

        <p className="text-gray-400 max-w-md">
          I design and build modern, interactive, and responsive web interfaces.
          Passionate about crafting clean UI and smooth UX with React, Tailwind,
          and a creative touch.
        </p>

        {/* ===== Buttons Section ===== */}
        <div className="flex flex-wrap gap-5 pt-4">
          <NavLink
            to="/projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#6a11cb] font-semibold hover:shadow-[0_0_20px_#00b4d8] transition duration-300"
          >
            View My Work
          </NavLink>

          <NavLink
            to="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#00b4d8] font-semibold hover:shadow-[0_0_20px_#6a11cb] transition duration-300"
          >
            Contact Me
          </NavLink>

          {/* ===== Download Resume Button ===== */}
          <a
            href={Resume} // <-- place your resume file inside "public" folder
            download
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#00b4d8] font-semibold hover:shadow-[0_0_20px_#6a11cb] transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* ===== Social Links ===== */}
        <motion.div
          className="flex items-center gap-6 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/maulikpatel922"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:text-[#00b4d8] transition-all duration-300 hover:scale-125"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/maulikpatel922"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:text-[#6a11cb] transition-all duration-300 hover:scale-125"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* Email */}
          <a
            href="mailto:maulikpatel922@gmail.com"
            className="text-gray-400 text-2xl hover:text-[#00b4d8] transition-all duration-300 hover:scale-125"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </motion.div>

      {/* ===== Right Side (Image) ===== */}
      <motion.div
        className="relative z-10 md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-[0_0_30px_#00b4d8]">
          <img src={HeroImg} alt="Profile" className="w-full h-full object-center hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00b4d8]/20 to-transparent"></div>
        </div>
      </motion.div>

      {/* Floating Glow Effects */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#00b4d8]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#6a11cb]/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}

export default Home;
