
import React from 'react';
import { INITIAL_SERVICES, getIcon } from '../constants';
import { EditableContent } from '../types';

interface ServicesGridProps {
  content: EditableContent;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ content }) => {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-[#051d2e]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4 text-glow">Nossos Ecossistemas</h2>
          <p className="text-teal font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-[12px]">Soluções em Engenharia, Automação e Segurança</p>
          <div className="w-20 lg:w-24 h-1 bg-teal mx-auto rounded-full mt-6 lg:mt-8 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {INITIAL_SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-[#0c3b5d]/60 p-8 lg:p-10 rounded-3xl lg:rounded-[40px] border border-white/10 flex flex-col items-center text-center group hover:bg-teal/10 hover:border-teal/50 transition-all duration-500 shadow-xl"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#051d2e] text-teal rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-teal group-hover:text-white transition-all shadow-2xl border border-white/5">
                {getIcon(service.icon, 28)}
              </div>
              <h4 className="text-sm lg:text-base font-black text-white mb-2 uppercase tracking-tight group-hover:text-teal transition-colors">{service.title}</h4>
              <p className="text-[11px] lg:text-[13px] font-bold text-white/80 uppercase tracking-wider leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
          
          <div className="col-span-full mt-16 lg:mt-24 bg-[#0c3b5d]/40 p-8 lg:p-24 rounded-[40px] lg:rounded-[80px] border border-white/10 flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-teal/5 blur-3xl rounded-full -z-10"></div>
             
             <div className="space-y-6 lg:space-y-8 relative z-10 max-w-2xl mx-auto w-full">
                <div className="inline-block bg-teal/10 border border-teal/20 px-4 py-2 rounded-full text-[10px] lg:text-[12px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-teal mb-2">
                  Sistemas de Alta Performance
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[1.1] lg:leading-[0.9] text-glow">
                  {content.ctaTitle}
                </h3>
                <p className="text-white/80 font-semibold text-base lg:text-xl leading-relaxed mb-8 lg:mb-12">
                  {content.ctaDescription}
                </p>

                <div className="flex flex-col items-center gap-4 lg:gap-6 w-full">
                  <a 
                    href={`https://wa.me/55${content.contactPhone1.replace(/\D/g, '')}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group w-full max-w-sm"
                  >
                    <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-full"></div>
                    <div className="relative bg-[#051d2e]/80 backdrop-blur-md border border-white/20 p-2 rounded-2xl lg:rounded-[36px] flex items-center group-hover:border-[#25D366]/50 transition-all duration-500 overflow-hidden shadow-2xl">
                        <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-[28px] flex items-center justify-center text-white shadow-lg shrink-0">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-9 lg:h-9 fill-current">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.961-2.628-.086-.117-.718-.953-.718-1.819 0-.866.454-1.291.616-1.468.162-.177.353-.221.471-.221.117 0 .235.001.338.005.114.005.267-.043.418.324.155.375.529 1.288.573 1.377.044.088.073.191.015.309-.058.117-.088.191-.176.294-.088.103-.185.23-.265.309-.09.088-.183.184-.079.362.103.177.458.756.983 1.223.676.602 1.246.788 1.423.877.176.088.279.073.382-.044.103-.117.441-.514.558-.691.117-.176.235-.147.397-.088.162.059 1.029.485 1.206.573.177.088.294.132.338.206.044.073.044.426-.1.831z"></path>
                          </svg>
                        </div>
                        <div className="flex-grow flex items-center justify-center pr-4">
                          <span className="text-[#25D366] font-black text-xl lg:text-3xl tracking-tighter uppercase italic group-hover:text-white transition-colors">WhatsApp</span>
                        </div>
                    </div>
                  </a>
                  <p className="text-[10px] lg:text-[12px] font-black text-center text-teal uppercase tracking-[0.4em]">Disponibilidade para Consultoria</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
