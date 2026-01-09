
export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EditableContent {
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroButtonText: string;
  servicesSectionTitle: string;
  servicesSectionSubtitle: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  portfolioTitle: string;
  portfolioSubtitle: string;
  footerAbout: string;
  contactPhone1: string;
  contactPhone2: string;
  contactEmail: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  address: string;
  // Campos para a seção de destaque
  perimeterTitle: string;
  perimeterHighlight: string;
  perimeterDescription: string;
  perimeterFeature1: string;
  perimeterFeature2: string;
  perimeterFeature3: string;
}

export interface AppState {
  logo: string | null;
  mediaItems: MediaItem[];
  content: EditableContent;
}
