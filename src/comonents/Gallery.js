import React, { useState, useEffect } from 'react';
import UseStateHook from '../hooks/UseStateHook';
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus, FaExpand, FaDownload } from 'react-icons/fa';

const Gallery = () => {
    const { data, dataLoading } = UseStateHook(`${process.env.REACT_APP_BACKEND_URL}/api/gallery`);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filter, setFilter] = useState('all');

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? data.galleryImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(data.galleryImages[newIndex]);
    };

    const goToNext = () => {
        const newIndex = currentIndex === data.galleryImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(data.galleryImages[newIndex]);
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedImage) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedImage, currentIndex]);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100">
                <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
                {/* Loading State */}
                {dataLoading && (
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 space-y-6">
                            <div className="h-14 bg-gradient-to-r from-green-200 to-emerald-200 rounded-2xl w-64 mx-auto animate-pulse"></div>
                            <div className="h-6 bg-green-100 rounded-full w-96 mx-auto animate-pulse"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="relative aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gallery Content */}
                {!dataLoading && data && data.galleryImages && (
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-20 space-y-6">
                            <div className="inline-block">
                                <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 animate-fadeInUp">
                                    Our Gallery
                                </h2>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="h-1.5 w-20 bg-gradient-to-r from-transparent via-green-600 to-transparent rounded-full"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></div>
                                    <div className="h-1.5 w-20 bg-gradient-to-r from-transparent via-emerald-600 to-transparent rounded-full"></div>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed animate-fadeInUp animation-delay-200">
                                Explore our collection of memorable moments and beautiful captures from our journey
                            </p>

                            {/* Stats Counter */}
                            <div className="flex justify-center gap-8 mt-12 flex-wrap">
                                <div className="text-center group cursor-pointer">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                        {data.galleryImages.length}+
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">Images</div>
                                </div>
                                <div className="w-px h-12 bg-gradient-to-b from-transparent via-green-300 to-transparent"></div>
                                <div className="text-center group cursor-pointer">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                        50+
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">Events</div>
                                </div>
                                <div className="w-px h-12 bg-gradient-to-b from-transparent via-green-300 to-transparent"></div>
                                <div className="text-center group cursor-pointer">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                        100+
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">Memories</div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Grid with Masonry Effect */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {data.galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-3xl cursor-pointer animate-fadeInUp"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        aspectRatio: index % 5 === 0 ? '1/1.3' : '1/1'
                                    }}
                                    onClick={() => openLightbox(image, index)}
                                >
                                    {/* Image Container */}
                                    <div className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-green-100 to-emerald-100">
                                        <img
                                            src={image.img}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                                            loading="lazy"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                        {/* Hover Content */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                                            {/* View Icon */}
                                            <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                                <FaSearchPlus className="text-green-600 text-2xl" />
                                            </div>

                                            {/* Quick Actions */}
                                            <div className="flex gap-3 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                                                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-lg">
                                                    <FaExpand className="text-sm" />
                                                </button>
                                                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-lg">
                                                    <FaDownload className="text-sm" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Number Badge */}
                                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm font-bold text-green-600 shadow-lg transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500">
                                            {index + 1}
                                        </div>

                                        {/* Animated Border */}
                                        <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-white/30 transition-all duration-500"></div>

                                        {/* Corner Highlights */}
                                        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-green-400 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-emerald-400 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="absolute -inset-full top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {data.galleryImages.length === 0 && (
                            <div className="text-center py-32">
                                <div className="text-9xl mb-6 animate-bounce">📸</div>
                                <h3 className="text-3xl font-bold text-gray-600 mb-2">No Images Yet</h3>
                                <p className="text-gray-500 text-lg">Check back soon for amazing photos!</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Enhanced Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeLightbox}
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/20 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>

                    {/* Top Control Bar */}
                    <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-transparent">
                        <div className="text-white text-lg font-semibold backdrop-blur-md bg-white/10 px-6 py-3 rounded-full">
                            Image {currentIndex + 1} of {data.galleryImages.length}
                        </div>
                        
                        <div className="flex gap-3">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // Download functionality
                                }}
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-emerald-600 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                aria-label="Download"
                            >
                                <FaDownload size={18} />
                            </button>
                            <button
                                onClick={closeLightbox}
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-600 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 hover:scale-110"
                                aria-label="Close"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        className="absolute left-4 sm:left-8 w-14 h-14 rounded-full bg-white/10 hover:bg-emerald-600 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50 group"
                        aria-label="Previous"
                    >
                        <FaChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        className="absolute right-4 sm:right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-emerald-600 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50 group"
                        aria-label="Next"
                    >
                        <FaChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    {/* Image Container with Enhanced Effects */}
                    <div
                        className="relative max-w-6xl max-h-[85vh] w-full mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                            <img
                                src={selectedImage.img}
                                alt={`Gallery ${currentIndex + 1}`}
                                className="w-full h-full object-contain max-h-[85vh] animate-scaleIn"
                            />
                            
                            {/* Glow Effect */}
                            <div className="absolute inset-0 shadow-[0_0_100px_rgba(16,185,129,0.3)] pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-3xl px-4 py-3 bg-black/30 backdrop-blur-md rounded-full scrollbar-hide">
                        {data.galleryImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(idx);
                                    setSelectedImage(img);
                                }}
                                className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                                    idx === currentIndex
                                        ? 'border-emerald-500 scale-110 shadow-lg shadow-emerald-500/50'
                                        : 'border-white/30 opacity-60 hover:opacity-100 hover:scale-105'
                                }`}
                            >
                                <img
                                    src={img.img}
                                    alt={`Thumb ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
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

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
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

                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animate-shine {
                    animation: shine 2s infinite;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Gallery;
