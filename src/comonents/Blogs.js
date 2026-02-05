import React, { useState } from 'react';
import UseStateHook from '../hooks/UseStateHook';
import { FaCalendarAlt, FaUser, FaComment, FaArrowRight, FaClock, FaTag } from 'react-icons/fa';

const Blogs = () => {
    const { data, dataLoading } = UseStateHook("https://phrmsbackend.vercel.app/api/blogs");
    const [page, setPage] = useState(1);
    const [hoveredBlog, setHoveredBlog] = useState(null);
    const itemsPerPage = 6;

    const totalPages = data?.blogs ? Math.ceil(data.blogs.length / itemsPerPage) : 0;

    const handlePageChange = (newPage) => {
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-20 space-y-6 animate-fadeInUp">
                        <div className="inline-block">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="h-1 w-12 bg-gradient-to-r from-transparent to-green-600 rounded-full"></div>
                                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Blog</span>
                                <div className="h-1 w-12 bg-gradient-to-l from-transparent to-green-600 rounded-full"></div>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                                Recent from Blog
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
                    </div>

                    {/* Loading State */}
                    {dataLoading && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl h-64 mb-4"></div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-green-100 rounded w-3/4"></div>
                                        <div className="h-4 bg-green-100 rounded w-1/2"></div>
                                        <div className="h-20 bg-green-100 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* No Blogs State */}
                    {!dataLoading && (!data || !data.blogs || data.blogs.length === 0) && (
                        <div className="text-center py-32">
                            <div className="text-9xl mb-6 animate-bounce">📝</div>
                            <h3 className="text-3xl font-bold text-gray-600 mb-2">No Blogs Available</h3>
                            <p className="text-gray-500 text-lg">Check back soon for exciting content!</p>
                        </div>
                    )}

                    {/* Blog Grid */}
                    {!dataLoading && data && data.blogs && data.blogs.length > 0 && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {data.blogs.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage).map((blog, index) => (
                                    <article
                                        key={index}
                                        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                        onMouseEnter={() => setHoveredBlog(index)}
                                        onMouseLeave={() => setHoveredBlog(null)}
                                    >
                                        {/* Image Container */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={blog.img}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                                            />
                                            
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold uppercase rounded-full shadow-lg transform -translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                                                Article
                                            </div>

                                            {/* Read Time Badge */}
                                            <div className="absolute top-4 right-4 px-3 py-2 bg-white/90 backdrop-blur-md rounded-full flex items-center gap-2 shadow-lg transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                                                <FaClock className="text-green-600 text-xs" />
                                                <span className="text-xs font-semibold text-gray-700">5 min read</span>
                                            </div>

                                            {/* Hover Overlay Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                                    <FaArrowRight className="text-green-600 text-xl" />
                                                </div>
                                            </div>

                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                                <div className="absolute -inset-full top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine"></div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 space-y-4">
                                            {/* Meta Information */}
                                            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                                                <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300 cursor-pointer">
                                                    <FaCalendarAlt className="text-green-600" />
                                                    <span>{blog.date.month} {blog.date.day}, {blog.date.year}</span>
                                                </div>
                                                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                                                <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300 cursor-pointer">
                                                    <FaUser className="text-green-600" />
                                                    <span>Admin</span>
                                                </div>
                                                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                                                <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300 cursor-pointer">
                                                    <FaComment className="text-green-600" />
                                                    <span>3 Comments</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 leading-tight">
                                                {blog.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                                {blog.desc}
                                            </p>

                                            {/* Read More Button */}
                                            <div className="pt-4 border-t border-gray-100">
                                                <button className="group/btn flex items-center gap-2 text-green-600 font-semibold text-sm hover:gap-4 transition-all duration-300">
                                                    <span>Read More</span>
                                                    <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Decorative Corner Accents */}
                                        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-emerald-500 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                    </article>
                                ))}
                            </div>

                            {/* Enhanced Pagination */}
                            {totalPages > 1 && (
                                <div className="flex flex-col items-center gap-6 animate-fadeInUp">
                                    <div className="flex items-center gap-2">
                                        {/* Previous Button */}
                                        <button
                                            onClick={() => handlePageChange(page - 1)}
                                            disabled={page === 1}
                                            className={`group px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                                                page === 1
                                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    : 'bg-white text-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-x-1'
                                            }`}
                                        >
                                            <FaArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                                            <span className="hidden sm:inline">Previous</span>
                                        </button>

                                        {/* Page Numbers */}
                                        <div className="flex items-center gap-2">
                                            {[...Array(totalPages)].map((_, i) => {
                                                const pageNumber = i + 1;
                                                const isActive = pageNumber === page;
                                                
                                                // Show first, last, current, and adjacent pages
                                                if (
                                                    pageNumber === 1 ||
                                                    pageNumber === totalPages ||
                                                    (pageNumber >= page - 1 && pageNumber <= page + 1)
                                                ) {
                                                    return (
                                                        <button
                                                            key={i}
                                                            onClick={() => handlePageChange(pageNumber)}
                                                            className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 ${
                                                                isActive
                                                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/50 scale-110'
                                                                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md hover:shadow-lg transform hover:scale-105'
                                                            }`}
                                                        >
                                                            {pageNumber}
                                                        </button>
                                                    );
                                                } else if (
                                                    pageNumber === page - 2 ||
                                                    pageNumber === page + 2
                                                ) {
                                                    return (
                                                        <span key={i} className="text-gray-400 px-2">
                                                            ...
                                                        </span>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>

                                        {/* Next Button */}
                                        <button
                                            onClick={() => handlePageChange(page + 1)}
                                            disabled={page === totalPages}
                                            className={`group px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                                                page === totalPages
                                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    : 'bg-white text-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl transform hover:translate-x-1'
                                            }`}
                                        >
                                            <span className="hidden sm:inline">Next</span>
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>

                                    {/* Page Info */}
                                    <div className="text-sm text-gray-500">
                                        Showing <span className="font-semibold text-green-600">{(page - 1) * itemsPerPage + 1}</span> to{' '}
                                        <span className="font-semibold text-green-600">
                                            {Math.min(page * itemsPerPage, data.blogs.length)}
                                        </span>{' '}
                                        of <span className="font-semibold text-green-600">{data.blogs.length}</span> articles
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Custom Animations */}
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

                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animate-shine {
                    animation: shine 2s infinite;
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

export default Blogs;
