import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FolderGit2, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { data, t } = useLanguage();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-red-600"></div>
            <FolderGit2 className="text-red-600" size={32} />
            <div className="h-px w-16 bg-red-600"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide">
            {data.projects.title}
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.projects.items.map((project) => (
            <div
              key={project.id}
              className="group relative bg-black border border-red-900/30 rounded-lg overflow-hidden hover:border-red-600/50 transition-all duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-red-600/90 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <span className="font-semibold">{t('viewProject')}</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-900/20 text-red-500 text-xs font-medium rounded border border-red-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-600/30 group-hover:border-red-600 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;