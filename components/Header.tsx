import React, { useState, useEffect } from 'react';
import { Menu, X, Mic } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-brand-dark shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <Mic size={18} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Sonic<span className="font-light text-gray-400">Note</span> 聆犀
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">核心功能</a>
          <a href="#advantages" className="hover:text-white transition-colors">独特优势</a>
          <a href="#specs" className="hover:text-white transition-colors">参数规格</a>
          <a href="#demo" className="hover:text-white transition-colors">AI 演示</a>
          <button className="bg-white text-brand-dark px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            立即购买
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark border-b border-gray-800 p-6 flex flex-col gap-4">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 py-2">核心功能</a>
          <a href="#advantages" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 py-2">独特优势</a>
          <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 py-2">参数规格</a>
          <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 py-2">AI 演示</a>
          <button className="bg-white text-brand-dark w-full py-3 rounded-lg font-semibold">
            立即购买
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;