import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="space-y-6 animate-fadeInUp">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
                  <FaHeart className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-black text-white">PHRMS</h2>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Empowering communities through education, health, and sustainable development. Together, we can create lasting change.
              </p>

              {/* Social Media Links */}
              <div>
                <h3 className="text-white font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: FaTwitter, color: 'hover:bg-sky-500', link: '#' },
                    { icon: FaFacebookF, color: 'hover:bg-blue-600', link: '#' },
                    { icon: FaInstagram, color: 'hover:bg-pink-600', link: '#' },
                    { icon: FaLinkedinIn, color: 'hover:bg-blue-700', link: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`group w-11 h-11 rounded-full bg-gray-800 hover:text-white ${social.color} flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fadeInUp animation-delay-200">
              <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', link: '/about' },
                  { name: 'Our Programs', link: '/programs' },
                  { name: 'Events', link: '/events' },
                  { name: 'Gallery', link: '/gallery' },
                  { name: 'Contact', link: '/contact' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="group flex items-center gap-2 text-gray-400 hover:text-green-400 transition-all duration-300"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 bg-green-400 transition-all duration-300 rounded-full"></span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Programs */}
            <div className="animate-fadeInUp animation-delay-400">
              <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
                Our Programs
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Education', link: '/education' },
                  { name: 'Health', link: '/health' },
                  { name: 'Nutrition', link: '/nutrition' },
                  { name: 'Skills Development', link: '/skills' },
                  { name: 'Donate', link: '/donate' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="group flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-all duration-300"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 bg-emerald-400 transition-all duration-300 rounded-full"></span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fadeInUp animation-delay-600">
              <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-teal-600 to-green-600 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600/20 to-emerald-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Address</p>
                      <p className="text-gray-300 leading-relaxed">C-145, Hardevpuri Durgapuri, Delhi</p>
                    </div>
                  </div>
                </li>

                <li className="group">
                  <a href="tel:7428089818" className="flex items-start gap-3 hover:text-green-400 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaPhoneAlt className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <p className="text-gray-300">7428089818</p>
                    </div>
                  </a>
                </li>

                <li className="group">
                  <a href="mailto:phrms.soc@gmail.com" className="flex items-start gap-3 hover:text-green-400 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600/20 to-green-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <p className="text-gray-300 break-all">phrms.soc@gmail.com</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-gray-400">
              Subscribe to receive updates about our programs, events, and impact stories
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-gray-800 border-2 border-gray-700 focus:border-green-500 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} PHRMS. All rights reserved. Made with{' '}
              <FaHeart className="inline text-red-500 mx-1 animate-pulse" /> by{' '}
              <a
                href="https://phrms.soc"
                className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-300"
              >
                PHRMS Team
              </a>
            </p>

            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
