import React, { useState } from 'react';
import Nav from '../comonents/Nav';
import Footer from '../comonents/footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Nav />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20 sm:py-28">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6 animate-fadeInLeft">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold">Get In Touch</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                Contact Us
              </h1>

              <p className="text-lg sm:text-xl text-green-100 leading-relaxed max-w-xl">
                Workshops and Awareness Campaigns: PHRMS holds workshops for both children and parents on a variety of health topics, including sexual and reproductive health, child healthcare, and disease prevention.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-green-100 text-sm">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-green-100 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Fast</div>
                  <div className="text-green-100 text-sm">Response Time</div>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative animate-fadeInRight">
              <div className="relative z-10">
                <img 
                  src="assets/img/about-hero.svg" 
                  alt="Contact Hero" 
                  className="w-full max-w-lg mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Get in <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: FaMapMarkerAlt,
                title: 'Visit Us',
                info: '198 West 21th Street, Suite 721',
                subInfo: 'New York NY 10016',
                color: 'from-green-600 to-emerald-600'
              },
              {
                icon: FaPhone,
                title: 'Call Us',
                info: '7428089818',
                subInfo: 'Mon - Fri, 9AM - 6PM',
                color: 'from-emerald-600 to-teal-600',
                link: 'tel:7428089818'
              },
              {
                icon: FaEnvelope,
                title: 'Email Us',
                info: 'phrms.soc@gmail.com',
                subInfo: 'Quick response guaranteed',
                color: 'from-teal-600 to-green-600',
                link: 'mailto:phrms.soc@gmail.com'
              },
              {
                icon: FaClock,
                title: 'Working Hours',
                info: 'Mon - Fri: 9AM - 6PM',
                subInfo: 'Sat: 10AM - 4PM',
                color: 'from-green-600 to-teal-600'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp border-2 border-transparent hover:border-green-400"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-gray-700 font-semibold hover:text-green-600 transition-colors duration-300 block mb-1">
                    {item.info}
                  </a>
                ) : (
                  <p className="text-gray-700 font-semibold mb-1">{item.info}</p>
                )}
                <p className="text-sm text-gray-500">{item.subInfo}</p>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 animate-fadeInLeft">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-3">
                  Send us a <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Message</span>
                </h3>
                <p className="text-gray-600">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === 'name'
                        ? 'border-green-500 shadow-lg shadow-green-500/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === 'email'
                        ? 'border-green-500 shadow-lg shadow-green-500/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === 'subject'
                        ? 'border-green-500 shadow-lg shadow-green-500/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows={6}
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'message'
                        ? 'border-green-500 shadow-lg shadow-green-500/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </form>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4 text-center">Or connect with us on social media</p>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: FaFacebook, color: 'hover:bg-blue-600' },
                    { icon: FaTwitter, color: 'hover:bg-sky-500' },
                    { icon: FaInstagram, color: 'hover:bg-pink-600' },
                    { icon: FaLinkedin, color: 'hover:bg-blue-700' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 rounded-full bg-gray-100 hover:text-white ${social.color} flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon className="text-xl" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="animate-fadeInRight">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full min-h-[600px]">
                <div className="h-full relative">
                  <iframe
                    className="w-full h-full min-h-[600px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4483.702194244415!2d77.27810447436347!3d28.646775928198798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc80ac28a93b%3A0x2d1b7ebca1239ff5!2sGeeta%20Colony%2C%20Laxmi%20Nagar%2C%20Delhi%2C%20110031!5e0!3m2!1sen!2sin!4v1695048967387!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Map Overlay Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Our Location</h4>
                        <p className="text-sm text-gray-600">Geeta Colony, Laxmi Nagar</p>
                        <p className="text-sm text-gray-600">Delhi, 110031</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 to answer your questions and provide support
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7428089818"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              <FaPhone />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:phrms.soc@gmail.com"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-green-400 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <FaEnvelope />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />

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

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
