
import React from 'react';
import { 
  Camera, Cpu, Zap, Lock, Settings, Phone, Bell, Home, 
  Flame, PhoneCall, ShieldCheck, Building2, Factory, 
  Warehouse, Power, Radio
} from 'lucide-react';
import { Service, MediaItem, EditableContent } from './types';

export const INITIAL_CONTENT: EditableContent = {
  heroTitle: "Engenharia de",
  heroHighlight: "Proteção.",
  heroDescription: "Sistemas inteligentes de segurança e automação que unem tecnologia de ponta com eficiência técnica rigorosa. Proteja seu patrimônio com a CENC.",
  heroButtonText: "WhatsApp",
  servicesSectionTitle: "Nossos Ecossistemas",
  servicesSectionSubtitle: "Soluções em Engenharia, Automação e Segurança",
  ctaTitle: "Engenharia de Alto Padrão.",
  ctaDescription: "Infraestrutura inteligente para quem não abre mão da excelência. Projetos personalizados com tecnologia de ponta.",
  ctaButtonText: "WhatsApp",
  portfolioTitle: "Galeria de Projetos",
  portfolioSubtitle: "Explore nossa excelência técnica através de fotos e flyers reais de nossos serviços executados.",
  footerAbout: "Referência em Fortaleza para projetos críticos de segurança e automação residencial e empresarial.",
  contactPhone1: "(85) 9 9991-7409",
  contactPhone2: "(85) 9 9183-4135",
  contactEmail: "cencservicos@gmail.com",
  instagramUrl: "https://instagram.com/cencservicos",
  facebookUrl: "https://facebook.com",
  youtubeUrl: "https://youtube.com",
  address: "Fortaleza, CE - Operação em toda Região Metropolitana",
  perimeterTitle: "Perímetros",
  perimeterHighlight: "Inteligentes.",
  perimeterDescription: "Engenharia aplicada na criação de barreiras invisíveis com reconhecimento analítico de intrusão.",
  perimeterFeature1: "Zero falso positivo com IA embarcada",
  perimeterFeature2: "Integração imediata com luzes e sirenes",
  perimeterFeature3: "Notificação via celular em tempo real"
};

export const INITIAL_SERVICES: Service[] = [
  { id: '1', title: 'Câmeras de Segurança', description: 'Instalação e manutenção completa.', icon: 'Camera' },
  { id: '2', title: 'Quadros de Automação', description: 'Instalação de quadros inteligentes.', icon: 'Cpu' },
  { id: '3', title: 'Para-raios', description: 'Proteção contra descargas elétricas.', icon: 'Zap' },
  { id: '4', title: 'Fechadura Eletrônica', description: 'Controle de acesso digital moderno.', icon: 'Lock' },
  { id: '5', title: 'Quadros de Distribuição', description: 'Montagem e organização de painéis.', icon: 'Settings' },
  { id: '6', title: 'Elétrica Residencial', description: 'Projetos elétricos completos.', icon: 'Power' },
  { id: '7', title: 'Tomadas e Interruptores', description: 'Instalação de pontos e disjuntores.', icon: 'Zap' },
  { id: '8', title: 'Central de Alarmes', description: 'Sistemas de intrusão monitorados.', icon: 'Bell' },
];

export const CLIENT_TYPES = [
  { id: 'c1', title: 'Empresas de todos os tamanhos', icon: 'Building2' },
  { id: 'c2', title: 'Condomínios e prédios comerciais', icon: 'Warehouse' },
  { id: 'c3', title: 'Fábricas e indústrias', icon: 'Factory' },
  { id: 'c4', title: 'Casas e residenciais', icon: 'Home' },
];

export const INITIAL_MEDIA: MediaItem[] = [
  {
    id: 'm1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    title: 'Monitoramento IP',
    description: 'Instalação de câmeras de alta resolução.'
  }
];

export const getIcon = (name: string, size = 24) => {
  const icons: Record<string, React.ReactNode> = {
    Camera: <Camera size={size} />,
    Cpu: <Cpu size={size} />,
    Zap: <Zap size={size} />,
    Lock: <Lock size={size} />,
    Settings: <Settings size={size} />,
    Power: <Power size={size} />,
    Bell: <Bell size={size} />,
    Flame: <Flame size={size} />,
    PhoneCall: <PhoneCall size={size} />,
    ShieldCheck: <ShieldCheck size={size} />,
    Building2: <Building2 size={size} />,
    Factory: <Factory size={size} />,
    Warehouse: <Warehouse size={size} />,
    Radio: <Radio size={size} />,
    Home: <Home size={size} />,
  };
  return icons[name] || <ShieldCheck size={size} />;
};
