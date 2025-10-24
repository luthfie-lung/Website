import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    const result = login(formData.email, formData.password);

    if (result.success) {
      toast({
        title: 'Login berhasil!',
        description: 'Selamat datang kembali.',
      });
      navigate('/admin');
    } else {
      toast({
        title: 'Login gagal',
        description: result.error || 'Email atau password salah.',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-red-900/20 rounded-full mb-4">
              <Lock className="text-red-600" size={48} />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
              Admin Login
            </h1>
            <p className="text-gray-400">
              Masuk untuk mengelola konten
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-black border border-red-900/30 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-red-900/10 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="admin@darkweb.dev"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 bg-red-900/10 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-900/50 text-white font-semibold rounded-lg transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Memproses...' : 'Masuk'}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-red-900/10 border border-red-900/30 rounded-lg">
              <p className="text-xs text-gray-400 mb-2 font-semibold">Demo Credentials:</p>
              <p className="text-xs text-gray-500">Email: admin@darkweb.dev</p>
              <p className="text-xs text-gray-500">Password: admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;