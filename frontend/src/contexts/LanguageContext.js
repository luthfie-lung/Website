import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../mock';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'id';
  });

  const data = portfolioData[language];

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const t = (key) => {
    const translations = {
      id: {
        home: 'Beranda',
        about: 'Tentang',
        projects: 'Proyek',
        skills: 'Keahlian',
        notes: 'Catatan',
        contact: 'Kontak',
        readMore: 'Baca Selengkapnya',
        viewProject: 'Lihat Proyek',
        sendMessage: 'Kirim Pesan',
        yourName: 'Nama Anda',
        yourEmail: 'Email Anda',
        yourMessage: 'Pesan Anda',
        submit: 'Kirim',
        allProjects: 'Semua Proyek',
        allNotes: 'Semua Catatan',
        latestNotes: 'Catatan Terbaru',
        featuredProjects: 'Proyek Unggulan'
      },
      en: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        notes: 'Notes',
        contact: 'Contact',
        readMore: 'Read More',
        viewProject: 'View Project',
        sendMessage: 'Send Message',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        yourMessage: 'Your Message',
        submit: 'Submit',
        allProjects: 'All Projects',
        allNotes: 'All Notes',
        latestNotes: 'Latest Notes',
        featuredProjects: 'Featured Projects'
      }
    };
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data, t }}>
      {children}
    </LanguageContext.Provider>
  );
};