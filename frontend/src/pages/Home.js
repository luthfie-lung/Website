import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown, Code, Skull } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { data } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Skull Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-red-900/20 rounded-full border-2 border-red-600/50 animate-pulse">
              <Skull size={64} className="text-red-600" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-wider">
            <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              {data.hero.name.split(' ')[0]}
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              {data.hero.name.split(' ')[1]}
            </span>
          </h1>

          {/* Title */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
            <Code className="text-red-500" size={24} />
            <h2 className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase">
              {data.hero.title}
            </h2>
            <Code className="text-red-500" size={24} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {data.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/projects"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] w-full sm:w-auto"
            >
              {data.hero.name.includes('ARKAN') ? 'Lihat Proyek' : 'View Projects'}
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-red-600 hover:bg-red-600/10 text-red-500 hover:text-red-400 font-semibold rounded-lg transition-all w-full sm:w-auto"
            >
              {data.hero.name.includes('ARKAN') ? 'Hubungi Saya' : 'Contact Me'}
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-gray-500 tracking-wide">
              {data.hero.name.includes('ARKAN') ? 'Gulir ke bawah' : 'Scroll down'}
            </span>
            <ArrowDown className="text-red-600" size={24} />
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-1/2 w-32 h-px bg-gradient-to-r from-red-600 to-transparent"></div>
      <div className="absolute right-0 top-1/2 w-32 h-px bg-gradient-to-l from-red-600 to-transparent"></div>
    </section>
  );
};

export default Hero;