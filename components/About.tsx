"use client";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-block mb-2">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Sky And Associates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-400 rounded-full mb-8"></div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Sky And Associates is a trusted name in business services, providing 
              comprehensive solutions for all your professional needs. With years of 
              experience and expertise, we are committed to delivering excellence in 
              every service we offer.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our team, led by <strong className="text-blue-600 font-semibold">Akash Kumar</strong>, 
              a certified GST Practitioner, ensures that you receive professional, 
              reliable, and timely services. We understand that your satisfaction is 
              our first priority, and we work tirelessly to exceed your expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Certified GST Practitioner</h4>
                  <p className="text-sm text-gray-600">Licensed & Verified</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Years of Experience</h4>
                  <p className="text-sm text-gray-600">Proven Track Record</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Client-Focused</h4>
                  <p className="text-sm text-gray-600">Your Success First</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Services</h4>
                  <p className="text-sm text-gray-600">All-in-One Solution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative">
            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="inline-block relative mb-6">
                      <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-2xl opacity-50"></div>
                      <div className="relative w-32 h-32 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-100">
                        <img 
                          src="/images/akash-kumar.jpg" 
                          alt="Akash Kumar - GST Practitioner" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Akash Kumar</h3>
                    <p className="text-blue-600 font-semibold text-lg mb-4">GST Practitioner</p>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-4"></div>
                    <p className="text-gray-600 italic text-base leading-relaxed">
                      &ldquo;Your satisfaction is our first priority&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

