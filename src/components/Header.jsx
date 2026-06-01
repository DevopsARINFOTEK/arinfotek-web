import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        
        <a href="#" className="flex items-center hover:opacity-90 transition">
          <img src="/arinfotek_logo.png" alt="AR INFOTEK" className="h-9 md:h-11 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-100">
          <a href="#" className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300">Home</a>
          <a href="#courses" className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300">Courses</a>
          <a href="#why" className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300">Why Us</a>
          <a href="#projects" className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300">Innovation Labs</a>
          <a href="#internship" className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300">Internship</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg font-bold border-2 border-primary text-primary hover:bg-primary/5 transition text-xs lg:text-sm">
            Talk to Us
          </a>
          <a href="#courses" className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg font-bold bg-gradient-to-r from-accent to-orange-600 text-white shadow-md hover:shadow-orange-200 hover:-translate-y-0.5 transition text-xs lg:text-sm">
            View Courses
          </a>
          
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6 flex flex-col transition-transform">
            <div className="flex items-center justify-between mb-6">
              <div className="font-black text-lg text-primary tracking-tight">MENU</div>
              <button onClick={() => setIsMenuOpen(false)} className="p-1.5 text-slate-400 hover:text-red-500 bg-slate-50 rounded-lg">✕</button>
            </div>
            <div className="flex flex-col space-y-1">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-primary transition">Home</a>
              <a href="#courses" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-primary transition">Courses</a>
              <a href="#why" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-primary transition">Why AR INFOTEK</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-primary transition">Innovation Labs</a>
              <a href="#internship" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-primary transition">Internship</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-primary transition">Contact</a>
            </div>
            <div className="mt-auto grid gap-3">
              <a href="#courses" onClick={() => setIsMenuOpen(false)} className="text-center py-3 rounded-lg bg-accent text-white font-bold shadow-lg shadow-orange-200">View Courses</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-center py-3 rounded-lg border-2 border-primary text-primary font-bold">Talk to Us</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}