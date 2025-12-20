
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Globe, Menu, X, ArrowUp, ChevronRight, Github, Linkedin, Send, MessageSquare, Shield, Smartphone, Monitor, Cpu, Code } from 'lucide-react';
import { Language, Theme } from './types';
import { translations } from './translations';
import { SERVICES, TEAM, INTERVIEW_STEPS } from './constants';

// --- Contexts ---
interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

// --- Components ---

const Navbar = () => {
  const { lang, setLang, theme, setTheme, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_services'), path: '/services' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_interview'), path: '/interview' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-opacity-20 border-[#00ffe5]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="font-orbitron text-2xl font-black tracking-tighter text-white hover:neon-text-blue transition-all">
          KRAKEN <span className="text-[#00ffe5]">TECH</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-lg font-medium hover:text-[#00ffe5] transition-colors ${location.pathname === link.path ? 'text-[#00ffe5] underline underline-offset-8' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value as Language)}
            className="bg-transparent text-white border border-[#00ffe5] rounded px-2 py-1 outline-none font-rajdhani uppercase cursor-pointer"
          >
            <option className="text-white bg-black" value="UZ">UZ</option>
            <option className="text-white bg-black" value="RU">RU</option>
            <option className="text-white bg-black" value="EN">EN</option>
          </select>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 border border-[#9d00ff] rounded-full hover:bg-[#9d00ff] transition-all"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="bg-[#9d00ff] hover:bg-[#00ffe5] hover:text-black text-white px-6 py-2 rounded font-bold font-orbitron transition-all neon-border-purple">
            {t('nav_cta')}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-[#00ffe5]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden glass fixed inset-0 top-20 z-40 p-8 flex flex-col space-y-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-orbitron text-white border-b border-white/10 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex justify-between items-center pt-4">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent text-white border border-[#00ffe5] rounded px-4 py-2"
            >
              <option value="UZ">UZ</option>
              <option value="RU">RU</option>
              <option value="EN">EN</option>
            </select>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 border border-[#9d00ff] rounded-full"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          <button className="bg-[#9d00ff] w-full py-4 rounded font-bold text-lg font-orbitron">
            {t('nav_cta')}
          </button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { t } = useApp();
  return (
    <footer className="bg-[#000000] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="font-orbitron text-3xl font-black text-[#00ffe5]">KRAKEN TECH</h2>
          <p className="text-gray-400 text-lg leading-relaxed italic">"{t('about_slogan')}"</p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-[#00ffe5] hover:text-black transition-all"><Github size={24} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-[#9d00ff] hover:text-white transition-all"><Linkedin size={24} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-[#00ffe5] hover:text-black transition-all"><MessageSquare size={24} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-orbitron text-xl mb-6 text-white border-b border-[#00ffe5] pb-2 inline-block">{t('footer_contact')}</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center"><Smartphone className="mr-3 text-[#00ffe5]" size={18} /> +998 71 123 45 67</li>
            <li className="flex items-center"><Send className="mr-3 text-[#00ffe5]" size={18} /> contact@kraken-tech.uz</li>
            <li className="flex items-center"><Monitor className="mr-3 text-[#00ffe5]" size={18} /> Toshkent, O'zbekiston</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-orbitron text-xl mb-6 text-white border-b border-[#9d00ff] pb-2 inline-block">{t('nav_cta')}</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder={t('footer_form_name')} className="bg-[#1a1a1a] border border-white/10 rounded px-4 py-3 outline-none focus:neon-border-blue transition-all" />
              <input type="email" placeholder={t('footer_form_email')} className="bg-[#1a1a1a] border border-white/10 rounded px-4 py-3 outline-none focus:neon-border-blue transition-all" />
            </div>
            <textarea placeholder={t('footer_form_msg')} className="w-full bg-[#1a1a1a] border border-white/10 rounded px-4 py-3 outline-none h-32 focus:neon-border-purple transition-all"></textarea>
            <button className="bg-transparent border-2 border-[#00ffe5] text-[#00ffe5] hover:bg-[#00ffe5] hover:text-black font-bold font-orbitron py-3 px-8 transition-all flex items-center justify-center space-x-2 w-full md:w-auto">
              <span>{t('footer_form_send')}</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
      <div className="mt-20 text-center text-gray-600 border-t border-white/5 pt-8">
        &copy; {new Date().getFullYear()} KRAKEN TECH INDUSTRIES. All rights reserved. Made for the Future.
      </div>
    </footer>
  );
};

const Modal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: string }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative glass neon-border-blue w-full max-w-2xl p-8 rounded-lg animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X size={24} /></button>
        <h2 className="font-orbitron text-3xl mb-6 text-[#00ffe5]">{title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{content}</p>
        <div className="mt-8">
          <button onClick={onClose} className="bg-[#9d00ff] text-white px-8 py-3 font-orbitron hover:neon-border-purple transition-all">Close System</button>
        </div>
      </div>
    </div>
  );
};

// --- Pages ---

const HomePage = () => {
  const { t, lang } = useApp();
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-height-[90vh] pt-32 pb-20 flex flex-col items-center justify-center text-center overflow-hidden cyber-grid">
        <div className="scanline"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9d00ff] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-in fade-in slide-in-from-bottom duration-700">
            {t('hero_title').split(',').map((part, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-[#00ffe5] neon-text-blue block' : 'block text-white'}>
                {part.trim()}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            {t('hero_desc')}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Link to="/services" className="bg-[#9d00ff] hover:bg-[#00ffe5] text-white hover:text-black text-xl font-orbitron px-10 py-5 transition-all neon-border-purple">
              {t('hero_cta_services')}
            </Link>
            <Link to="/contact" className="border-2 border-[#00ffe5] text-[#00ffe5] hover:bg-[#00ffe5] hover:text-black text-xl font-orbitron px-10 py-5 transition-all">
              {t('hero_cta_contact')}
            </Link>
          </div>
        </div>

        {/* Minimal Kraken Tentacle SVG Placeholder */}
        <div className="mt-20 opacity-20 hover:opacity-40 transition-opacity">
          <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 200C50 150 100 100 200 100C300 100 350 150 350 200" stroke="#00ffe5" strokeWidth="2" strokeDasharray="10 10" />
            <path d="M100 200C100 120 150 80 200 80C250 80 300 120 300 200" stroke="#9d00ff" strokeWidth="2" strokeDasharray="5 5" />
            <circle cx="200" cy="80" r="10" stroke="#00ffe5" strokeWidth="1" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-16 text-center">
            <span className="text-white">SYSTEM</span> <span className="text-[#9d00ff]">MODULES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="glass p-8 group hover:neon-border-blue transition-all duration-500 cursor-pointer flex flex-col"
                onClick={() => setSelectedService(service)}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="font-orbitron text-2xl mb-4 text-white group-hover:text-[#00ffe5]">{service.title[lang]}</h3>
                <p className="text-gray-400 text-lg mb-8 flex-grow">{service.description[lang]}</p>
                <button className="flex items-center space-x-2 text-[#00ffe5] font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                  <span>{t('services_more')}</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="font-orbitron text-6xl font-black text-[#00ffe5] mb-2">50+</div>
            <div className="text-gray-400 text-xl font-medium tracking-widest uppercase">{t('about_stats_projects')}</div>
          </div>
          <div>
            <div className="font-orbitron text-6xl font-black text-[#9d00ff] mb-2">100+</div>
            <div className="text-gray-400 text-xl font-medium tracking-widest uppercase">{t('about_stats_clients')}</div>
          </div>
          <div>
            <div className="font-orbitron text-6xl font-black text-[#00ffe5] mb-2">20+</div>
            <div className="text-gray-400 text-xl font-medium tracking-widest uppercase">{t('about_stats_specialists')}</div>
          </div>
        </div>
      </section>

      {/* Interview Teaser */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-orbitron text-4xl mb-8 text-[#9d00ff]">{t('interview_title')}</h2>
          <p className="text-xl text-gray-300 mb-12">
            Kraken jamoasiga qo'shilishni istaysizmi? Bizning shaffof va qat'iy intervyu tizimimiz orqali o'z mahoratingizni isbotlang.
          </p>
          <Link to="/interview" className="inline-block border-2 border-[#9d00ff] text-[#9d00ff] hover:bg-[#9d00ff] hover:text-white text-xl font-orbitron px-12 py-5 transition-all">
            {t('interview_cta')}
          </Link>
        </div>
      </section>

      {selectedService && (
        <Modal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          title={selectedService.title[lang]}
          content={selectedService.details[lang]}
        />
      )}
    </div>
  );
};

const InterviewPage = () => {
  const { t, lang } = useApp();
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="font-orbitron text-5xl font-black mb-4 text-center neon-text-purple">{t('interview_title')}</h1>
      <p className="text-center text-gray-400 text-xl mb-20 max-w-3xl mx-auto">Biz faqat eng yaxshi kibermuhandislar va ishlab chiquvchilarni qidiramiz.</p>

      {/* Visual Roadmap */}
      <div className="relative mb-32">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-[#1a1a1a] -translate-y-1/2 hidden md:block"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {INTERVIEW_STEPS.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full glass neon-border-blue flex items-center justify-center font-orbitron text-3xl font-black mb-6 bg-black text-[#00ffe5] group hover:scale-110 transition-transform">
                0{step.id}
              </div>
              <h3 className="font-orbitron text-2xl text-white mb-4">{step.title[lang]}</h3>
              <p className="text-gray-400 text-lg">{step.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
        <div className="glass p-10 neon-border-blue">
          <h2 className="font-orbitron text-3xl mb-8 text-[#00ffe5]">Nomzodlar uchun talablar</h2>
          <ul className="space-y-6 text-xl text-gray-300">
            <li className="flex items-start"><Code className="mr-4 mt-1 text-[#00ffe5]" /> Algoritmlar va ma'lumotlar tuzilmalarini mukammal bilish</li>
            <li className="flex items-start"><Shield className="mr-4 mt-1 text-[#00ffe5]" /> Xavfsiz koding prinsiplariga amal qilish</li>
            <li className="flex items-start"><Cpu className="mr-4 mt-1 text-[#00ffe5]" /> Tizim dizayni va arxitektura bo'yicha tushuncha</li>
            <li className="flex items-start"><MessageSquare className="mr-4 mt-1 text-[#00ffe5]" /> Jamoada ishlash va muloqot qobiliyati</li>
          </ul>
        </div>

        <div className="glass p-10 neon-border-purple">
          <h2 className="font-orbitron text-3xl mb-8 text-[#9d00ff]">{t('interview_cta')}</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-[#9d00ff] font-orbitron mb-2 uppercase tracking-widest text-sm">Full Name</label>
              <input type="text" className="w-full bg-black/50 border border-[#9d00ff]/30 rounded p-3 text-white outline-none focus:neon-border-purple" />
            </div>
            <div>
              <label className="block text-[#9d00ff] font-orbitron mb-2 uppercase tracking-widest text-sm">Portfolio Link (GitHub/Behance)</label>
              <input type="url" className="w-full bg-black/50 border border-[#9d00ff]/30 rounded p-3 text-white outline-none focus:neon-border-purple" />
            </div>
            <div>
              <label className="block text-[#9d00ff] font-orbitron mb-2 uppercase tracking-widest text-sm">Position</label>
              <select className="w-full bg-black/50 border border-[#9d00ff]/30 rounded p-3 text-white outline-none focus:neon-border-purple">
                <option>Frontend Engineer</option>
                <option>Backend Engineer</option>
                <option>Cybersecurity Specialist</option>
                <option>Robotics Developer</option>
              </select>
            </div>
            <button className="bg-[#9d00ff] text-white w-full py-4 font-orbitron text-xl hover:neon-border-purple transition-all">Submit Resume</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const { t, lang } = useApp();
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <h1 className="font-orbitron text-6xl font-black mb-8"><span className="text-[#00ffe5]">ABOUT</span> KRAKEN</h1>
            <h2 className="text-3xl font-orbitron text-[#9d00ff] mb-6">{t('about_mission')}</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Kraken Tech Industries 2020-yilda raqamli dunyoning chuqur va murakkab muammolariga yechim topish maqsadida tashkil etilgan. 
              Bizning missiyamiz — texnologiyalar yordamida insoniyat imkoniyatlarini kengaytirish va xavfsiz kelajakni barpo etishdir.
            </p>
            <p className="text-xl text-gray-400">
              Biz shunchaki kod yozmaymiz, biz raqamli ekotizimlarni boshqaramiz. Har bir loyiha biz uchun yangi okean va biz uni kashf etishdan qo'rqmaymiz.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-[#00ffe5] opacity-20 blur-2xl rounded-full"></div>
             <img src="https://storage.yandexcloud.net/incrussia-prod/wp-content/uploads/2017/06/Narrow-680x440-6.jpg" alt="Kraken Office" className="relative z-10 rounded-lg neon-border-blue object-cover w-full h-[500px]" />
          </div>
        </div>

        <h2 className="font-orbitron text-4xl text-center mb-16">MEET THE <span className="text-[#9d00ff]">COMMANDERS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map(member => (
            <div key={member.id} className="group relative">
               <div className="overflow-hidden rounded-lg mb-6 border-2 border-white/10 group-hover:neon-border-purple transition-all">
                 <img src={member.image} alt={member.name} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
               </div>
               <h3 className="font-orbitron text-2xl text-[#00ffe5]">{member.name}</h3>
               <p className="text-gray-400 font-rajdhani text-lg uppercase tracking-widest">{member.role[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const { t } = useApp();
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="font-orbitron text-5xl font-black mb-16 text-center text-white"><span className="text-[#00ffe5]">GET</span> IN TOUCH</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-orbitron text-3xl mb-8 text-[#9d00ff]">Bog'lanish usullari</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6 glass p-6 neon-border-blue">
               <div className="p-4 bg-[#00ffe5]/10 rounded-lg text-[#00ffe5]"><MessageSquare size={32}/></div>
               <div>
                 <p className="text-gray-400 uppercase tracking-widest text-sm mb-1">Live Chat</p>
                 <p className="text-xl font-orbitron">t.me/kraken_tech_official</p>
               </div>
            </div>
            <div className="flex items-center space-x-6 glass p-6 neon-border-purple">
               <div className="p-4 bg-[#9d00ff]/10 rounded-lg text-[#9d00ff]"><Send size={32}/></div>
               <div>
                 <p className="text-gray-400 uppercase tracking-widest text-sm mb-1">Email System</p>
                 <p className="text-xl font-orbitron">core@kraken-tech.uz</p>
               </div>
            </div>
            <div className="flex items-center space-x-6 glass p-6 border-white/20">
               <div className="p-4 bg-white/10 rounded-lg text-white"><Smartphone size={32}/></div>
               <div>
                 <p className="text-gray-400 uppercase tracking-widest text-sm mb-1">Hotline</p>
                 <p className="text-xl font-orbitron">+998 90 999 88 77</p>
               </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 neon-border-blue">
          <h2 className="font-orbitron text-3xl mb-8 text-[#00ffe5]">Quick Response Form</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input placeholder="Name" className="bg-black border border-white/10 p-4 rounded outline-none focus:neon-border-blue" />
              <input placeholder="Company" className="bg-black border border-white/10 p-4 rounded outline-none focus:neon-border-blue" />
            </div>
            <input placeholder="Email Address" className="w-full bg-black border border-white/10 p-4 rounded outline-none focus:neon-border-blue" />
            <textarea placeholder="Tell us about your project..." className="w-full bg-black border border-white/10 p-4 rounded outline-none h-40 focus:neon-border-blue"></textarea>
            <button className="bg-[#00ffe5] text-black font-black font-orbitron py-4 px-12 text-xl hover:bg-white transition-all w-full">ESTABLISH CONNECTION</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- App Layout Wrapper ---

// Fix: Change children type to optional to resolve Property 'children' is missing error in some React/TS environments
const AppProvider = ({ children }: { children?: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('UZ');
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.style.setProperty('--cyber-black', theme === 'dark' ? '#000000' : '#f0f0f0');
    document.body.style.color = theme === 'dark' ? 'white' : 'black';
  }, [theme]);

  const t = (key: string) => translations[lang][key] || key;

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!isVisible) return null;
  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 bg-[#9d00ff] text-white rounded-full neon-border-purple animate-bounce"
    >
      <ArrowUp size={24} />
    </button>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/interview" element={<InterviewPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
