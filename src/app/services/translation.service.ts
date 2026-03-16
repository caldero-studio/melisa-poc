import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

export interface Translations {
  nav: {
    about: string;
    services: string;
    contact: string;
    langToggle: string;
  };
  hero: {
    greeting: string;
    name: string;
    slogan: string;
    cta: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
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
    rights: string;
  };
}

const es: Translations = {
  nav: {
    about: 'Sobre mí',
    services: 'Servicios',
    contact: 'Contacto',
    langToggle: 'EN',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Melisa Caceres',
    slogan: 'Sana tu cuerpo, despierta tu alma',
    cta: 'Conoce mis servicios',
  },
  about: {
    title: 'Sobre mí',
    p1: 'Soy Melisa Caceres, terapeuta holística comprometida con acompañar a las personas en su camino de sanación y autoconocimiento. Combino distintas disciplinas para ofrecer un abordaje integral del ser.',
    p2: 'Mi práctica une el mundo simbólico de la astrología, la sabiduría floral del Doctor Bach, la comprensión profunda de los patrones familiares y emocionales, y la guía del campo cuántico para que puedas vivir en mayor plenitud y coherencia.',
  },
  services: {
    title: 'Servicios',
    subtitle:
      'Cada encuentro es un espacio seguro y confidencial diseñado a tu medida.',
    items: [
      {
        title: 'Terapia Holística',
        description:
          'Un acompañamiento integral que trabaja cuerpo, mente y espíritu para restaurar el equilibrio y potenciar tu bienestar.',
      },
      {
        title: 'Lectura de Carta Natal',
        description:
          'Exploramos el mapa astrológico de tu nacimiento para comprender tus dones, desafíos y propósito de vida.',
      },
      {
        title: 'Biodecodificación',
        description:
          'Decodificamos el mensaje simbólico detrás de los síntomas físicos y emocionales para liberar conflictos arraigados.',
      },
      {
        title: 'Constelaciones Familiares',
        description:
          'Visibilizamos y sanamos dinámicas inconscientes del sistema familiar que influyen en tu presente.',
      },
      {
        title: 'Flores de Bach',
        description:
          'Preparados florales personalizados que actúan sobre los estados emocionales para recuperar la armonía interior.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle:
      'Estoy aquí para acompañarte. Escríbeme y agendamos tu primera consulta.',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu correo electrónico',
    messagePlaceholder: '¿En qué puedo acompañarte?',
    send: 'Enviar mensaje',
    whatsapp: 'Escríbeme por WhatsApp',
    instagram: 'Sígueme en Instagram',
    successMessage: '¡Mensaje enviado! Te responderé a la brevedad.',
  },
  footer: {
    rights: '© 2026 Melisa Caceres · Todos los derechos reservados',
  },
};

const en: Translations = {
  nav: {
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    langToggle: 'ES',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Melisa Caceres',
    slogan: 'Heal your body, awaken your soul',
    cta: 'Explore my services',
  },
  about: {
    title: 'About me',
    p1: "I'm Melisa Caceres, a holistic therapist committed to walking alongside people on their path of healing and self-discovery. I combine different disciplines to offer an integral approach to the whole person.",
    p2: 'My practice weaves together the symbolic world of astrology, the floral wisdom of Dr. Bach, a deep understanding of family and emotional patterns, and quantum-field guidance — so you can live with greater wholeness and coherence.',
  },
  services: {
    title: 'Services',
    subtitle:
      'Every session is a safe, confidential space designed around you.',
    items: [
      {
        title: 'Holistic Therapy',
        description:
          'A comprehensive approach working with body, mind and spirit to restore balance and enhance your overall wellbeing.',
      },
      {
        title: 'Natal Chart Reading',
        description:
          'We explore the astrological map of your birth to understand your gifts, challenges and life purpose.',
      },
      {
        title: 'Biodecoding',
        description:
          'We decode the symbolic message behind physical and emotional symptoms to release deep-rooted conflicts.',
      },
      {
        title: 'Family Constellations',
        description:
          'We make visible and heal unconscious dynamics in the family system that influence your present life.',
      },
      {
        title: 'Bach Flower Remedies',
        description:
          'Personalised floral preparations that act on emotional states to restore inner harmony.',
      },
    ],
  },
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
    rights: '© 2026 Melisa Caceres · All rights reserved',
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
