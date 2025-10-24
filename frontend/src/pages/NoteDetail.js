import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, Tag, ArrowLeft, User } from 'lucide-react';

const NoteDetail = () => {
  const { id } = useParams();
  const { data, t } = useLanguage();
  
  const note = data.notes.items.find(n => n.id === parseInt(id));

  if (!note) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {data.hero.name.includes('ARKAN') ? 'Catatan tidak ditemukan' : 'Note not found'}
          </h2>
          <Link to="/notes" className="text-red-500 hover:text-red-400">
            {data.hero.name.includes('ARKAN') ? '← Kembali ke Catatan' : '← Back to Notes'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/notes"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{data.hero.name.includes('ARKAN') ? 'Kembali ke Catatan' : 'Back to Notes'}</span>
          </Link>

          {/* Article Header */}
          <article className="bg-black border border-red-900/30 rounded-lg p-8 md:p-12">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{note.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{note.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{note.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              {note.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-red-900/30">
              {note.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-red-900/20 text-red-500 text-sm rounded border border-red-900/30"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Excerpt */}
            <div className="bg-red-900/10 border-l-4 border-red-600 p-6 mb-8 rounded">
              <p className="text-lg text-gray-300 italic">{note.excerpt}</p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {note.content}
              </p>
            </div>

            {/* Divider */}
            <div className="my-12 flex items-center gap-4">
              <div className="flex-1 h-px bg-red-900/30"></div>
              <div className="w-2 h-2 bg-red-600 rotate-45"></div>
              <div className="flex-1 h-px bg-red-900/30"></div>
            </div>

            {/* Author Box */}
            <div className="flex items-center gap-4 bg-red-900/10 border border-red-900/30 rounded-lg p-6">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <User size={32} className="text-red-500" />
              </div>
              <div>
                <p className="text-white font-bold mb-1">{note.author}</p>
                <p className="text-gray-400 text-sm">
                  {data.hero.name.includes('ARKAN')
                    ? 'Pengembang Web Full Stack'
                    : 'Full Stack Web Developer'}
                </p>
              </div>
            </div>
          </article>

          {/* Related Notes */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              {data.hero.name.includes('ARKAN') ? 'Catatan Lainnya' : 'Other Notes'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.notes.items
                .filter(n => n.id !== note.id)
                .slice(0, 2)
                .map((relatedNote) => (
                  <Link
                    key={relatedNote.id}
                    to={`/notes/${relatedNote.id}`}
                    className="bg-black border border-red-900/30 rounded-lg p-6 hover:border-red-600/50 transition-all group"
                  >
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                      {relatedNote.title}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                      {relatedNote.excerpt}
                    </p>
                    <span className="text-red-500 text-sm font-semibold group-hover:underline">
                      {t('readMore')} →
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;