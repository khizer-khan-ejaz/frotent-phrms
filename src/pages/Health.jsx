import React from 'react';
import Footer from "../comonents/footer";
import Nav from "../comonents/Nav";
import { FaHeartbeat, FaHospital, FaSyringe, FaPills, FaStethoscope, FaUserMd, FaHandHoldingMedical, FaWheelchair, FaAmbulance, FaShieldAlt, FaFirstAid, FaClinicMedical, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Health = () => {
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
          <FaHeartbeat className="absolute top-20 left-10 text-white/10 text-6xl animate-float" />
          <FaStethoscope className="absolute top-40 right-20 text-white/10 text-7xl animate-float animation-delay-1000" />
          <FaHospital className="absolute bottom-32 left-20 text-white/10 text-6xl animate-float animation-delay-2000" />
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
                <span className="text-green-200 font-semibold">Health</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                <FaHeartbeat className="text-sm animate-pulse" />
                <span className="text-sm font-semibold">Caring for Communities</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                Health Support
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-white/50 rounded-full"></div>
                <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                <div className="h-1 w-8 bg-white/20 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-green-100 leading-relaxed">
                PHRMS' Health Support initiative is aimed at ensuring that children and their families have access to the healthcare they need, recognizing that good health is essential for children to succeed in education and life. This program focuses on addressing both immediate and long-term health needs of children, particularly those from low-income and marginalized backgrounds.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 hover:bg-green-50 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
                  <FaHandHoldingMedical className="group-hover:animate-bounce" />
                  <span>Get Health Support</span>
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2">
                  <FaAmbulance />
                  <span>Emergency Contact</span>
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative animate-fadeInRight">
              <div className="relative z-10">
                <img 
                  src="/images/health-main.png" 
                  alt="Health Support Hero" 
                  className="w-full max-w-lg mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                    10K+
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">Patients Treated</div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float animation-delay-1000">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                    24/7
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">Support Available</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-white/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Our Health <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Initiatives</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive healthcare programs designed to improve community wellbeing
            </p>
          </div>

          <div className="space-y-20">
            {/* Program 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fadeInUp">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="images/health-1.jpg" 
                  alt="Health Education"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
                  <FaUserMd className="text-white text-2xl" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                  <FaShieldAlt className="text-green-600" />
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Prevention & Care</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-gray-800 leading-tight">
                  Health Education & <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Awareness Campaigns</span>
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <span className="font-bold text-gray-800">Routine Health Check-ups:</span> PHRMS organizes regular health camps in communities and schools to provide free medical check-ups for children. These camps focus on early diagnosis of common health issues such as malnutrition, anemia, and vision or dental problems.
                  </p>
                  <p>
                    <span className="font-bold text-gray-800">Vaccination Drives:</span> To protect children from preventable diseases, PHRMS collaborates with local health authorities to conduct vaccination campaigns, ensuring children receive timely immunization.
                  </p>
                </div>

                <button className="flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>

            {/* Program 2 - Reversed */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fadeInUp">
              <div className="space-y-6 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                  <FaPills className="text-emerald-600" />
                  <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Essential Support</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-gray-800 leading-tight">
                  Essential <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Medications & Supplies</span>
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <span className="font-bold text-gray-800">Mid-Day Meal Programs:</span> In areas where malnutrition is prevalent, PHRMS works with schools to provide nutritious meals during the school day. These meals often serve as a key source of nourishment for children and help improve their concentration and performance in class.
                  </p>
                  <p>
                    We ensure that essential medications and medical supplies reach those who need them most, providing comprehensive healthcare support to underserved communities.
                  </p>
                </div>

                <button className="flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <span className="text-lg">→</span>
                </button>
              </div>

              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group md:order-2">
                <img 
                  src="images/health-2.jpg" 
                  alt="Medical Supplies"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-emerald-900/80 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
                  <FaFirstAid className="text-white text-2xl" />
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fadeInUp">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="images/health-3.jpg" 
                  alt="Medical Equipment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-green-600 flex items-center justify-center shadow-lg">
                  <FaWheelchair className="text-white text-2xl" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
                  <FaWheelchair className="text-teal-600" />
                  <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Disability Support</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-gray-800 leading-tight">
                  Medical Equipment for <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Individuals with Disabilities</span>
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    PHRMS provides financial support for medical equipment and assistive devices for individuals with disabilities, ensuring they have access to the tools they need to live independently and with dignity.
                  </p>
                  <p>
                    Our comprehensive support includes wheelchairs, hearing aids, prosthetics, and other essential medical equipment that can transform lives and restore mobility and independence.
                  </p>
                </div>

                <button className="flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>

            {/* Program 4 - Reversed */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fadeInUp">
              <div className="space-y-6 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                  <FaHandHoldingMedical className="text-green-600" />
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Financial Aid</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-gray-800 leading-tight">
                  Financial Assistance for <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Medical Expenses</span>
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    PHRMS offers financial assistance programs to help individuals and families cover hospital bills and medical expenses, ensuring that financial constraints don't prevent anyone from receiving necessary healthcare.
                  </p>
                  <p>
                    Our support covers emergency medical treatments, surgeries, long-term care, and prescription medications, providing a safety net for those facing unexpected medical crises.
                  </p>
                </div>

                <button className="flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <span className="text-lg">→</span>
                </button>
              </div>

              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group md:order-2">
                <img 
                  src="images/health-4.jpg" 
                  alt="Financial Assistance"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-green-900/80 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
                  <FaHospital className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Healthcare <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive medical support for all community members
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FaStethoscope, title: 'Free Health Check-ups', description: 'Regular medical examinations and screenings', color: 'from-green-600 to-emerald-600' },
              { icon: FaSyringe, title: 'Vaccination Programs', description: 'Immunization drives for preventable diseases', color: 'from-emerald-600 to-teal-600' },
              { icon: FaPills, title: 'Medicine Distribution', description: 'Essential medications and supplements', color: 'from-teal-600 to-green-600' },
              { icon: FaClinicMedical, title: 'Health Camps', description: 'Community health awareness initiatives', color: 'from-green-600 to-teal-600' },
              { icon: FaWheelchair, title: 'Disability Support', description: 'Equipment and financial assistance', color: 'from-emerald-600 to-green-600' },
              { icon: FaHandHoldingMedical, title: 'Financial Aid', description: 'Support for medical expenses', color: 'from-teal-600 to-emerald-600' }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-400 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
              Healthcare Impact
            </h2>
            <p className="text-green-100 text-lg">
              Making a difference in community health
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FaUsers, number: '10,000+', label: 'Patients Treated' },
              { icon: FaSyringe, number: '5,000+', label: 'Vaccinations Given' },
              { icon: FaHospital, number: '100+', label: 'Health Camps' },
              { icon: FaHeartbeat, number: '95%', label: 'Recovery Rate' }
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
          <FaHeartbeat className="text-green-400 text-6xl mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Support Our Health Initiatives
          </h3>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Your contribution can help provide essential healthcare services, medications, and medical equipment to those who need it most
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
              <FaHandHoldingMedical />
              <span>Donate Now</span>
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-green-400 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2">
              <FaAmbulance />
              <span>Emergency Support</span>
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

export default Health;
