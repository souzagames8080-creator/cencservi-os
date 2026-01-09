
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/Services';
import MediaGallery from './components/MediaGallery';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import { MediaItem, EditableContent } from './types';
import { INITIAL_MEDIA, INITIAL_CONTENT, CLIENT_TYPES, getIcon } from './constants';
import { CheckCircle2, Settings } from 'lucide-react';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [logo, setLogo] = useState<string | null>(null);
  const [content, setContent] = useState<EditableContent>(INITIAL_CONTENT);
  
  useEffect(() => {
    const savedMedia = localStorage.getItem('cenc_media');
    const savedLogo = localStorage.getItem('cenc_logo');
    const savedContent = localStorage.getItem('cenc_content');
    
    if (savedMedia) {
      try {
        setMediaItems(JSON.parse(savedMedia));
      } catch (e) {
        setMediaItems(INITIAL_MEDIA);
      }
    } else {
      setMediaItems(INITIAL_MEDIA);
    }

    if (savedLogo) setLogo(savedLogo);

    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent({
          ...INITIAL_CONTENT,
          ...parsedContent
        });
      } catch (e) {
        setContent(INITIAL_CONTENT);
      }
    }
  }, []);

  const saveMedia = (newMedia: MediaItem[]) => {
    setMediaItems(newMedia);
    localStorage.setItem('cenc_media', JSON.stringify(newMedia));
  };

  const saveContent = (newContent: EditableContent) => {
    setContent(newContent);
    localStorage.setItem('cenc_content', JSON.stringify(newContent));
  };

  const handleLogoChange = (newLogo: string) => {
    setLogo(newLogo);
    localStorage.setItem('cenc_logo', newLogo);
  };

  const addMedia = (item: MediaItem) => {
    const updated = [item, ...mediaItems];
    saveMedia(updated);
  };

  const deleteMedia = (id: string) => {
    const updated = mediaItems.filter(i => i.id !== id);
    saveMedia(updated);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020b13] selection:bg-teal selection:text-navy">
      <Navbar onAdminToggle={() => setIsAdminOpen(true)} logo={logo} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero content={content} />
        </section>
        
        <section id="servicos">
          <ServicesGrid content={content} />
        </section>

        <section id="quem-atendemos" className="py-24 bg-[#020b13] border-y border-white/5">
           <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 text-glow">Quem Atendemos</h2>
                 <p className="text-teal font-black uppercase tracking-[0.3em] text-[10px] mb-6">Expertise em Múltiplos Segmentos</p>
                 <div className="w-16 h-1.5 bg-teal mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                 {CLIENT_TYPES.map(client => (
                    <div key={client.id} className="flex flex-col items-center text-center group">
                       <div className="w-16 h-16 text-teal/40 mb-6 group-hover:text-teal transition-all group-hover:scale-110 duration-500">
                          {getIcon(client.icon, 56)}
                       </div>
                       <p className="text-[12px] font-black uppercase tracking-[0.2em] text-white/90 group-hover:text-teal transition-colors leading-tight">{client.title}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        <section className="bg-[#051421] py-32 overflow-hidden relative mesh-bg border-b border-white/5">
           <div className="absolute inset-0 bg-teal/[0.02]"></div>
           <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="text-white space-y-10">
                 <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-4 py-1.5 rounded-full text-teal text-[10px] font-black uppercase tracking-widest">
                    Segurança de Próxima Geração
                 </div>
                 <h3 className="text-6xl font-black leading-[0.9] tracking-tighter text-glow">
                   {content.perimeterTitle} <br />
                   <span className="text-teal">{content.perimeterHighlight}</span>
                 </h3>
                 <p className="font-bold text-xl text-white/90 leading-relaxed max-w-lg">{content.perimeterDescription}</p>
                 <ul className="space-y-6">
                    {[content.perimeterFeature1, content.perimeterFeature2, content.perimeterFeature3].filter(Boolean).map(item => (
                       <li key={item} className="flex items-center gap-4 font-black text-sm text-white group">
                          <CheckCircle2 size={24} className="text-teal group-hover:scale-125 transition-transform" /> {item}
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="relative group">
                 <div className="aspect-video bg-black/40 rounded-[40px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] relative border border-white/20 group-hover:border-teal/50 transition-all duration-1000">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                      alt="Cerca Virtual e Segurança Perimetral" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b13]/80 to-transparent"></div>
                 </div>
              </div>
           </div>
        </section>

        <section id="portfolio" className="bg-[#020b13] py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter text-glow">{content.portfolioTitle}</h2>
              <p className="text-teal font-black uppercase tracking-[0.3em] text-[12px] max-w-xl mx-auto">{content.portfolioSubtitle}</p>
            </div>
            <MediaGallery media={mediaItems} />
          </div>
        </section>
      </main>

      <section id="contato">
        <Footer content={content} logo={logo} />
      </section>

      <button 
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-10 left-10 z-[100] bg-teal text-navy w-16 h-16 rounded-full shadow-[0_20px_40px_rgba(0,210,255,0.4)] hover:scale-110 transition-all flex items-center justify-center border-4 border-white/20 group"
        title="Configurações do Site"
      >
        <Settings size={28} className="group-hover:rotate-90 transition-transform duration-500" />
      </button>

      {isAdminOpen && (
        <AdminPanel 
          onClose={() => setIsAdminOpen(false)} 
          onAdd={addMedia}
          onDelete={deleteMedia}
          onLogoChange={handleLogoChange}
          onContentUpdate={saveContent}
          items={mediaItems}
          content={content}
          logo={logo}
        />
      )}

      <a 
        href={`https://wa.me/55${content.contactPhone1.replace(/\D/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] bg-whatsapp text-white w-20 h-20 rounded-full shadow-[0_25px_50px_-10px_rgba(37,211,102,0.6)] hover:scale-110 transition-all flex items-center justify-center animate-pulse-whatsapp border-4 border-white/30"
      >
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.961-2.628-.086-.117-.718-.953-.718-1.819 0-.866.454-1.291.616-1.468.162-.177.353-.221.471-.221.117 0 .235.001.338.005.114.005.267-.043.418.324.155.375.529 1.288.573 1.377.044.088.073.191.015.309-.058.117-.088.191-.176.294-.088.103-.185.23-.265.309-.09.088-.183.184-.079.362.103.177.458.756.983 1.223.676.602 1.246.788 1.423.877.176.088.279.073.382-.044.103-.117.441-.514.558-.691.117-.176.235-.147.397-.088.162.059 1.029.485 1.206.573.177.088.294.132.338.206.044.073.044.426-.1.831z"></path></svg>
      </a>
    </div>
  );
};

export default App;
