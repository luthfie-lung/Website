import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Zap } from 'lucide-react';

const Skills = () => {
  const { data } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-red-600"></div>
            <Zap className="text-red-600" size={32} />
            <div className="h-px w-16 bg-red-600"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide">
            {data.skills.title}
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {data.skills.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-black border border-red-900/30 rounded-lg p-6 hover:border-red-600/50 transition-all group"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {category.name}
                </h3>
                <div className="h-1 w-12 bg-red-600 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors"
                  >
                    <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;