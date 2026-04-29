import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-talleres',
  standalone: true,
  template: `
    <section id="talleres" class="section talleres">
      <div class="container">
        <h2 class="section-title">{{ t().workshops.title }}</h2>
        <hr class="divider" />
        <p class="section-subtitle">{{ t().workshops.subtitle }}</p>
        <div class="coming-soon">
          <div class="coming-soon-icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <p class="coming-soon-text">{{ t().workshops.comingSoon }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .talleres {
        background-color: var(--color-white);
      }

      .coming-soon {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        margin-top: 3rem;
        padding: 4rem 2rem;
        border: 1.5px dashed var(--color-border);
        border-radius: var(--radius-card);
        background-color: var(--color-bg);
      }

      .coming-soon-icon {
        color: var(--color-accent);
        opacity: 0.7;
      }

      .coming-soon-text {
        font-family: var(--font-heading);
        font-size: 1.3rem;
        font-style: italic;
        color: var(--color-text-muted);
      }
    `,
  ],
})
export class TalleresComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
}
