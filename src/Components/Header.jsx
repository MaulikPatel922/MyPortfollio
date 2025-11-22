import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "backdrop-blur-md bg-slate-900/80 shadow-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-16 py-4 text-white">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-semibold tracking-tight hover:text-cyan-400 transition-colors duration-300"
        >
          <span className="text-cyan-400">M</span>aulik
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="text-2xl md:hidden focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto transition-all duration-500 ease-in-out bg-slate-900/95 md:bg-transparent overflow-hidden ${
            menuOpen
              ? "max-h-[300px] opacity-100"
              : "max-h-0 md:max-h-none md:opacity-100 opacity-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center md:gap-12 py-4 md:py-0 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="relative group my-2 md:my-0">
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `tracking-wide transition duration-300 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }`
                  }
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "group-hover:w-full w-0"
                    }`}
                  ></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
