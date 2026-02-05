import React from 'react';
import Nav from '../comonents/Nav';
import Events from "../comonents/Events";
import Footer from '../comonents/footer';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaStar, FaUsers, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Nav />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20 sm:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Decorative Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FaCalendarAlt className="absolute top-20 left-10 text-white/10 text-6xl animate-float" />
          <FaStar className="absolute top-40 right-20 text-white/10 text-5xl animate-float animation-delay-1000" />
          <FaTicketAlt className="absolute bottom-32 left-20 text-white/10 text-7xl animate-float animation-delay-2000" />
          <FaUsers className="absolute bottom-20 right-32 text-white/10 text-6xl animate-float animation-delay-3000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6 animate-fadeInLeft">
              {/* Breadcrumb */}
              <div className="flex items-center gap-3 text-sm sm:text-base mb-4">
                <Link to="/" className="hover:text-green-200 transition-colors duration-300 font-semibold">
                  Home
                </Link>
                <span className="text-green-200">/</span>
                <span className="text-green-200 font-semibold">Events</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                <FaCalendarAlt className="text-sm animate-pulse" />
                <span className="text-sm font-semibold">Discover Amazing Events</span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                Our Events
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-white/50 rounded-full"></div>
                <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                <div className="h-1 w-8 bg-white/20 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-green-100 leading-relaxed max-w-xl">
                Join us for inspiring events that bring communities together, create lasting impact, and celebrate our shared mission of empowering lives through education and health initiatives.
              </p>

              {/* Event Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
                  <div className="text-green-100 text-xs sm:text-sm">Total Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">5K+</div>
                  <div className="text-green-100 text-xs sm:text-sm">Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">15+</div>
                  <div className="text-green-100 text-xs sm:text-sm">Cities</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 hover:bg-green-50 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
                  <FaTicketAlt className="group-hover:animate-bounce" />
                  <span>Browse Events</span>
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>Add to Calendar</span>
                </button>
              </div>
            </div>

            {/* Illustration Side */}
            <div className="relative animate-fadeInRight">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="assets/img/about-hero.svg" 
                    alt="Events Hero" 
                    className="w-full max-w-lg mx-auto drop-shadow-2xl"
                  />
                  
                  {/* Floating Badge - Upcoming Event */}
                  <div className="absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                        <FaCalendarAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-semibold">Next Event</div>
                        <div className="text-sm font-bold text-gray-800">In 3 Days</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge - Attendees */}
                  <div className="absolute bottom-8 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float animation-delay-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                        <FaUsers className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-semibold">Registered</div>
                        <div className="text-sm font-bold text-gray-800">200+ People</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              {/* Decorative Circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-white/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-xs font-semibold uppercase tracking-wider">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Banner */}
      <section className="py-12 bg-white shadow-lg relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-16 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaCalendarAlt, label: 'Monthly Events', value: '10+', color: 'from-green-600 to-emerald-600' },
              { icon: FaMapMarkerAlt, label: 'Event Locations', value: '15+', color: 'from-emerald-600 to-teal-600' },
              { icon: FaUsers, label: 'Community Members', value: '5K+', color: 'from-teal-600 to-green-600' },
              { icon: FaStar, label: 'Success Rate', value: '98%', color: 'from-green-600 to-teal-600' }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Component */}
      <Events />

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FaCalendarAlt className="text-green-400 text-5xl mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Never Miss an Event
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get notified about upcoming events, workshops, and community programs
          </p>
          
          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Join 5,000+ subscribers who stay updated with our events
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default EventsPage;
