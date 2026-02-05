import React from 'react';
import Footer from "../comonents/footer";
import Nav from "../comonents/Nav";
import OurPrograms from '../comonents/OurProgram';
import { FaBook, FaGraduationCap, FaUsers, FaHeart, FaChalkboardTeacher, FaHandsHelping, FaDonate, FaUserGraduate, FaAward, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-600 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-3 text-sm mb-4">
                <Link to="/" className="hover:text-green-200 transition-colors font-medium">
                  Home
                </Link>
                <span className="text-green-200">/</span>
                <span className="text-green-200 font-medium">Education</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <FaGraduationCap className="text-sm" />
                <span className="text-sm font-semibold">Empowering Through Education</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                Education
              </h1>

              {/* Description */}
              <p className="text-lg text-green-100 leading-relaxed">
                PHRMS' Educational Support initiative is designed to bridge the gap for children from low-income families who face financial barriers to accessing quality education. This program includes several key components including financial assistance for school fees and tuition.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3 bg-white text-green-700 hover:bg-green-50 font-semibold rounded-md transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                  <FaDonate />
                  <span>Support Education</span>
                </button>
                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white text-white font-semibold rounded-md transition-all flex items-center gap-2">
                  <FaHandsHelping />
                  <span>Volunteer</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-4xl font-bold mb-1">1000+</div>
                  <div className="text-green-100 text-sm">Students Supported</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">95%</div>
                  <div className="text-green-100 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img 
                src="/images/education-main.png" 
                alt="Education Hero" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Our Education <span className="text-green-700">Programs</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive educational support designed to empower every child
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: 'images/1.jpg',
                icon: FaBook,
                title: 'English Classes',
                description: 'Offering tutoring and academic support to reintegrate dropouts into formal education.',
                color: 'bg-green-600'
              },
              {
                image: 'images/2.jpg',
                icon: FaComments,
                title: 'Communication Classes',
                description: 'Teaching essential life skills like communication, critical thinking, problem solving & financial literacy.',
                color: 'bg-emerald-600'
              },
              {
                image: 'images/5.jpg',
                icon: FaUsers,
                title: 'Boosting School Enrolment',
                description: 'Involving parents, guardians, and community leaders to promote education and boost school enrollment and attendance.',
                color: 'bg-teal-600'
              },
              {
                image: 'images/3.jpg',
                icon: FaAward,
                title: 'Providing Scholarships',
                description: 'Providing scholarships, stipends, or financial assistance to disadvantaged students to help cover school fees, uniforms, books, and other educational expenses.',
                color: 'bg-green-700'
              }
            ].map((program, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg ${program.color} flex items-center justify-center shadow-lg`}>
                    <program.icon className="text-white text-xl" />
                  </div>

                  {/* Admin Badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/95 rounded-full flex items-center gap-2 text-xs font-semibold">
                    <FaUsers className="text-green-600 text-xs" />
                    <span className="text-gray-700">Admin</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {program.description}
                  </p>

                  {/* Learn More Link */}
                  <button className="flex items-center gap-2 text-green-700 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs Component */}
      <OurPrograms />

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Counter Card */}
            <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-2xl p-8 shadow-xl text-white text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <FaUsers className="text-3xl" />
              </div>
              <div className="space-y-2">
                <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Served Over</div>
                <div className="text-5xl font-black">1,432,805</div>
                <div className="text-sm opacity-90">Children in 190 countries in the world</div>
              </div>
            </div>

            {/* Fund Education Card */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-2xl p-8 shadow-xl text-white text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <FaDonate className="text-3xl" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Fund a Child's Education</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Even the all-powerful Pointing has no control about the blind texts.
                </p>
              </div>
              <button className="w-full py-3 bg-white hover:bg-gray-50 text-emerald-700 font-semibold rounded-md transition-all shadow-md">
                Donate Now
              </button>
            </div>

            {/* Volunteer Card */}
            <div className="bg-gradient-to-br from-teal-700 to-teal-600 rounded-2xl p-8 shadow-xl text-white text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <FaHandsHelping className="text-3xl" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Be a Volunteer</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Even the all-powerful Pointing has no control about the blind texts.
                </p>
              </div>
              <button className="w-full py-3 bg-white hover:bg-gray-50 text-teal-700 font-semibold rounded-md transition-all shadow-md">
                Be A Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Education Impact
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Transforming lives through quality education and support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5,000+', label: 'Students Enrolled', icon: FaUserGraduate },
              { number: '50+', label: 'Schools Partnered', icon: FaChalkboardTeacher },
              { number: '200+', label: 'Scholarships Given', icon: FaAward },
              { number: '98%', label: 'Success Rate', icon: FaGraduationCap }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <stat.icon className="text-green-400 text-3xl" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Education;
