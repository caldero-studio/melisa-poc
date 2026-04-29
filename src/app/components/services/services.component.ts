import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

// SVG icons: linear stroke style, rosa/dorado
const SERVICE_ICONS = [
  // Constelaciones Familiares — people / family
  `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.3">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-5.477-3.716M9 20H4v-2a4 4 0 015.477-3.716M12 11a4 4 0 100-8 4 4 0 000 8zm6 9v-2a4 4 0 00-3-3.87M6 20v-2a4 4 0 013-3.87"/>
  </svg>`,
  // Biodescodificación — DNA / atom
  `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.3">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c0 0-5 4-5 9s5 9 5 9m0-18c0 0 5 4 5 9s-5 9-5 9M7 7.5c1.5 1 3.5 1.5 5 1.5s3.5-.5 5-1.5M7 16.5c1.5-1 3.5-1.5 5-1.5s3.5.5 5 1.5"/>
  </svg>`,
  // Astrología — moon / stars
  `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.3">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 5l.5-1.5L19 3l-1.5.5L17 2l-.5 1.5L15 4l1.5.5L17 5z"/>
  </svg>`,
  // Flores de Bach — drop / flower
  `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.3">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C12 2 6 8 6 13a6 6 0 0012 0c0-5-6-11-6-11z"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 13v4"/>
  </svg>`,
];

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="section services">
      <div class="container">
        <h2 class="section-title">{{ t().services.title }}</h2>
        <hr class="divider" />
        <p class="section-subtitle">{{ t().services.subtitle }}</p>
        <div class="services-grid">
          @for (item of t().services.items; track item.title; let i = $index) {
            <div class="service-card">
              <div class="service-icon" [innerHTML]="icons[i]"></div>
              <h3>{{ item.title }}</h3>
              <hr class="card-divider" />
              <p>{{ item.description }}</p>
              <a href="#contact" class="btn btn--outline service-btn">{{
                t().services.viewMore
              }}</a>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .services {
        background-color: var(--color-white);
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        margin-top: 3rem;
      }

      .service-card {
        padding: 2rem 1.6rem 1.8rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-card);
        background: var(--color-white);
        box-shadow: 0 2px 12px rgba(232, 183, 200, 0.1);
        transition:
          transform 0.25s,
          box-shadow 0.25s;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;
        text-align: center;

        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(223, 163, 178, 0.2);
        }

        h3 {
          font-size: 1.1rem;
          color: var(--color-text-dark);
          font-weight: 500;
        }

        p {
          font-size: 0.9rem;
          line-height: 1.65;
          flex: 1;
        }
      }

      .service-icon {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 1.5px solid var(--color-border);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-accent);
        margin-bottom: 0.5rem;

        svg {
          display: block;
        }
      }

      .card-divider {
        width: 32px;
        height: 1px;
        background: var(--color-gold);
        border: none;
        margin: 0 auto;
      }

      .service-btn {
        font-size: 0.78rem;
        padding: 8px 18px;
        margin-top: 0.5rem;
      }

      .btn--outline {
        background: transparent;
        border: 1.5px solid var(--color-accent);
        color: var(--color-accent);

        &:hover {
          background-color: var(--color-accent);
          color: var(--color-white);
        }
      }

      @media (max-width: 1024px) {
        .services-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 560px) {
        .services-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ServicesComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
  icons = SERVICE_ICONS;
}
