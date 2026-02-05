import React from 'react';
import BgImage from "../../public/images/bg_5.jpg";
import { Link } from "react-router-dom";
import { FaHeart, FaUsers, FaHandsHelping, FaBullseye, FaEye, FaAward, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <div
                style={{ backgroundImage: `url(${BgImage})` }}
                className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center overflow-hidden"
            >
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-green-900/50"></div>
                
                {/* Animated particles effect */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute top-40 right-32 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-32 left-40 w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-20 right-20 w-3 h-3 bg-green-300 rounded-full animate-ping"></div>
                </div>

                {/* Content */}
                <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-fadeInUp'>
                    {/* Breadcrumb */}
                    <div className='flex text-white justify-center items-center gap-3 sm:gap-4 mb-6 text-sm sm:text-base'>
                        <Link to="/" className='hover:text-green-400 transition-colors duration-300 pb-1 border-b-2 border-green-400 font-semibold'>
                            Home
                        </Link>
                        <span className='text-green-400'>/</span>
                        <span className='text-green-400 pb-1 border-b-2 border-green-400 font-semibold'>
                            About Us
                        </span>
                    </div>

                    {/* Title with animation */}
                    <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-fadeInUp animation-delay-200'>
                        About <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>PHRMS</span>
                    </h1>

                    {/* Subtitle */}
                    <p className='text-gray-200 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 animate-fadeInUp animation-delay-400'>
                        Empowering communities through education, health, and sustainable development
                    </p>

                    {/* CTA Buttons */}
                    <div className='flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-600'>
                        <button className='group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2'>
                            <span>Get Involved</span>
                            <FaHeart className='group-hover:animate-bounce' />
                        </button>
                        <button className='px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-green-400 text-white font-semibold rounded-full transition-all duration-300'>
                            Contact Us
                        </button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2'>
                            <div className='w-1.5 h-3 bg-green-400 rounded-full animate-pulse'></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who We Are Section */}
            <section className='py-20 bg-white relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-30'></div>
                <div className='absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-30'></div>
                
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='grid md:grid-cols-2 gap-12 lg:gap-16 items-center'>
                        {/* Image Side */}
                        <div className='relative animate-fadeInLeft'>
                            <div className='relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500'>
                                <img 
                                    src={BgImage} 
                                    alt="About PHRMS" 
                                    className='w-full h-[400px] md:h-[500px] object-cover'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                            </div>
                            
                            {/* Floating Stats Card */}
                            <div className='absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-transform duration-300'>
                                <div className='text-center'>
                                    <div className='text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2'>
                                        10+
                                    </div>
                                    <div className='text-sm text-gray-600 font-semibold'>Years of Impact</div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className='animate-fadeInRight'>
                            <div className='inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-50 rounded-full'>
                                <FaUsers className='text-green-600' />
                                <span className='text-green-600 font-semibold text-sm uppercase tracking-wider'>Who We Are</span>
                            </div>

                            <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-6 leading-tight'>
                                Making a <span className='bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>Difference</span> Together
                            </h2>

                            <p className='text-gray-600 text-lg leading-relaxed mb-6'>
                                PHRMS (Public Health and Resource Management Society) is a non-profit organization dedicated to transforming lives through comprehensive community development programs.
                            </p>

                            <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                                Since our inception, we've been committed to addressing critical issues in education, healthcare, nutrition, and skill development, reaching thousands of individuals across underserved communities.
                            </p>

                            {/* Key Points */}
                            <div className='space-y-4 mb-8'>
                                {[
                                    'Community-driven initiatives',
                                    'Sustainable development approach',
                                    'Transparent operations',
                                    'Measurable social impact'
                                ].map((point, index) => (
                                    <div key={index} className='flex items-center gap-3 group'>
                                        <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300'>
                                            <FaCheckCircle className='text-green-600 group-hover:text-white transition-colors duration-300' />
                                        </div>
                                        <span className='text-gray-700 font-medium'>{point}</span>
                                    </div>
                                ))}
                            </div>

                            <button className='px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                Learn More About Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className='py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden'>
                <div className='absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 animate-blob'></div>
                <div className='absolute bottom-20 right-20 w-72 h-72 bg-emerald-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>

                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-4'>
                            Our Purpose & <span className='bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>Direction</span>
                        </h2>
                        <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                            Guided by our core values and unwavering commitment to social change
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 gap-8'>
                        {/* Mission Card */}
                        <div className='group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp'>
                            <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                                <FaBullseye className='text-white text-2xl' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Mission</h3>
                            <p className='text-gray-600 leading-relaxed mb-6'>
                                To empower marginalized communities by providing access to quality education, healthcare, and livelihood opportunities, fostering sustainable development and social equity.
                            </p>
                            <div className='h-1 w-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full'></div>
                        </div>

                        {/* Vision Card */}
                        <div className='group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp animation-delay-200'>
                            <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                                <FaEye className='text-white text-2xl' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Vision</h3>
                            <p className='text-gray-600 leading-relaxed mb-6'>
                                A world where every individual, regardless of their background, has the opportunity to lead a healthy, educated, and dignified life, contributing to a just and inclusive society.
                            </p>
                            <div className='h-1 w-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Statistics Section */}
            <section className='py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden'>
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 left-0 w-full h-full bg-pattern'></div>
                </div>

                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-black text-white mb-4'>
                            Our Impact in Numbers
                        </h2>
                        <p className='text-green-100 text-lg'>
                            Real change, measurable results
                        </p>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                        {[
                            { icon: FaUsers, number: '10,000+', label: 'Lives Impacted' },
                            { icon: FaHandsHelping, number: '50+', label: 'Active Programs' },
                            { icon: FaHeart, number: '500+', label: 'Volunteers' },
                            { icon: FaAward, number: '15+', label: 'Awards Won' }
                        ].map((stat, index) => (
                            <div 
                                key={index} 
                                className='text-center group animate-fadeInUp'
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className='w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110'>
                                    <stat.icon className='text-white text-3xl' />
                                </div>
                                <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                                    {stat.number}
                                </div>
                                <div className='text-green-100 font-medium'>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-4'>
                            Our Core <span className='bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>Values</span>
                        </h2>
                        <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {[
                            { title: 'Integrity', desc: 'Operating with transparency and honesty in all our actions' },
                            { title: 'Compassion', desc: 'Approaching every individual with empathy and understanding' },
                            { title: 'Excellence', desc: 'Striving for the highest quality in our programs and services' },
                            { title: 'Collaboration', desc: 'Working together with communities and partners' },
                            { title: 'Innovation', desc: 'Embracing creative solutions to complex challenges' },
                            { title: 'Sustainability', desc: 'Building long-term solutions for lasting impact' }
                        ].map((value, index) => (
                            <div 
                                key={index}
                                className='group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-400 animate-fadeInUp'
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                                    <FaCheckCircle className='text-white text-xl' />
                                </div>
                                <h3 className='text-xl font-bold text-gray-800 mb-3'>{value.title}</h3>
                                <p className='text-gray-600 leading-relaxed'>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden'>
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 left-0 w-64 h-64 bg-green-500 rounded-full filter blur-3xl'></div>
                    <div className='absolute bottom-0 right-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl'></div>
                </div>

                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
                    <FaQuoteLeft className='text-green-400 text-4xl mx-auto mb-6 opacity-50' />
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
                        Join Us in Creating Lasting Change
                    </h2>
                    <p className='text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto'>
                        Together, we can build stronger communities and brighter futures for those who need it most
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <button className='px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2'>
                            <span>Start Making Impact</span>
                            <FaHeart className='animate-pulse' />
                        </button>
                        <button className='px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-green-400 text-white font-bold rounded-full transition-all duration-300'>
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

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
            `}</style>
        </div>
    );
};

export default About;
