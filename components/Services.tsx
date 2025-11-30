"use client";

import { useState } from "react";

interface Service {
  title: string;
  description: string;
  image?: string;
  items: string[];
}

const services: Service[] = [
  {
    title: "Tax & Financial Services",
    description: "Complete tax filing and financial services for individuals and businesses",
    image: "/images/OIP.jpeg",
    items: [
      "GST Registration & Filing",
      "TDS Return Filing",
      "ITR Return (Income Tax Return)",
      "Income Tax Return",
      "Audit Report"
    ]
  },
  {
    title: "Business Registration",
    description: "All types of business registration services under one roof",
    image: "/images/OIP (1).jpeg",
    items: [
      "MSME Registration (Udhyam)",
      "Trust Registration",
      "Shop & Establishment Registration",
      "GeM Registration",
      "Partnership Registration",
      "Company Registration"
    ]
  },
  {
    title: "Certification & Documentation",
    description: "Professional certification and documentation support",
    image: "/images/certification.jpeg",
    items: [
      "ISO Certification",
      "DSC (Digital Signature Certificate)",
      "PAN Card Services",
      "TAN Registration",
      "Loan Documentation"
    ]
  },
  {
    title: "Architectural & Drawing Services",
    description: "Complete architectural drawings and design solutions",
    image: "/images/architecture.jpeg",
    items: [
      "Floor Plan",
      "3D Elevation",
      "Structure Drawings",
      "Working Drawings",
      "Electrical Drawings",
      "Plumbing Drawings"
    ]
  },
  {
    title: "Home Loan Services",
    description: "Expert assistance with home loan documentation and processing",
    image: "/images/loan.jpeg",
    items: [
      "Home Loan Documentation",
      "Home Loan Application Support",
      "Loan Processing Assistance"
    ]
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive business solutions tailored to your needs with professional expertise
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Section */}
              <div className="relative h-56 w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
                {/* Image overlay (if image exists) */}
                {service.image && (
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-800/20 to-blue-900/30 group-hover:from-blue-600/20 group-hover:via-blue-800/30 group-hover:to-blue-900/40 transition-all duration-500"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <div className="p-8">

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Service Items */}
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-gray-700 group/item"
                  >
                    <div className="mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-blue-100 group-hover/item:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-blue-600 group-hover/item:text-white transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-6 font-light">
            Need more information? Contact us for a free consultation
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Get in Touch</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

