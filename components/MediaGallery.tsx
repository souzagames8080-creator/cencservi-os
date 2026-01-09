
import React, { useState } from 'react';
import { MediaItem } from '../types';
import { X, Eye } from 'lucide-react';

interface MediaGalleryProps {
  media: MediaItem[];
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ media }) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Filtra apenas imagens por segurança, embora o admin agora só permita imagens
  const imagesOnly = media.filter(item => item.type === 'image');

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {imagesOnly.map((item) => (
          <div 
            key={item.id} 
            className="group relative rounded-[48px] overflow-hidden aspect-[4/5] cursor-pointer bg-black/40 border border-white/5 shadow-2xl"
            onClick={() => setSelectedItem(item)}
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#051d2e] via-[#051d2e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-10 flex flex-col justify-end">
               <h5 className="font-black text-2xl text-white leading-tight mb-3">{item.title}</h5>
               <p className="text-white/50 text-xs font-medium leading-relaxed mb-6 line-clamp-2">{item.description}</p>
               <div className="flex items-center gap-2 text-teal text-[10px] font-black uppercase tracking-widest">
                  <Eye size={14} /> Ampliar Foto
               </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-[200] bg-navy/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12">
          <button 
            onClick={() => setSelectedItem(null)}
            className="absolute top-10 right-10 text-white/30 hover:text-white transition-all p-4 bg-white/5 rounded-full border border-white/10"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-6xl w-full flex flex-col items-center gap-12 animate-in zoom-in duration-500">
            <div className="w-full max-h-[70vh] rounded-[56px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] border-2 border-white/10 relative">
              <img src={selectedItem.url} alt={selectedItem.title} className="w-full h-full object-contain" />
            </div>
            <div className="text-center space-y-6 max-w-3xl">
               <div className="inline-block bg-teal/10 px-6 py-2 rounded-full border border-teal/20 text-teal text-[10px] font-black uppercase tracking-widest mb-2">Detalhes do Projeto</div>
               <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-glow">{selectedItem.title}</h3>
               <p className="text-white/50 text-lg font-medium leading-relaxed">{selectedItem.description}</p>
               <div className="flex flex-wrap justify-center gap-4 pt-6">
                 <a href={`https://wa.me/5585999917409`} target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-green-500/20">
                    Solicitar Orçamento
                 </a>
                 <button onClick={() => setSelectedItem(null)} className="px-10 py-5 rounded-2xl font-black text-lg text-white/50 hover:text-white bg-white/5 border border-white/10 transition-all">
                    Voltar para Galeria
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
