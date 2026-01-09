
import React, { useState, useRef, useEffect } from 'react';
import { X, Trash2, Settings, CloudUpload, Check, Download, Code, Type, Instagram, Facebook, Youtube } from 'lucide-react';
import { MediaItem, EditableContent } from '../types';
import { optimizeImage } from '../utils/imageOptimizer';

interface AdminPanelProps {
  onClose: () => void;
  onAdd: (item: MediaItem) => void;
  onDelete: (id: string) => void;
  onLogoChange: (base64: string) => void;
  onContentUpdate: (content: EditableContent) => void;
  items: MediaItem[];
  content: EditableContent;
  logo: string | null;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose, onAdd, onDelete, onLogoChange, onContentUpdate, items, content, logo }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'media' | 'export'>('content');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const [localContent, setLocalContent] = useState<EditableContent>(content);
  
  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const [mediaFormData, setMediaFormData] = useState({
    title: '',
    description: '',
    url: '',
    type: 'image' as 'image'
  });

  const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsOptimizing(true);
    try {
      const base64 = await optimizeImage(file);
      setMediaFormData(prev => ({ ...prev, url: base64 }));
    } catch (err) {
      console.error(err);
      alert("Erro ao processar arquivo.");
    } finally { setIsOptimizing(false); }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const base64 = await optimizeImage(file, 400, 0.9);
    onLogoChange(base64);
  };

  const handleMediaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaFormData.title || !mediaFormData.url) return alert("Preencha o título e insira a foto.");
    onAdd({ id: Date.now().toString(), ...mediaFormData });
    setMediaFormData({ title: '', description: '', url: '', type: 'image' });
  };

  const handleContentSave = (e: React.FormEvent) => {
    e.preventDefault();
    onContentUpdate(localContent);
    alert("Conteúdo atualizado com sucesso!");
  };

  const copyToClipboard = () => {
    const clone = document.documentElement.cloneNode(true) as HTMLElement;
    const adminUI = clone.querySelectorAll('.fixed.z-\\[300\\], button[onClick], .fixed.z-\\[100\\], script[type="importmap"]');
    adminUI.forEach(el => el.remove());
    navigator.clipboard.writeText(clone.outerHTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4">
      <div className="bg-[#0c3b5d] w-full max-w-6xl max-h-[90vh] rounded-[48px] shadow-2xl flex flex-col overflow-hidden border border-white/10">
        
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#051d2e]/80">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-teal rounded-2xl flex items-center justify-center text-navy shadow-lg">
               <Settings size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">Painel Admin CENC</h2>
              <p className="text-teal text-[10px] font-black uppercase tracking-[0.4em]">Gestão de Conteúdo e Galeria</p>
            </div>
          </div>
          <button onClick={onClose} className="w-12 h-12 flex items-center justify-center text-white/30 hover:text-white bg-white/5 border border-white/10 rounded-full transition-all cursor-pointer">
            <X size={24} />
          </button>
        </div>

        <div className="flex bg-[#051d2e]/50 px-8 py-3 gap-4 border-b border-white/5 overflow-x-auto no-scrollbar">
          <button onClick={() => setActiveTab('content')} className={`px-8 py-4 text-[11px] font-black uppercase tracking-widest rounded-2xl transition-all shrink-0 ${activeTab === 'content' ? 'bg-teal text-navy' : 'text-white/40 hover:bg-white/5'}`}>
            <div className="flex items-center gap-2"><Type size={14}/> Editar Textos</div>
          </button>
          <button onClick={() => setActiveTab('media')} className={`px-8 py-4 text-[11px] font-black uppercase tracking-widest rounded-2xl transition-all shrink-0 ${activeTab === 'media' ? 'bg-teal text-navy' : 'text-white/40 hover:bg-white/5'}`}>
            <div className="flex items-center gap-2"><CloudUpload size={14}/> Fotos e Flyers</div>
          </button>
          <button onClick={() => setActiveTab('export')} className={`px-8 py-4 text-[11px] font-black uppercase tracking-widest rounded-2xl transition-all shrink-0 ${activeTab === 'export' ? 'bg-white text-navy' : 'text-white/40 hover:bg-white/5'}`}>
            <div className="flex items-center gap-2"><Code size={14}/> Exportar Site</div>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 bg-[#051d2e]/20 mesh-bg">
          {activeTab === 'content' ? (
            <form onSubmit={handleContentSave} className="space-y-12 max-w-4xl mx-auto py-4">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h4 className="text-teal font-black text-[10px] uppercase tracking-[0.4em] mb-4">Seção Início (Hero)</h4>
                  <div className="space-y-4">
                    <input className="w-full bg-navy/50 border border-white/10 p-4 rounded-xl text-white text-sm" placeholder="Título Início" value={localContent.heroTitle} onChange={e => setLocalContent({...localContent, heroTitle: e.target.value})} />
                    <input className="w-full bg-navy/50 border border-white/10 p-4 rounded-xl text-white text-sm" placeholder="Destaque Início" value={localContent.heroHighlight} onChange={e => setLocalContent({...localContent, heroHighlight: e.target.value})} />
                    <textarea className="w-full bg-navy/50 border border-white/10 p-4 rounded-xl text-white text-sm min-h-[80px]" placeholder="Descrição Hero" value={localContent.heroDescription} onChange={e => setLocalContent({...localContent, heroDescription: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-teal font-black text-[10px] uppercase tracking-[0.4em] mb-4">Redes Sociais</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Instagram size={20} className="text-white/40" />
                      <input className="flex-grow bg-navy/50 border border-white/10 p-4 rounded-xl text-white text-sm" placeholder="URL Instagram" value={localContent.instagramUrl} onChange={e => setLocalContent({...localContent, instagramUrl: e.target.value})} />
                    </div>
                    <div className="flex items-center gap-3">
                      <Facebook size={20} className="text-white/40" />
                      <input className="flex-grow bg-navy/50 border border-white/10 p-4 rounded-xl text-white text-sm" placeholder="URL Facebook" value={localContent.facebookUrl} onChange={e => setLocalContent({...localContent, facebookUrl: e.target.value})} />
                    </div>
                    <div className="flex items-center gap-3">
                      <Youtube size={20} className="text-white/40" />
                      <input className="flex-grow bg-navy/50 border border-white/10 p-4 rounded-xl text-white text-sm" placeholder="URL YouTube" value={localContent.youtubeUrl} onChange={e => setLocalContent({...localContent, youtubeUrl: e.target.value})} />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-teal font-black text-[10px] uppercase tracking-[0.4em] mb-4">Contatos e Logo</h4>
                  <div className="space-y-4">
                    <input className="w-full bg-navy/50 border border-white/10 p-4 rounded-xl text-white text-sm" placeholder="WhatsApp Principal" value={localContent.contactPhone1} onChange={e => setLocalContent({...localContent, contactPhone1: e.target.value})} />
                    <input className="w-full bg-navy/50 border border-white/10 p-4 rounded-xl text-white text-sm" placeholder="E-mail Contato" value={localContent.contactEmail} onChange={e => setLocalContent({...localContent, contactEmail: e.target.value})} />
                    <div className="bg-navy/50 p-6 rounded-2xl border border-white/10 flex items-center gap-6">
                      <div className="w-16 h-16 bg-black rounded-lg overflow-hidden shrink-0 border border-white/10">
                         {logo ? <img src={logo} className="w-full h-full object-contain" /> : <div className="text-[8px] p-2">Sem Logo</div>}
                      </div>
                      <button type="button" onClick={() => logoInputRef.current?.click()} className="text-[10px] font-black uppercase tracking-widest bg-teal text-navy px-4 py-2 rounded-lg cursor-pointer">Trocar Logo</button>
                      <input type="file" ref={logoInputRef} className="hidden" accept="image/*" onChange={handleLogoUpload} />
                   </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-teal text-navy py-6 rounded-3xl font-black text-xl shadow-[0_20px_40px_rgba(0,210,255,0.3)] hover:scale-[1.02] transition-all cursor-pointer">SALVAR TEXTOS</button>
            </form>
          ) : activeTab === 'media' ? (
            <div className="space-y-12">
               <form onSubmit={handleMediaSubmit} className="bg-white/5 p-8 rounded-[40px] border border-white/10 space-y-6 max-w-2xl mx-auto">
                  <h4 className="text-white font-black text-xl italic tracking-tighter text-center">Adicionar Foto/Flyer na Galeria</h4>
                  
                  <input className="w-full bg-navy/50 border border-white/10 p-4 rounded-xl text-white text-sm" placeholder="Título da Obra / Serviço" value={mediaFormData.title} onChange={e => setMediaFormData({...mediaFormData, title: e.target.value})} />
                  
                  <div onClick={() => fileInputRef.current?.click()} className={`p-10 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white/5 transition-all ${mediaFormData.url ? 'border-teal bg-teal/5' : 'border-white/10'}`}>
                     <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleMediaUpload} />
                     {isOptimizing ? <div className="animate-spin w-8 h-8 border-2 border-teal border-t-transparent rounded-full" /> : mediaFormData.url ? <Check size={32} className="text-teal" /> : <CloudUpload size={40} className="text-white/20" />}
                     <p className="text-[10px] font-black uppercase text-white/30 tracking-widest">{mediaFormData.url ? 'Foto Carregada' : 'Clique para selecionar do PC'}</p>
                  </div>
                  
                  <button type="submit" className="w-full bg-teal text-navy py-4 rounded-2xl font-black uppercase tracking-widest cursor-pointer">ADICIONAR NA GALERIA</button>
               </form>

               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.filter(i => i.type === 'image').map(item => (
                    <div key={item.id} className="bg-navy/50 p-4 rounded-3xl border border-white/10 flex items-center gap-4">
                       <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center overflow-hidden shrink-0">
                          <img src={item.url} className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-grow min-w-0">
                          <p className="text-white font-black text-xs truncate">{item.title}</p>
                          <p className="text-[8px] text-teal uppercase font-black tracking-widest">Foto</p>
                       </div>
                       <button onClick={() => onDelete(item.id)} className="w-8 h-8 flex items-center justify-center bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all cursor-pointer"><Trash2 size={16} /></button>
                    </div>
                  ))}
               </div>
            </div>
          ) : (
            <div className="text-center space-y-12 max-w-2xl mx-auto py-20">
               <div className="w-24 h-24 bg-white text-navy rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                <Download size={48} />
              </div>
              <div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic">Exportar Site Final</h3>
                <p className="text-white/50 text-lg mt-6">Copie o código abaixo e cole no seu publicador.</p>
              </div>
              <button onClick={copyToClipboard} className={`w-full py-8 rounded-[32px] font-black text-2xl flex items-center justify-center gap-4 transition-all cursor-pointer ${copied ? 'bg-whatsapp text-white' : 'bg-white text-navy hover:bg-teal hover:scale-105 shadow-2xl'}`}>
                {copied ? <Check size={32} /> : <Code size={32} />}
                {copied ? 'SITE COPIADO!' : 'COPIAR CÓDIGO DO SITE'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
