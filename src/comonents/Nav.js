import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, 
  FaPhoneAlt, FaEnvelope, FaBars, FaTimes, FaChevronDown, FaHeart
} from 'react-icons/fa';

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setShowMobileMenu(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setShowMobileMenu(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2.5 text-sm">
            {/* Contact Info */}
            <div className="flex items-center gap-5 mb-2 sm:mb-0">
              <a 
                href="mailto:phrms.soc@gmail.com" 
                className="flex items-center gap-2 hover:text-green-100 transition-colors"
              >
                <FaEnvelope />
                <span className="hidden md:inline">phrms.soc@gmail.com</span>
              </a>
              <a 
                href="tel:7428089818" 
                className="flex items-center gap-2 hover:text-green-100 transition-colors"
              >
                <FaPhoneAlt />
                <span>7428089818</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <span className="text-xs mr-1 hidden sm:inline">Follow us:</span>
              {[
                { Icon: FaFacebookF, href: '#', label: 'Facebook' },
                { Icon: FaInstagram, href: '#', label: 'Instagram' },
                { Icon: FaTwitter, href: '#', label: 'Twitter' },
                { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink 
              to="/" 
              onClick={closeMenu}
              className="flex items-center gap-3 group"
            >
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <h1 className="text-3xl lg:text-4xl font-black text-green-700 leading-none tracking-tight">
                  PHRMS
                </h1>
                <span className="text-[10px] lg:text-xs text-gray-500 font-medium uppercase tracking-wider -mt-0.5">
                  People's Health & Rights
                </span>
              </div>
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-2 font-semibold text-[15px] transition-colors rounded-md ${
                      isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 py-2 font-semibold text-[15px] transition-colors rounded-md ${
                      isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              {/* Programs Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => setActiveDropdown('area')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="px-4 py-2 font-semibold text-[15px] text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-colors rounded-md flex items-center gap-1"
                >
                  Programs
                  <FaChevronDown className={`text-[10px] transition-transform duration-200 ${activeDropdown === 'area' ? 'rotate-180' : ''}`} />
                </button>
                <ul 
                  className={`absolute left-0 mt-1 w-60 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                    activeDropdown === 'area' 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {[
                    { to: '/education', label: 'Education' },
                    { to: '/skills', label: 'Skills Development' },
                    { to: '/health', label: 'Health Support' },
                    { to: '/nutrition', label: 'Nutrition' }
                  ].map(({ to, label }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `block px-5 py-3 text-[15px] transition-all border-l-3 ${
                            isActive
                              ? 'bg-green-50 text-green-700 border-green-700 font-semibold'
                              : 'text-gray-700 border-transparent hover:bg-gray-50 hover:text-green-700 hover:border-green-700'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Centers Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => setActiveDropdown('center')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="px-4 py-2 font-semibold text-[15px] text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-colors rounded-md flex items-center gap-1"
                >
                  Centers
                  <FaChevronDown className={`text-[10px] transition-transform duration-200 ${activeDropdown === 'center' ? 'rotate-180' : ''}`} />
                </button>
                <ul 
                  className={`absolute left-0 mt-1 w-60 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                    activeDropdown === 'center' 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {[
                    { to: '/center1', label: 'C-145, Hardevpuri' },
                    { to: '/center2', label: 'Trilokpuri, Delhi' }
                  ].map(({ to, label }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `block px-5 py-3 text-[15px] transition-all border-l-3 ${
                            isActive
                              ? 'bg-green-50 text-green-700 border-green-700 font-semibold'
                              : 'text-gray-700 border-transparent hover:bg-gray-50 hover:text-green-700 hover:border-green-700'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <NavLink
                  to="/event"
                  className={({ isActive }) =>
                    `px-4 py-2 font-semibold text-[15px] transition-colors rounded-md ${
                      isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
                    }`
                  }
                >
                  Events
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="ml-4 px-7 py-2.5 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition-all shadow-sm hover:shadow-md"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2.5 text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {showMobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ${
              showMobileMenu ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <ul className="pt-4 space-y-1 border-t border-gray-100">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              {/* Mobile Programs Dropdown */}
              <li>
                <button
                  onClick={() => toggleDropdown('area')}
                  className="w-full flex items-center justify-between px-4 py-2.5 font-semibold text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Programs
                  <FaChevronDown className={`text-xs transition-transform duration-200 ${activeDropdown === 'area' ? 'rotate-180' : ''}`} />
                </button>
                <ul
                  className={`transition-all duration-300 ${
                    activeDropdown === 'area' ? 'max-h-64 opacity-100 mt-1' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {[
                    { to: '/education', label: 'Education' },
                    { to: '/skills', label: 'Skills Development' },
                    { to: '/health', label: 'Health Support' },
                    { to: '/nutrition', label: 'Nutrition' }
                  ].map(({ to, label }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block pl-8 pr-4 py-2.5 text-sm rounded-md transition-colors ${
                            isActive
                              ? 'text-green-700 bg-green-50 font-semibold'
                              : 'text-gray-600 hover:text-green-700 hover:bg-gray-50'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Mobile Centers Dropdown */}
              <li>
                <button
                  onClick={() => toggleDropdown('center')}
                  className="w-full flex items-center justify-between px-4 py-2.5 font-semibold text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Centers
                  <FaChevronDown className={`text-xs transition-transform duration-200 ${activeDropdown === 'center' ? 'rotate-180' : ''}`} />
                </button>
                <ul
                  className={`transition-all duration-300 ${
                    activeDropdown === 'center' ? 'max-h-64 opacity-100 mt-1' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {[
                    { to: '/center1', label: 'C-145, Hardevpuri' },
                    { to: '/center2', label: 'Trilokpuri, Delhi' }
                  ].map(({ to, label }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block pl-8 pr-4 py-2.5 text-sm rounded-md transition-colors ${
                            isActive
                              ? 'text-green-700 bg-green-50 font-semibold'
                              : 'text-gray-600 hover:text-green-700 hover:bg-gray-50'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <NavLink
                  to="/event"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
                    }`
                  }
                >
                  Events
                </NavLink>
              </li>

              <li className="pt-2">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="block px-4 py-2.5 bg-green-700 text-white font-semibold rounded-md text-center hover:bg-green-800 transition-colors"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
