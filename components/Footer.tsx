
import React from 'react';
import { Phone, Mail, Instagram, Facebook, Youtube, MapPin } from 'lucide-react';
import { EditableContent } from '../types';

interface FooterProps {
  content: EditableContent;
  logo?: string | null;
}

const Footer: React.FC<FooterProps> = ({ content, logo }) => {
  return (
    <footer id="contato" className="bg-[#020b13] pt-32 pb-16 overflow-hidden border-t border-white/5 mesh-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/5 border border-white/20 rounded-2xl flex items-center justify-center overflow-hidden text-teal font-black text-3xl shadow-2xl">
                {logo ? <img src={logo} className="w-full h-full object-contain p-2" alt="Logo" /> : 'C'}
              </div>
              <div className="flex flex-col">
                <span className="font-black text-3xl tracking-tighter text-white uppercase leading-none">CENC</span>
                <span className="text-[10px] font-black text-teal uppercase tracking-[0.3em] mt-1">SERVIÇOS</span>
              </div>
            </div>
            <p className="text-white/80 font-bold text-xs leading-relaxed uppercase tracking-widest max-w-xs">
              {content.footerAbout}
            </p>
            <div className="flex flex-wrap gap-4">
               {content.instagramUrl && (
                 <a href={content.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center text-pink-500 hover:bg-pink-600 hover:text-white transition-all shadow-xl hover:-translate-y-2">
                    <Instagram size={24} />
                 </a>
               )}
               {content.facebookUrl && (
                 <a href={content.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-xl hover:-translate-y-2">
                    <Facebook size={24} />
                 </a>
               )}
               {content.youtubeUrl && (
                 <a href={content.youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white transition-all shadow-xl hover:-translate-y-2">
                    <Youtube size={24} />
                 </a>
               )}
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-[12px] font-black text-teal uppercase tracking-[0.4em] border-l-2 border-teal pl-4">Canais de Contato</h4>
            <div className="space-y-8">
              <div className="space-y-4">
                <a href={`tel:${content.contactPhone1.replace(/\D/g, '')}`} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-[#051421] rounded-2xl flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-navy transition-all shadow-lg border border-white/5">
                    <Phone size={22} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-teal/80 uppercase tracking-widest mb-1 italic">Suporte Principal</span>
                    <p className="text-white font-black text-xl tracking-tighter">{content.contactPhone1}</p>
                  </div>
                </a>
                <a href={`tel:${content.contactPhone2.replace(/\D/g, '')}`} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-[#051421] rounded-2xl flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-navy transition-all shadow-lg border border-white/5">
                    <Phone size={22} />
                  </div>
                   <div className="flex flex-col">
                    <span className="text-[10px] font-black text-teal/80 uppercase tracking-widest mb-1 italic">Suporte Secundário</span>
                    <p className="text-white font-black text-xl tracking-tighter">{content.contactPhone2}</p>
                  </div>
                </a>
              </div>
              <a href={`mailto:${content.contactEmail}`} className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-[#051421] rounded-2xl flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-navy transition-all shadow-lg border border-white/5">
                  <Mail size={22} />
                </div>
                <p className="text-white font-black text-base tracking-tight truncate group-hover:text-teal transition-colors uppercase italic">{content.contactEmail}</p>
              </a>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-[12px] font-black text-teal uppercase tracking-[0.4em] border-l-2 border-teal pl-4">Localização</h4>
            <div className="flex items-start gap-5">
               <div className="w-12 h-12 bg-[#051421] rounded-2xl flex items-center justify-center text-teal shrink-0 shadow-lg border border-white/5">
                 <MapPin size={22} />
               </div>
               <div>
                 <p className="text-white font-black text-2xl tracking-tighter">{content.address.split('-')[0].trim()}</p>
                 <p className="text-[11px] font-black text-teal uppercase tracking-[0.2em] leading-relaxed mt-2 italic">{content.address.split('-')[1]?.trim()}</p>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">© {new Date().getFullYear()} CENC SERVIÇOS • ENGENHARIA E AUTOMAÇÃO • FORTALEZA - CE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
