/**
 * Hero Component
 * Main hero section displayed on the home page
 * Features company tagline and call-to-action buttons
 */

import Button from "../common/Button";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 py-32 text-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 animate-fadeIn">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-slideUp">
          Building Scalable
          <span className="block bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent">
            IT Solutions
          </span>
        </h1>

        {/* Company Description */}
        <p className="max-w-2xl mx-auto text-white/90 text-lg mb-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          NexTech Solutions delivers modern web, cloud, and AI-driven
          digital products for businesses.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/services"
            className="bg-white hover:bg-white/90 text-purple-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
