import React from 'react';
import Footer from "../comonents/footer";
import Nav from "../comonents/Nav";
import { FaBriefcase, FaGraduationCap, FaTools, FaChartLine, FaHandshake, FaAward, FaUsers, FaLaptopCode, FaCertificate, FaRocket, FaStar, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20 sm:py-28">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FaBriefcase className="absolute top-20 left-10 text-white/10 text-6xl animate-float" />
          <FaGraduationCap className="absolute top-40 right-20 text-white/10 text-7xl animate-float animation-delay-1000" />
          <FaTools className="absolute bottom-32 left-20 text-white/10 text-6xl animate-float animation-delay-2000" />
          <FaChartLine className="absolute bottom-20 right-32 text-white/10 text-5xl animate-float animation-delay-3000" />
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
                <span className="text-green-200 font-semibold">Skills Development</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                <FaTools className="text-sm animate-pulse" />
                <span className="text-sm font-semibold">Building Future Leaders</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                Skills Development
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-white/50 rounded-full"></div>
                <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                <div className="h-1 w-8 bg-white/20 rounded-full"></div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-green-100 leading-relaxed">
                  <span className="font-bold text-white">Merit-Based Scholarships:</span> PHRMS offers scholarships to high-performing students who demonstrate academic excellence but lack the financial resources to continue their education.
                </p>
                <p className="text-lg sm:text-xl text-green-100 leading-relaxed">
                  <span className="font-bold text-white">Need-Based Scholarships:</span> Targeted at children from extremely low-income families, ensuring even those without top grades can access education.
                </p>
                <p className="text-lg sm:text-xl text-green-100 leading-relaxed">
                  <span className="font-bold text-white">Long-Term Commitment:</span> Multi-year scholarships allowing uninterrupted education from primary through higher education.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 hover:bg-green-50 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
                  <FaRocket className="group-hover:animate-bounce" />
                  <span>Enroll Now</span>
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2">
                  <FaCertificate />
                  <span>View Programs</span>
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative animate-fadeInRight">
              <div className="relative z-10">
                <img 
                  src="/images/skills-main.png" 
                  alt="Skills Development Hero" 
                  className="w-full max-w-lg mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                    500+
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">Skills Trained</div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float animation-delay-1000">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                    90%
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">Job Placement</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-white/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Program Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeInUp">
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-96 md:h-auto overflow-hidden">
                <img 
                  src="images/skills-left.jpg" 
                  alt="Office Assistant Program"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-green-600 text-white rounded-full flex items-center gap-2 shadow-lg">
                  <FaStar className="animate-pulse" />
                  <span className="text-sm font-bold">Featured Program</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-50 rounded-full w-fit">
                  <FaBriefcase className="text-green-600" />
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Vocational Training</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 leading-tight">
                  Office <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Assistant</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Offering skill development programs to equip youth with practical skills that can lead to employment opportunities. Our comprehensive Office Assistant training prepares students for professional careers in administrative roles.
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {[
                    'Computer & Software Training',
                    'Office Management Skills',
                    'Communication & Etiquette',
                    'Job Placement Assistance'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                        <svg className="w-4 h-4 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit">
                  <span>Learn More</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Skills in <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Real students, real skills, real opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { image: '/images/skills-1.jpg', title: 'Computer Training' },
              { image: '/images/skills-2.jpg', title: 'Hands-on Practice' },
              { image: '/images/skills-3.jpg', title: 'Professional Skills' },
              { image: '/images/skills-4.jpg', title: 'Team Collaboration' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Offered Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Skills We <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Teach</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive training programs designed for real-world employment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FaLaptopCode, title: 'Computer Skills', description: 'MS Office, Internet, Email, and more', color: 'from-green-600 to-emerald-600' },
              { icon: FaBriefcase, title: 'Office Management', description: 'Administrative and organizational skills', color: 'from-emerald-600 to-teal-600' },
              { icon: FaUsers, title: 'Communication', description: 'Professional communication & etiquette', color: 'from-teal-600 to-green-600' },
              { icon: FaHandshake, title: 'Customer Service', description: 'Client interaction and support', color: 'from-green-600 to-teal-600' },
              { icon: FaChartLine, title: 'Data Entry', description: 'Accurate data management skills', color: 'from-emerald-600 to-green-600' },
              { icon: FaUserTie, title: 'Professional Development', description: 'Resume building & interview prep', color: 'from-teal-600 to-emerald-600' }
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-400 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <skill.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Success Story
            </h2>
            <p className="text-green-100 text-lg">
              Transforming lives through skill development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FaUsers, number: '500+', label: 'Students Trained' },
              { icon: FaBriefcase, number: '90%', label: 'Job Placement' },
              { icon: FaAward, number: '50+', label: 'Certifications Issued' },
              { icon: FaHandshake, number: '30+', label: 'Partner Companies' }
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
          <FaCertificate className="text-green-400 text-6xl mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Skills Journey Today
          </h3>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Join our comprehensive skill development programs and unlock your potential for a brighter future
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
              <FaRocket />
              <span>Enroll Now</span>
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-green-400 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2">
              <FaUsers />
              <span>Contact Us</span>
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

export default Skills;
