import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Sun, Moon, Globe, Menu, X, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/projects', label: t('projects') },
    { path: '/skills', label: t('skills') },
    { path: '/notes', label: t('notes') },
    { path: '/contact', label: t('contact') }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wider text-red-600 hover:text-red-500 transition-colors">
            <span className="font-black">LUTHFIE</span>
            <span className="text-white ml-1">LUNG</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all hover:text-red-500 ${
                  isActive(link.path) 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme, Language & Auth Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-red-900/20 hover:bg-red-900/40 text-red-500 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-red-900/20 hover:bg-red-900/40 text-red-500 transition-all flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>

            {/* Auth Button */}
            {isAuthenticated && (
              <button
                onClick={logout}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
              >
                <LogOut size={18} />
                <span className="text-sm">Logout</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg bg-red-900/20 hover:bg-red-900/40 text-red-500 transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-red-900/30 pt-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'bg-red-900/40 text-red-500 font-semibold'
                    : 'text-gray-300 hover:bg-red-900/20 hover:text-red-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && (
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;