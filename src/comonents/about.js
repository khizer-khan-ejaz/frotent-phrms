import React from "react";
import Nav from "./Nav";
import Footer from "./footer";
import { FaHeart, FaUsers, FaHandsHelping, FaBullseye, FaEye, FaAward, FaCheckCircle, FaGraduationCap, FaBook, FaLaptop, FaChild } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20 sm:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FaHeart className="absolute top-20 left-10 text-white/10 text-6xl animate-float" />
          <FaUsers className="absolute top-40 right-20 text-white/10 text-7xl animate-float animation-delay-1000" />
          <FaHandsHelping className="absolute bottom-32 left-20 text-white/10 text-6xl animate-float animation-delay-2000" />
          <FaAward className="absolute bottom-20 right-32 text-white/10 text-5xl animate-float animation-delay-3000" />
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
                <span className="text-green-200 font-semibold">About Us</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                <FaUsers className="text-sm animate-pulse" />
                <span className="text-sm font-semibold">Our Story</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                About Us
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-white/50 rounded-full"></div>
                <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                <div className="h-1 w-8 bg-white/20 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-green-100 leading-relaxed">
                PHRMS (People's Health & Rights Movement Society) is a non-governmental organization dedicated to helping children access education. Our mission revolves around providing underprivileged and marginalized children with the necessary resources, tools, and support to pursue their studies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 hover:bg-green-50 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
                  <FaHandsHelping className="group-hover:animate-bounce" />
                  <span>Get Involved</span>
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2">
                  <FaHeart />
                  <span>Support Us</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">10+</div>
                  <div className="text-green-100 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">5K+</div>
                  <div className="text-green-100 text-xs sm:text-sm">Children Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
                  <div className="text-green-100 text-xs sm:text-sm">Programs</div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative animate-fadeInRight">
              <div className="relative z-10">
                <img 
                  src="assets/img/about-hero.svg" 
                  alt="About Hero" 
                  className="w-full max-w-lg mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                    100%
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">Transparent</div>
                </div>
              </div>

              {/* Decorative Elements */}
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

      {/* Welcome Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative animate-fadeInLeft">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="images/bg_3.jpg" 
                  alt="Welcome to PHRMS" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">Awards Won</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="animate-fadeInRight space-y-6">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-50 rounded-full">
                <FaUsers className="text-green-600" />
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 leading-tight">
                Welcome to <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">PHRMS</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                PHRMS (People's Health & Rights Movement Society) is a non-governmental organization dedicated to helping children access education. Our mission revolves around providing underprivileged and marginalized children with the necessary resources, tools, and support to pursue their studies. The organization works in various capacities to ensure that children, regardless of their socioeconomic background, receive quality education and have the opportunity to achieve their full potential.
              </p>

              {/* Key Focus Areas */}
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-bold text-gray-800">Key Areas of Focus:</h3>
                
                {[
                  {
                    icon: FaGraduationCap,
                    title: 'Educational Support',
                    description: 'PHRMS offers financial assistance, scholarships, and school supplies to children from low-income families.'
                  },
                  {
                    icon: FaBook,
                    title: 'After-school Programs',
                    description: 'The organization runs after-school tutoring sessions to help children with their studies and improve academic performance.'
                  },
                  {
                    icon: FaLaptop,
                    title: 'Digital Learning',
                    description: 'We incorporate digital tools and resources, ensuring children have access to online learning materials and technology.'
                  }
                ].map((focus, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <focus.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{focus.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{focus.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Our Purpose & <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Direction</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Guided by our core values and unwavering commitment to social change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBullseye className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To empower marginalized communities by providing access to quality education, healthcare, and livelihood opportunities, fostering sustainable development and social equity for every child regardless of their background.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
            </div>

            {/* Vision Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp animation-delay-200">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaEye className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A world where every individual, regardless of their background, has the opportunity to lead a healthy, educated, and dignified life, contributing to a just and inclusive society built on equality and opportunity.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Our Core <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'Operating with transparency and honesty in all our actions', icon: FaCheckCircle },
              { title: 'Compassion', desc: 'Approaching every individual with empathy and understanding', icon: FaHeart },
              { title: 'Excellence', desc: 'Striving for the highest quality in our programs and services', icon: FaAward },
              { title: 'Collaboration', desc: 'Working together with communities and partners', icon: FaHandsHelping },
              { title: 'Innovation', desc: 'Embracing creative solutions to complex challenges', icon: FaLaptop },
              { title: 'Empowerment', desc: 'Building capacity and fostering self-reliance', icon: FaUsers }
            ].map((value, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-400 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-green-100 text-lg">
              Real change, measurable results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FaChild, number: '5,000+', label: 'Children Supported' },
              { icon: FaHandsHelping, number: '50+', label: 'Active Programs' },
              { icon: FaUsers, number: '500+', label: 'Volunteers' },
              { icon: FaAward, number: '15+', label: 'Awards Won' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="text-white text-3xl" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FaHeart className="text-green-400 text-6xl mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Us in Creating Lasting Change
          </h3>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Together, we can build stronger communities and brighter futures for those who need it most
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
              <FaHandsHelping />
              <span>Get Involved</span>
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-green-400 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2">
              <FaHeart />
              <span>Donate Now</span>
            </button>
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

        .animation-delay-200 {
          animation-delay: 0.2s;
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
    </>
  );
};

export default About;
