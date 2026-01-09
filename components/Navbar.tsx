
import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Menu, X, Shield } from 'lucide-react';

interface NavbarProps {
  onAdminToggle: () => void;
  logo: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminToggle, logo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-[1000] transition-all duration-500 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5 lg:py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 lg:gap-4 group cursor-pointer" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}
          >
            <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-xl group-hover:border-teal/50 transition-all">
               {logo ? <img src={logo} className="w-full h-full object-contain p-2" alt="Logo CENC" /> : <Shield size={24} className="text-teal" />}
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg lg:text-2xl tracking-tighter leading-none text-white uppercase">CENC <span className="text-teal">SERVIÇOS</span></span>
              <span className="text-[7px] lg:text-[10px] tracking-[0.2em] lg:tracking-[0.3em] uppercase font-bold text-white/50">Eficiência em Automação</span>
            </div>
          </div>

          {/* Desktop Menu - Agora usando BUTTON para evitar navegação */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                type="button"
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-teal transition-all outline-none"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button 
              type="button"
              onClick={(e) => { e.preventDefault(); onAdminToggle(); }} 
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white/40 hover:text-teal hover:border-teal/50 transition-all group"
            >
              <LayoutDashboard size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="text-[9px] font-black uppercase tracking-widest">Painel</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button type="button" className="lg:hidden text-white p-2 relative z-[1001]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#051d2e] z-[999] p-8 flex flex-col pt-24 animate-in fade-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                type="button"
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-left text-3xl font-black uppercase tracking-tighter text-white border-b border-white/5 pb-4 hover:text-teal transition-colors outline-none"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-auto pb-8 space-y-6">
            <button 
              type="button"
              onClick={(e) => { e.preventDefault(); onAdminToggle(); setIsMenuOpen(false); }} 
              className="w-full flex items-center justify-center gap-3 bg-teal text-navy py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl"
            >
              <LayoutDashboard size={18} />
              Acessar Painel Admin
            </button>
            <div className="text-center text-white/30 text-[8px] font-black uppercase tracking-[0.3em]">
              Engenharia e Automação • Fortaleza CE
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
