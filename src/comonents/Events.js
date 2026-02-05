import React, { useState } from 'react';
import UseStateHook from '../hooks/UseStateHook';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowRight, FaUsers, FaTicketAlt, FaStar } from 'react-icons/fa';

const Events = () => {
  const { data, dataLoading } = UseStateHook(`${process.env.REACT_APP_BACKEND_URL}/api/events`);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all'); // upcoming, past, all
  const itemsPerPage = 6;

  const events = data?.events || [];
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6 animate-fadeInUp">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaCalendarAlt className="text-green-600 text-2xl animate-bounce" />
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Join Us</span>
                <FaStar className="text-yellow-500 text-xl animate-pulse" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Our Latest Events
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-green-600 to-transparent rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></div>
                <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-emerald-600 to-transparent rounded-full"></div>
              </div>
            </div>
            
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Join us for inspiring events that make a difference in our community
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 flex-wrap mt-8">
              {['all', 'upcoming', 'past'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    filter === filterType
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)} Events
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {dataLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl h-96"></div>
                </div>
              ))}
            </div>
          )}

          {/* No Events State */}
          {!dataLoading && events.length === 0 && (
            <div className="text-center py-32">
              <div className="text-9xl mb-6 animate-bounce">📅</div>
              <h3 className="text-3xl font-bold text-gray-600 mb-2">No Events Available</h3>
              <p className="text-gray-500 text-lg">Check back soon for exciting events!</p>
            </div>
          )}

          {/* Events Grid */}
          {!dataLoading && events.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {events.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((event, index) => (
                  <article
                    key={index}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 px-4 py-2 bg-green-600 text-white text-xs font-bold uppercase rounded-full shadow-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Upcoming
                      </div>

                      {/* Favorite Button */}
                      <button className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform scale-0 group-hover:scale-100">
                        <FaStar className="text-lg" />
                      </button>

                      {/* Date Badge - Bottom Left */}
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl text-center min-w-[70px]">
                        <div className="text-2xl font-bold text-green-600">
                          {event.eventDate.day}
                        </div>
                        <div className="text-xs font-semibold text-gray-600 uppercase">
                          {event.eventDate.month}
                        </div>
                        <div className="text-xs text-gray-500">
                          {event.eventDate.year}
                        </div>
                      </div>

                      {/* Attendees Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-2 bg-white/95 backdrop-blur-md rounded-full flex items-center gap-2 shadow-lg transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                        <FaUsers className="text-green-600 text-sm" />
                        <span className="text-xs font-bold text-gray-700">50+ Going</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 leading-tight">
                        {event.title}
                      </h3>

                      {/* Event Details */}
                      <div className="space-y-3">
                        {/* Time */}
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                            <FaClock className="text-green-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">
                              {event.startTime.timeValHour}:{event.startTime.timeValMinute.toString().padStart(2, '0')} {event.startTime.period} - {event.endTime.timeValHour}:{event.endTime.timeValMinute.toString().padStart(2, '0')} {event.endTime.period}
                            </div>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                            <FaMapMarkerAlt className="text-emerald-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">Venue Main Campus</div>
                            <div className="text-xs text-gray-500">Delhi, India</div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {event.desc}
                      </p>

                      {/* Divider */}
                      <div className="border-t border-gray-100 pt-4"></div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                          <FaTicketAlt className="text-sm group-hover/btn:animate-bounce" />
                          <span>Join Event</span>
                          <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300 text-sm" />
                        </button>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full">
                          Community
                        </span>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full">
                          Free Entry
                        </span>
                      </div>
                    </div>

                    {/* Decorative Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-emerald-500 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute -inset-full top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shine"></div>
                    </div>
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
                      {Math.min(page * itemsPerPage, events.length)}
                    </span>{' '}
                    of <span className="font-semibold text-green-600">{events.length}</span> events
                  </div>
                </div>
              )}
            </>
          )}
        </div>
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

export default Events;
