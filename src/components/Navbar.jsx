import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-yellow-500">10 numara</span> car detailing
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition duration-300"
              >
                Anasayfa
              </a>
              <a
                href="#hizmetlerimiz"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition duration-300"
              >
                Hizmetlerimiz
              </a>

              <a
                href="#iletisim"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition duration-300"
              >
                Ulaşım
              </a>
              <Link
                to="/resimler"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition duration-300"
              >
                Resimler
              </Link>
              <a
                href="#iletisim"
                className="px-4 py-2 rounded-md text-sm font-medium bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition duration-300"
              >
                İletişim
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden flex flex-col items-center justify-center space-y-6">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            &times;
          </button>

          <a
            onClick={() => setIsOpen(false)}
            href="/"
            className="text-white text-xl font-medium hover:text-yellow-400 transition"
          >
            Anasayfa
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#hizmetlerimiz"
            className="text-white text-xl font-medium hover:text-yellow-400 transition"
          >
            Hizmetlerimiz
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#iletisim"
            className="text-white text-xl font-medium hover:text-yellow-400 transition"
          >
            Ulaşım
          </a>
          <Link
            onClick={() => setIsOpen(false)}
            to="/resimler"
            className="text-white text-xl font-medium hover:text-yellow-400 transition"
          >
            Resimler
          </Link>
          <a
            onClick={() => setIsOpen(false)}
            href="#iletisim"
            className="bg-yellow-500 text-blue-900 px-5 py-2 rounded-md text-lg font-semibold hover:bg-yellow-400 transition"
          >
            İletişim
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
