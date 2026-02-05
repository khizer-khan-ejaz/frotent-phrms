import React from 'react';
import Footer from "../comonents/footer";
import Nav from "../comonents/Nav";
import { FaAppleAlt, FaHeartbeat, FaHandHoldingHeart, FaPills, FaUsers, FaChild, FaChartLine, FaAward, FaUtensils, FaHospital, FaWheelchair } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nutrition = () => {
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
          <FaAppleAlt className="absolute top-20 left-10 text-white/10 text-6xl animate-float" />
          <FaHeartbeat className="absolute top-40 right-20 text-white/10 text-7xl animate-float animation-delay-1000" />
          <FaUtensils className="absolute bottom-32 left-20 text-white/10 text-6xl animate-float animation-delay-2000" />
          <FaPills className="absolute bottom-20 right-32 text-white/10 text-5xl animate-float animation-delay-3000" />
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
                <span className="text-green-200 font-semibold">Nutrition</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                <FaAppleAlt className="text-sm animate-pulse" />
                <span className="text-sm font-semibold">Nourishing Communities</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                Nutrition
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
                  <span className="font-bold text-white">Nutritional Education:</span> Along with providing food, the organization conducts awareness sessions on the importance of a balanced diet. These sessions target both children and parents, teaching them about affordable and nutritious food options.
                </p>
                <p className="text-lg sm:text-xl text-green-100 leading-relaxed">
                  <span className="font-bold text-white">Supplement Programs:</span> PHRMS sometimes provides vitamin and mineral supplements to combat specific deficiencies, such as iron for anemia or vitamin A for vision health, particularly in undernourished children.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 hover:bg-green-50 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
                  <FaHandHoldingHeart className="group-hover:animate-bounce" />
                  <span>Support Nutrition</span>
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2">
                  <FaUsers />
                  <span>Get Involved</span>
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative animate-fadeInRight">
              <div className="relative z-10">
                <img 
                  src="/images/nutrition-main.png" 
                  alt="Nutrition Hero" 
                  className="w-full max-w-lg mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                    5,000+
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">Children Fed Daily</div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float animation-delay-1000">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                    100%
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">Nutritious Meals</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-white/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Our Nutrition <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Initiatives</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive programs designed to combat malnutrition and promote healthy living
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: FaHeartbeat,
                title: 'Health Education & Awareness',
                description: 'Conducting health education and awareness campaigns to empower communities with knowledge about nutrition and healthy eating habits.',
                color: 'from-green-600 to-emerald-600',
                image: '/images/bg_1.jpg'
              },
              {
                icon: FaPills,
                title: 'Essential Medications & Supplies',
                description: 'Distribute essential medications and supplies to ensure children and families have access to necessary health resources.',
                color: 'from-emerald-600 to-teal-600',
                image: '/images/bg_7.jpg'
              },
              {
                icon: FaWheelchair,
                title: 'Medical Equipment Support',
                description: 'Provide financial support for medical equipment for individuals with disabilities to improve their quality of life.',
                color: 'from-teal-600 to-green-600',
                image: '/images/bg_6.jpg'
              }
            ].map((program, index) => (
              <article
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image with Parallax Effect */}
                <div className="relative h-80 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="text-white text-2xl" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <button className="mt-4 flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <span className="text-lg">→</span>
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-emerald-500 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Nutrition Program <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Real results from our commitment to ending malnutrition
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaChild, number: '5,000+', label: 'Children Fed Daily', color: 'from-green-600 to-emerald-600' },
              { icon: FaUtensils, number: '15K+', label: 'Meals Served Monthly', color: 'from-emerald-600 to-teal-600' },
              { icon: FaPills, number: '3,000+', label: 'Supplements Distributed', color: 'from-teal-600 to-green-600' },
              { icon: FaChartLine, number: '85%', label: 'Health Improvement', color: 'from-green-600 to-teal-600' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-400 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="text-white text-3xl" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Program <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FaHeartbeat, title: 'Improved Health', description: 'Better physical development and immunity' },
              { icon: FaChild, title: 'Enhanced Growth', description: 'Proper nutrition for growing children' },
              { icon: FaChartLine, title: 'Better Performance', description: 'Improved concentration and learning' },
              { icon: FaAward, title: 'Community Empowerment', description: 'Knowledge sharing and awareness' },
              { icon: FaUsers, title: 'Family Support', description: 'Holistic approach to family wellness' },
              { icon: FaHospital, title: 'Medical Care', description: 'Access to healthcare and supplements' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
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
          <FaAppleAlt className="text-green-400 text-6xl mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Help Us Fight Malnutrition
          </h3>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Your support can provide nutritious meals, essential supplements, and health education to children and families in need
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
              <FaHandHoldingHeart />
              <span>Donate Now</span>
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-green-400 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2">
              <FaUsers />
              <span>Become a Volunteer</span>
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

export default Nutrition;
