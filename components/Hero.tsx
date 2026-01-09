
import React, { useEffect, useState } from 'react';
import { Star, Activity, Instagram, Facebook, Youtube } from 'lucide-react';
import { EditableContent } from '../types';

interface HeroProps {
  content: EditableContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-16 lg:pt-56 lg:pb-32 overflow-hidden hero-gradient mesh-bg flex items-center">
      <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-teal/5 rounded-full blur-[100px] lg:blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`space-y-8 lg:space-y-12 text-center lg:text-left transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/20 text-teal px-4 py-2 rounded-full font-black text-[9px] lg:text-[11px] uppercase tracking-[0.2em] shadow-2xl backdrop-blur-md mx-auto lg:mx-0">
             <Activity size={14} className="animate-pulse" />
             Engenharia e Automação
          </div>
          
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-white leading-[1] lg:leading-[0.9] tracking-tighter text-glow">
              {content.heroTitle} <br />
              <span className="text-teal">{content.heroHighlight}</span>
            </h1>
            <p className="text-base lg:text-xl text-white/90 max-w-lg leading-relaxed font-semibold mx-auto lg:mx-0">
              {content.heroDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center lg:justify-start items-center">
            <a 
              href={`https://wa.me/55${content.contactPhone1.replace(/\D/g, '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-gradient-to-b from-[#25D366] to-[#128C7E] text-white px-8 py-5 lg:px-10 lg:py-6 rounded-2xl lg:rounded-[32px] font-black text-lg lg:text-xl flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all active:scale-95 border-t border-white/20"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-8 lg:h-8 fill-current"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.961-2.628-.086-.117-.718-.953-.718-1.819 0-.866.454-1.291.616-1.468.162-.177.353-.221.471-.221.117 0 .235.001.338.005.114.005.267-.043.418.324.155.375.529 1.288.573 1.377.044.088.073.191.015.309-.058.117-.088.191-.176.294-.088.103-.185.23-.265.309-.09.088-.183.184-.079.362.103.177.458.756.983 1.223.676.602 1.246.788 1.423.877.176.088.279.073.382-.044.103-.117.441-.514.558-.691.117-.176.235-.147.397-.088.162.059 1.029.485 1.206.573.177.088.294.132.338.206.044.073.044.426-.1.831z"></path></svg>
              WhatsApp
            </a>
            
            <div className="flex items-center gap-4 lg:gap-6">
               {content.instagramUrl && (
                 <a href={content.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 border border-white/20 rounded-2xl flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-xl hover:-translate-y-2 group">
                    <Instagram size={24} className="lg:w-8 lg:h-8" />
                 </a>
               )}
               {content.facebookUrl && (
                 <a href={content.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 border border-white/20 rounded-2xl flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-xl hover:-translate-y-2 group">
                    <Facebook size={24} className="lg:w-8 lg:h-8" />
                 </a>
               )}
               {content.youtubeUrl && (
                 <a href={content.youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 border border-white/20 rounded-2xl flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-xl hover:-translate-y-2 group">
                    <Youtube size={24} className="lg:w-8 lg:h-8" />
                 </a>
               )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 pt-4 justify-center lg:justify-start">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+30}`} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#020b13] shadow-xl" alt="Cliente" />
                ))}
             </div>
             <div className="hidden sm:block h-8 w-px bg-white/20"></div>
             <div className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start text-yellow-400 mb-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-teal">+500 Clientes em Fortaleza</p>
             </div>
          </div>
        </div>

        <div className={`relative hidden lg:flex justify-end transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,210,255,0.3)] border-[1px] border-white/20 group">
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000" 
              alt="Especialista CENC" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
