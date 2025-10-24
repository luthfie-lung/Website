import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { data, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with API call
    setTimeout(() => {
      toast({
        title: data.hero.name.includes('ARKAN') ? 'Pesan terkirim!' : 'Message sent!',
        description: data.hero.name.includes('ARKAN')
          ? 'Terima kasih telah menghubungi. Saya akan segera membalas.'
          : 'Thank you for reaching out. I will reply soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socials = [
    { icon: Github, url: 'https://github.com', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-600' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-700' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-red-600"></div>
            <Mail className="text-red-600" size={32} />
            <div className="h-px w-16 bg-red-600"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide">
            {data.contact.title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {data.contact.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black border border-red-900/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t('sendMessage')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('yourName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-red-900/10 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder={data.hero.name.includes('ARKAN') ? 'Masukkan nama Anda' : 'Enter your name'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('yourEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-red-900/10 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder={data.hero.name.includes('ARKAN') ? 'Masukkan email Anda' : 'Enter your email'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('yourMessage')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-red-900/10 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder={data.hero.name.includes('ARKAN') ? 'Tulis pesan Anda...' : 'Write your message...'}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-900/50 text-white font-semibold rounded-lg transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>{data.hero.name.includes('ARKAN') ? 'Mengirim...' : 'Sending...'}</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('submit')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email Card */}
              <div className="bg-black border border-red-900/30 rounded-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-900/20 rounded-lg">
                    <Mail className="text-red-500" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {data.hero.name.includes('ARKAN') ? 'Email' : 'Email'}
                    </h3>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      {data.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-black border border-red-900/30 rounded-lg p-8">
                <h3 className="text-white font-bold text-xl mb-6">
                  {data.hero.name.includes('ARKAN') ? 'Media Sosial' : 'Social Media'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 bg-red-900/10 border border-red-900/30 rounded-lg hover:border-red-600/50 ${social.color} transition-all group`}
                      >
                        <Icon className="text-red-500 group-hover:text-white transition-colors" size={24} />
                        <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;