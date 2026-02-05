import React, { useState, useEffect } from 'react';

const FullScreenCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      id: 0,
      image: './assets/img/20231216_123355.jpg',
      tag: 'Nutrition Program',
      title: 'Fueling Futures with Mid-Day Meals',
      description: 'In areas where malnutrition is prevalent, PHRMS works with schools to provide nutritious meals. These meals are a key source of nourishment, improving concentration and class performance.',
      stats: { number: '5,000+', label: 'Students Fed Daily' }
    },
    {
      id: 1,
      image: './assets/img/20230812_130713.jpg',
      tag: 'Education Initiative',
      title: 'Empowering Through Education',
      description: 'We distribute school kits including notebooks, pens, and essentials. These kits are provided at the start of every term to ensure every child has the basic tools to succeed.',
      stats: { number: '3,000+', label: 'School Kits Distributed' }
    },
    {
      id: 2,
      image: './assets/img/7.jpg',
      tag: 'Community Development',
      title: 'Building a Foundation for Learning',
      description: 'Beyond supplies, we build partnerships with local communities to ensure long-term support for student welfare and infrastructure development.',
      stats: { number: '50+', label: 'Partner Communities' }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) nextSlide();
    if (touchStart - touchEnd < -150) prevSlide();
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
              {/* Green tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/10"></div>
            </div>

            {/* Content Container - With proper padding to avoid overlap */}
            <div className="absolute inset-0 flex items-center pt-24 pb-32 md:pt-28 md:pb-36">
              <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="max-w-4xl">
                  
                  {/* Tag */}
                  <div className={`inline-flex items-center gap-3 mb-4 md:mb-6 transition-all duration-1000 delay-200 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <div className="h-px w-10 md:w-12 bg-green-400"></div>
                    <span className="text-green-400 font-semibold tracking-wider uppercase text-xs sm:text-sm md:text-base">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 transition-all duration-1000 delay-300 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8 max-w-2xl transition-all duration-1000 delay-400 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slide.description}
                  </p>

                  {/* Stats */}
                  <div className={`flex items-center gap-4 md:gap-6 mb-6 md:mb-10 transition-all duration-1000 delay-500 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="h-12 md:h-16 w-1 bg-gradient-to-b from-green-400 to-emerald-500"></div>
                      <div>
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                          {slide.stats.number}
                        </div>
                        <div className="text-green-300 font-medium text-xs sm:text-sm md:text-base">
                          {slide.stats.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className={`flex flex-wrap gap-3 md:gap-4 transition-all duration-1000 delay-600 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <button className="group relative px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm md:text-base lg:text-lg rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <span className="relative z-10 flex items-center gap-2 md:gap-3">
                        Get Involved
                        <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                    
                    <button className="px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-green-400/50 text-white font-semibold text-sm md:text-base lg:text-lg rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Top Navigation Bar - Fixed height */}
      <div className="absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-black/70 to-transparent">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="text-white">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-green-400 tracking-wider">
                
              </div>
            </div>
            
            {/* Auto-play toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 hover:bg-green-600 backdrop-blur-sm border border-white/20 hover:border-green-400 text-white rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Toggle autoplay"
            >
              {isAutoPlaying ? (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Controls - Fixed height */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-black/70 to-transparent">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            
            {/* Progress Indicators */}
            <div className="flex items-center gap-4 md:gap-6 order-2 sm:order-1">
              <div className="flex gap-2 md:gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="group relative"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? 'w-12 sm:w-16 md:w-20 bg-white/30' 
                        : 'w-6 sm:w-8 md:w-10 bg-white/20 hover:bg-white/30'
                    }`}>
                      {index === currentSlide && (
                        <div 
                          className="absolute top-0 left-0 h-full bg-green-400 rounded-full animate-progress" 
                          style={{ animationDuration: '6000ms' }}
                        ></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Slide Counter */}
              <div className="flex items-center gap-2 text-white/70 font-medium">
                <span className="text-lg md:text-xl text-green-400 font-bold">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="text-xs md:text-sm">/</span>
                <span className="text-xs md:text-sm">
                  {String(slides.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Arrow Navigation */}
            <div className="flex gap-2 md:gap-3 order-1 sm:order-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-green-600 backdrop-blur-sm border border-white/20 hover:border-green-400 text-white rounded-lg transition-all duration-300 group hover:scale-110"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-110"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation-name: progress;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

export default FullScreenCarousel;
