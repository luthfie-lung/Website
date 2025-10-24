import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { User, Target, Award } from 'lucide-react';

const About = () => {
  const { data } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-red-600"></div>
            <User className="text-red-600" size={32} />
            <div className="h-px w-16 bg-red-600"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide">
            {data.about.title}
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-red-900/50 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=800&fit=crop"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            {/* Decorative Corner */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-red-600"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-red-600"></div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {data.about.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {data.about.stats.map((stat, index) => {
                const icons = [Target, Award, User];
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="bg-red-900/10 border border-red-900/30 rounded-lg p-4 text-center hover:bg-red-900/20 transition-all group"
                  >
                    <Icon className="text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" size={28} />
                    <p className="text-3xl font-black text-red-600 mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;