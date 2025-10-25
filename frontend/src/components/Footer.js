import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, url: 'mailto:arkan.shadow@darkweb.dev', label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-red-900/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              <span className="font-black">Luthfie</span>
              <span className="text-white ml-1">Lung</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'id'
                ? 'Menciptakan pengalaman digital yang gelap dan kuat dengan sentuhan gothic blackmetal.'
                : 'Crafting dark and powerful digital experiences with gothic blackmetal touch.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              {language === 'id' ? 'Tautan Cepat' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  {language === 'id' ? 'Tentang' : 'About'}
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  {language === 'id' ? 'Proyek' : 'Projects'}
                </a>
              </li>
              <li>
                <a href="/notes" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  {language === 'id' ? 'Catatan' : 'Notes'}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  {language === 'id' ? 'Kontak' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              {language === 'id' ? 'Ikuti Saya' : 'Follow Me'}
            </h4>
            <div className="flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-red-900/20 hover:bg-red-600 text-red-500 hover:text-white rounded-lg transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-900/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Arkan Shadow. {language === 'id' ? 'Semua hak dilindungi.' : 'All rights reserved.'}
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              {language === 'id' ? 'Dibuat dengan' : 'Built with'}
              <Heart size={16} className="text-red-600 fill-red-600 animate-pulse" />
              {language === 'id' ? 'dan banyak kopi' : 'and lots of coffee'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;