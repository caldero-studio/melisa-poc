import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface FooterContact {
  phone: string;
  instagram: string;
  email: string;
  location: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    workshops: string;
    resources: string;
    contact: string;
    cta: string;
    langToggle: string;
  };
  hero: {
    titlePart1: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    viewMore: string;
    items: ServiceItem[];
  };
  workshops: {
    title: string;
    subtitle: string;
    comingSoon: string;
  };
  resources: {
    title: string;
    subtitle: string;
    comingSoon: string;
  };
  quote: string;
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    whatsapp: string;
    instagram: string;
    successMessage: string;
  };
  footer: {
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    contact: FooterContact;
    rights: string;
    navLinks: string[];
    serviceLinks: string[];
  };
}

const es: Translations = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    services: 'Servicios',
    workshops: 'Talleres',
    resources: 'Recursos',
    contact: 'Contacto',
    cta: 'Agenda tu sesión',
    langToggle: 'EN',
  },
  hero: {
    titlePart1: 'Un camino de autoconocimiento para',
    titleAccent: 'volver a vos',
    subtitle:
      'Integro astrología y terapias holísticas para acompañarte a comprender tu historia, sanar y descubrir quién sos más allá de lo aprendido.',
    cta: 'Conocé mis servicios',
  },
  about: {
    title: 'Sobre mí',
    p1: 'Soy astróloga y terapeuta holística. Acompaño procesos de transformación desde una mirada integradora que une el cielo, las emociones, el cuerpo y el alma.',
    p2: 'Creo en el poder de comprender nuestra historia para reconectar con nuestra esencia y vivir con más autenticidad.',
    cta: 'Conocé mi historia',
  },
  services: {
    title: 'Mis servicios',
    subtitle: 'Herramientas para comprender tu mapa, tu historia y tu alma.',
    viewMore: 'Ver más',
    items: [
      {
        title: 'Constelaciones Familiares',
        description:
          'Sanar vínculos, comprender dinámicas familiares y liberar cargas que no te pertenecen para vivir con más libertad y plenitud.',
      },
      {
        title: 'Biodescodificación',
        description:
          'Identificar el origen emocional de los síntomas para transformar desde la conciencia y activar tu capacidad innata de sanación.',
      },
      {
        title: 'Astrología Transpersonal',
        description:
          'Tu carta natal como mapa del alma. Comprender tus talentos, desafíos y propósito para tomar decisiones más conscientes.',
      },
      {
        title: 'Flores de Bach',
        description:
          'Acompañamiento emocional a través de esencias florales para armonizar tus emociones y encontrar equilibrio.',
      },
    ],
  },
  workshops: {
    title: 'Talleres',
    subtitle: 'Espacios grupales de aprendizaje y sanación.',
    comingSoon: 'Próximamente...',
  },
  resources: {
    title: 'Recursos',
    subtitle: 'Materiales y herramientas para tu camino interior.',
    comingSoon: 'Próximamente...',
  },
  quote: 'Todo lo que buscás afuera,\nya vive en tu interior.',
  contact: {
    title: 'Contacto',
    subtitle:
      'Estoy aquí para acompañarte. Escribime y agendamos tu primera consulta.',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu correo electrónico',
    messagePlaceholder: '¿En qué puedo acompañarte?',
    send: 'Enviar mensaje',
    whatsapp: 'Escribime por WhatsApp',
    instagram: 'Seguime en Instagram',
    successMessage: '¡Mensaje enviado! Te responderé a la brevedad.',
  },
  footer: {
    navTitle: 'Navegación',
    servicesTitle: 'Servicios',
    contactTitle: 'Contacto',
    contact: {
      phone: '+54 11 1234 5678',
      instagram: '@tumapainterior',
      email: 'hola@tumapainterior.com',
      location: 'Argentina – Online',
    },
    rights: '© 2024 Tu Mapa Interior | Todos los derechos reservados',
    navLinks: [
      'Inicio',
      'Sobre mí',
      'Servicios',
      'Talleres',
      'Recursos',
      'Contacto',
    ],
    serviceLinks: [
      'Constelaciones Familiares',
      'Biodescodificación',
      'Astrología Transpersonal',
      'Flores de Bach',
      'Sesiones Online',
      'Talleres y Círculos',
    ],
  },
};

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    workshops: 'Workshops',
    resources: 'Resources',
    contact: 'Contact',
    cta: 'Book a session',
    langToggle: 'ES',
  },
  hero: {
    titlePart1: 'A path of self-discovery to',
    titleAccent: 'return to yourself',
    subtitle:
      'I integrate astrology and holistic therapies to help you understand your story, heal, and discover who you truly are beyond what you have been taught.',
    cta: 'Explore my services',
  },
  about: {
    title: 'About me',
    p1: "I'm an astrologer and holistic therapist. I accompany transformation processes from an integrative perspective that unites the sky, emotions, body and soul.",
    p2: 'I believe in the power of understanding our story to reconnect with our essence and live more authentically.',
    cta: 'Learn my story',
  },
  services: {
    title: 'My services',
    subtitle: 'Tools to understand your map, your story and your soul.',
    viewMore: 'Learn more',
    items: [
      {
        title: 'Family Constellations',
        description:
          'Healing bonds, understanding family dynamics and releasing burdens that are not yours to carry, to live with more freedom and fullness.',
      },
      {
        title: 'Biodecoding',
        description:
          'Identifying the emotional origin of symptoms to transform from awareness and activate your innate healing capacity.',
      },
      {
        title: 'Transpersonal Astrology',
        description:
          'Your birth chart as a map of the soul. Understanding your talents, challenges and purpose to make more conscious decisions.',
      },
      {
        title: 'Bach Flower Remedies',
        description:
          'Emotional support through floral essences to harmonise your emotions and find balance.',
      },
    ],
  },
  workshops: {
    title: 'Workshops',
    subtitle: 'Group spaces for learning and healing.',
    comingSoon: 'Coming soon...',
  },
  resources: {
    title: 'Resources',
    subtitle: 'Materials and tools for your inner journey.',
    comingSoon: 'Coming soon...',
  },
  quote: 'Everything you seek outside\nalready lives within you.',
  contact: {
    title: 'Contact',
    subtitle:
      "I'm here to support you. Reach out and we'll schedule your first session.",
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email address',
    messagePlaceholder: 'How can I support you?',
    send: 'Send message',
    whatsapp: 'Message me on WhatsApp',
    instagram: 'Follow me on Instagram',
    successMessage: 'Message sent! I will get back to you shortly.',
  },
  footer: {
    navTitle: 'Navigation',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    contact: {
      phone: '+54 11 1234 5678',
      instagram: '@tumapainterior',
      email: 'hola@tumapainterior.com',
      location: 'Argentina – Online',
    },
    rights: '© 2024 Tu Mapa Interior | All rights reserved',
    navLinks: [
      'Home',
      'About',
      'Services',
      'Workshops',
      'Resources',
      'Contact',
    ],
    serviceLinks: [
      'Family Constellations',
      'Biodecoding',
      'Transpersonal Astrology',
      'Bach Flower Remedies',
      'Online Sessions',
      'Workshops & Circles',
    ],
  },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly lang = signal<Lang>('es');

  readonly t = signal<Translations>(es);

  toggle(): void {
    const next = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(next);
    this.t.set(next === 'es' ? es : en);
  }
}
