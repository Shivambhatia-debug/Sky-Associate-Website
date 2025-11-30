"use client";

import { useEffect, useState } from "react";

const serviceImages = [
  { src: "/images/OIP.jpeg", title: "Tax & Financial Services" },
  { src: "/images/OIP (1).jpeg", title: "Business Registration" },
  { src: "/images/certification.jpeg", title: "Certifications" },
  { src: "/images/architecture.jpeg", title: "Architecture" },
  { src: "/images/loan.jpeg", title: "Loan" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden pt-20"
    >
      {/* Blurred Logo Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/logo.jpg)',
            filter: 'blur(40px)',
            opacity: 0.1,
            transform: 'scale(1.2)',
          }}
        ></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Company Info */}
          <div className="text-left space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 leading-tight">
                Sky And Associates
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full mb-6"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
              Your satisfaction is our first priority
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Professional GST Practitioner & Business Services Provider offering comprehensive solutions for all your business needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#services"
                className="px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Side - Service Images Grid */}
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {/* Row 1 - 3 images */}
            <div className="col-span-2 row-span-2">
              <div className="relative w-full h-full min-h-[200px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={serviceImages[0].src} 
                  alt={serviceImages[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                  {serviceImages[0].title}
                </div>
              </div>
            </div>
            
            <div className="col-span-1 row-span-1">
              <div className="relative w-full h-full min-h-[100px] rounded-xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={serviceImages[1].src} 
                  alt={serviceImages[1].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white font-semibold text-xs">
                  {serviceImages[1].title}
                </div>
              </div>
            </div>

            <div className="col-span-1 row-span-1">
              <div className="relative w-full h-full min-h-[100px] rounded-xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={serviceImages[2].src} 
                  alt={serviceImages[2].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white font-semibold text-xs">
                  {serviceImages[2].title}
                </div>
              </div>
            </div>

            {/* Row 2 - 2 images */}
            <div className="col-span-1 row-span-1">
              <div className="relative w-full h-full min-h-[100px] rounded-xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={serviceImages[3].src} 
                  alt={serviceImages[3].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white font-semibold text-xs">
                  {serviceImages[3].title}
                </div>
              </div>
            </div>

            <div className="col-span-2 row-span-1">
              <div className="relative w-full h-full min-h-[100px] rounded-xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={serviceImages[4].src} 
                  alt={serviceImages[4].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white font-semibold text-xs">
                  {serviceImages[4].title}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center animate-bounce">
          <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

