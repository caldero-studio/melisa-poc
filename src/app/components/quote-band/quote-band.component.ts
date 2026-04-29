import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-quote-band',
  standalone: true,
  template: `
    <section class="quote-band">
      <!-- decorative moon SVG -->
      <svg
        class="deco deco-moon"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
        />
      </svg>

      <div class="quote-content">
        <span class="deco-star" aria-hidden="true">✦</span>
        <blockquote class="quote-text">{{ t().quote }}</blockquote>
        <span class="deco-star" aria-hidden="true">✦</span>
      </div>

      <!-- decorative sun/circle SVG -->
      <svg
        class="deco deco-sun"
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="1" stroke-linecap="round" />
        <line x1="12" y1="23" x2="12" y2="21" stroke-linecap="round" />
        <line x1="21" y1="12" x2="23" y2="12" stroke-linecap="round" />
        <line x1="1" y1="12" x2="3" y2="12" stroke-linecap="round" />
      </svg>
    </section>
  `,
  styles: [
    `
      .quote-band {
        background-color: var(--color-accent);
        padding: 4rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        position: relative;
        overflow: hidden;
      }

      .quote-content {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        max-width: 680px;
      }

      .quote-text {
        font-family: var(--font-heading);
        font-size: clamp(1.4rem, 3.5vw, 2rem);
        font-weight: 400;
        font-style: italic;
        color: var(--color-white);
        text-align: center;
        line-height: 1.45;
        white-space: pre-line;
      }

      .deco-star {
        color: rgba(255, 255, 255, 0.55);
        font-size: 1rem;
        flex-shrink: 0;
      }

      .deco {
        color: rgba(255, 255, 255, 0.25);
        flex-shrink: 0;
      }

      .deco-moon {
        display: block;
      }

      .deco-sun {
        display: block;
      }

      @media (max-width: 640px) {
        .quote-band {
          gap: 1rem;
        }

        .deco-moon,
        .deco-sun {
          display: none;
        }

        .deco-star {
          display: none;
        }
      }
    `,
  ],
})
export class QuoteBandComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
}
