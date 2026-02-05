import React, { useEffect, useState } from 'react';
import UseStateHook from '../hooks/UseStateHook';
import { formatDistanceToNow } from 'date-fns';
import { FaHeart, FaArrowRight, FaClock, FaChevronLeft, FaChevronRight, FaDonate, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';
import {  useCallback } from "react";


const Cause = () => {
    const { data, dataLoading } = UseStateHook(`${process.env.REACT_APP_BACKEND_URL}/api/cause`);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const causes = data?.causes || [];

    
const nextSlide = useCallback(() => {
  setCurrentIndex((prev) => (prev + 1) % causes.length);
}, [causes.length]);
    const prevSlide = () => {
        if (isAnimating || causes.length === 0) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + causes.length) % causes.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Auto-play
    useEffect(() => {
  if (causes.length === 0) return;

  const interval = setInterval(nextSlide, 5000);
  return () => clearInterval(interval);
}, [nextSlide, causes.length]);


    // Get visible causes based on screen size
    const getVisibleCauses = () => {
        if (causes.length === 0) return [];
        
        const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
        const result = [];
        
        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % causes.length;
            result.push(causes[index]);
        }
        
        return result;
    };

    const visibleCauses = getVisibleCauses();

    return (
        <div className="relative overflow-hidden py-20">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-green-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-emerald-300 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-6 animate-fadeInUp">
                    <div className="inline-block">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaHandHoldingHeart className="text-green-600 text-2xl animate-bounce" />
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Support Our Mission</span>
                            <FaHeart className="text-pink-500 text-xl animate-pulse" />
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                            Our Causes
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-green-600 to-transparent rounded-full"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></div>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-emerald-600 to-transparent rounded-full"></div>
                        </div>
                    </div>
                    
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mt-12 flex-wrap">
                        <div className="text-center group cursor-pointer">
                            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                {causes.length}+
                            </div>
                            <div className="text-sm text-gray-500 mt-1">Active Causes</div>
                        </div>
                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-green-300 to-transparent"></div>
                        <div className="text-center group cursor-pointer">
                            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                $50K+
                            </div>
                            <div className="text-sm text-gray-500 mt-1">Raised</div>
                        </div>
                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-green-300 to-transparent"></div>
                        <div className="text-center group cursor-pointer">
                            <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                500+
                            </div>
                            <div className="text-sm text-gray-500 mt-1">Donors</div>
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {dataLoading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl h-[500px]"></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Causes Carousel */}
                {!dataLoading && causes.length > 0 && (
                    <div className="relative animate-fadeInUp animation-delay-200">
                        {/* Navigation Buttons */}
                        {causes.length > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={isAnimating}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-green-600 shadow-xl hover:shadow-2xl flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group -translate-x-4 sm:-translate-x-6"
                                >
                                    <FaChevronLeft className="text-lg sm:text-xl group-hover:-translate-x-1 transition-transform duration-300" />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    disabled={isAnimating}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-green-600 shadow-xl hover:shadow-2xl flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group translate-x-4 sm:translate-x-6"
                                >
                                    <FaChevronRight className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </>
                        )}

                        {/* Causes Grid */}
                        <div className="overflow-hidden">
                            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                                {visibleCauses.map((cause, index) => (
                                    <div
                                        key={`${currentIndex}-${index}`}
                                        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slideIn"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {/* Image Container */}
                                        <div className="relative h-56 sm:h-64 overflow-hidden">
                                            <img
                                                src={cause.img}
                                                alt={cause.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                                            {/* Floating Badge */}
                                            <div className="absolute top-4 right-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/95 backdrop-blur-md rounded-full flex items-center gap-2 shadow-lg transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                                                <FaUsers className="text-green-600 text-xs sm:text-sm" />
                                                <span className="text-xs font-bold text-gray-700">Active</span>
                                            </div>

                                            {/* Heart Icon */}
                                            <button className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform scale-0 group-hover:scale-100">
                                                <FaHeart className="text-sm sm:text-lg" />
                                            </button>

                                            {/* Category Label */}
                                            <div className="absolute bottom-4 left-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold uppercase rounded-full shadow-lg">
                                                Urgent
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                                            {/* Title */}
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 leading-tight">
                                                {cause.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                                {cause.desc}
                                            </p>

                                            {/* Last Donation Time */}
                                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                                                <FaClock className="text-green-600 flex-shrink-0" />
                                                <span className="truncate">
                                                    Last donation {cause.createdAt ? formatDistanceToNow(new Date(cause.createdAt), { addSuffix: true }) : "1w ago"}
                                                </span>
                                            </div>

                                            {/* Progress Section */}
                                            <div className="space-y-3">
                                                {/* Progress Bar */}
                                                <div className="relative h-2.5 sm:h-3 bg-gray-100 rounded-full overflow-hidden">
                                                    <div 
                                                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                                                        style={{ width: '65%' }}
                                                    >
                                                        <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                                                    </div>
                                                    {/* Progress Indicator */}
                                                    <div 
                                                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-lg border-2 border-green-500 transition-all duration-1000"
                                                        style={{ left: 'calc(65% - 8px)' }}
                                                    ></div>
                                                </div>

                                                {/* Funding Info */}
                                                <div className="flex justify-between items-center text-xs sm:text-sm">
                                                    <div>
                                                        <span className="font-bold text-green-600 text-base sm:text-lg">$19,500</span>
                                                        <span className="text-gray-500"> raised</span>
                                                    </div>
                                                    <div className="text-gray-500">
                                                        of <span className="font-semibold text-gray-700">$30,000</span>
                                                    </div>
                                                </div>

                                                {/* Additional Stats */}
                                                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                                        <FaUsers className="text-green-600" />
                                                        <span><span className="font-semibold text-gray-700">234</span> donors</span>
                                                    </div>
                                                    <div className="text-xs font-semibold text-green-600">
                                                        65% funded
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Donate Button */}
                                            <button className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                                                <FaDonate className="text-base sm:text-lg group-hover/btn:animate-bounce" />
                                                <span>Donate Now</span>
                                                <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300 text-sm" />
                                            </button>
                                        </div>

                                        {/* Decorative Corner Accent */}
                                        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 border-b-4 border-r-4 border-emerald-500 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        {causes.length > 1 && (
                            <div className="flex justify-center gap-2 mt-8 sm:mt-12">
                                {causes.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        disabled={isAnimating}
                                        className={`h-2 sm:h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                                            index === currentIndex
                                                ? 'w-6 sm:w-8 bg-gradient-to-r from-green-600 to-emerald-600'
                                                : 'w-2 sm:w-3 bg-gray-300 hover:bg-green-400'
                                        }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Empty State */}
                {!dataLoading && causes.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-7xl sm:text-9xl mb-6 animate-bounce">💚</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-2">No Causes Available</h3>
                        <p className="text-gray-500 text-base sm:text-lg">Check back soon for new causes!</p>
                    </div>
                )}

                {/* Call to Action */}
                {!dataLoading && causes.length > 0 && (
                    <div className="text-center mt-12 sm:mt-16 animate-fadeInUp animation-delay-400">
                        <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto">
                            <span>View All Causes</span>
                            <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                    </div>
                )}
            </div>

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

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
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

                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }

                .animate-slideIn {
                    animation: slideIn 0.5s ease-out forwards;
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                }

                .animation-delay-1000 {
                    animation-delay: 1s;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

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

export default Cause;
