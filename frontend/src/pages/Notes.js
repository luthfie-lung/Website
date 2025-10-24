import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Notes = () => {
  const { data, t } = useLanguage();
  const [selectedTag, setSelectedTag] = useState('all');

  // Get all unique tags
  const allTags = ['all', ...new Set(data.notes.items.flatMap(note => note.tags))];

  // Filter notes by tag
  const filteredNotes = selectedTag === 'all'
    ? data.notes.items
    : data.notes.items.filter(note => note.tags.includes(selectedTag));

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-red-600"></div>
            <BookOpen className="text-red-600" size={32} />
            <div className="h-px w-16 bg-red-600"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide">
            {data.notes.title}
          </h1>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedTag === tag
                  ? 'bg-red-600 text-white'
                  : 'bg-red-900/20 text-red-500 hover:bg-red-900/40 border border-red-900/30'
              }`}
            >
              {tag === 'all' ? (data.hero.name.includes('ARKAN') ? 'Semua' : 'All') : tag}
            </button>
          ))}
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredNotes.map((note) => (
            <Link
              key={note.id}
              to={`/notes/${note.id}`}
              className="group bg-black border border-red-900/30 rounded-lg p-6 hover:border-red-600/50 transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
            >
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{note.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{note.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                {note.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {note.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {note.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-red-900/20 text-red-500 text-xs rounded border border-red-900/30"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <div className="mt-4 pt-4 border-t border-red-900/30">
                <span className="text-red-500 text-sm font-semibold group-hover:underline">
                  {t('readMore')} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {data.hero.name.includes('ARKAN')
                ? 'Tidak ada catatan dengan tag ini'
                : 'No notes found with this tag'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;