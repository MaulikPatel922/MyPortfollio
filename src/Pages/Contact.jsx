import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon 😊");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-10">
      {/* ===== Left Side - Personal Details ===== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 bg-slate-900/70 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-10 text-left space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400">
          Let’s Connect
        </h2>
        <p className="text-gray-400 text-lg">
          Have a question, project idea, or just want to say hi?  
          I’m always open to discussing new projects or creative ideas.
        </p>

        <div className="space-y-4 text-lg text-gray-300">
          <div>
            <span className="text-cyan-400">📞 </span>
            +91 9574993413
          </div>
          <div>
            <span className="text-cyan-400">📧 </span>
            <a
              href="mailto:maulik922010@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              maulik922010@gmail.com
            </a>
          </div>
          <div>
            <span className="text-cyan-400">💼 </span>
            <a
              href="https://www.linkedin.com/in/er-maulik-patel-8a4878206/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              linkedin.com/in/er-maulik-patel-8a4878206
            </a>
          </div>
          <div>
            <span className="text-cyan-400">🧑‍💻 </span>
            <a
              href="https://github.com/maulikpatel922"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              github.com/maulikpatel922
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="mailto:maulik922010@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition text-2xl"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/maulikpatel922"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/er-maulik-patel-8a4878206/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="tel:+919574993413"
            className="text-gray-400 hover:text-cyan-400 transition text-2xl"
          >
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </motion.div>

      {/* ===== Right Side - Contact Form ===== */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-lg px-8 md:px-10 py-10 space-y-6 w-full"
      >
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="peer w-full bg-transparent border-b-2 border-gray-600 text-white text-lg py-2 focus:outline-none focus:border-cyan-400"
          />
          <label className="absolute left-0 top-2 text-gray-400 text-lg transition-all peer-focus:text-cyan-400 peer-focus:-top-5 peer-focus:text-sm peer-valid:-top-5 peer-valid:text-sm">
            Your Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="peer w-full bg-transparent border-b-2 border-gray-600 text-white text-lg py-2 focus:outline-none focus:border-cyan-400"
          />
          <label className="absolute left-0 top-2 text-gray-400 text-lg transition-all peer-focus:text-cyan-400 peer-focus:-top-5 peer-focus:text-sm peer-valid:-top-5 peer-valid:text-sm">
            Your Email
          </label>
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="peer w-full bg-transparent border-b-2 border-gray-600 text-white text-lg py-2 focus:outline-none focus:border-cyan-400 resize-none"
          />
          <label className="absolute left-0 top-2 text-gray-400 text-lg transition-all peer-focus:text-cyan-400 peer-focus:-top-5 peer-focus:text-sm peer-valid:-top-5 peer-valid:text-sm">
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-10 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-cyan-400/40"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;
