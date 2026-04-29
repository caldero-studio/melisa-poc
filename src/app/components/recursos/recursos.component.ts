import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-recursos',
  standalone: true,
  template: `
    <section id="recursos" class="section recursos">
      <div class="container">
        <h2 class="section-title">{{ t().resources.title }}</h2>
        <hr class="divider" />
        <p class="section-subtitle">{{ t().resources.subtitle }}</p>
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <p class="coming-soon-text">{{ t().resources.comingSoon }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .recursos {
        background-color: var(--color-bg);
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
        background-color: var(--color-white);
      }

      .coming-soon-icon {
        color: var(--color-gold);
        opacity: 0.75;
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
export class RecursosComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
}
