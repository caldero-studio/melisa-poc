import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

const ICONS = ['✦', '☽', '❋', '⟳', '✿'];

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
              <div class="service-icon">{{ icons[i] }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
        margin-top: 3rem;
      }

      .service-card {
        padding: 2rem 1.8rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: var(--color-white);
        transition:
          transform 0.25s,
          box-shadow 0.25s;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(124, 92, 191, 0.1);
        }

        h3 {
          color: var(--color-primary-dark);
        }
      }

      .service-icon {
        font-size: 1.8rem;
        color: var(--color-accent);
        line-height: 1;
      }
    `,
  ],
})
export class ServicesComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
  icons = ICONS;
}
