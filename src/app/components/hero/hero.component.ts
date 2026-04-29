import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero section">
      <div class="container hero-grid">
        <div class="hero-text">
          <h1 class="hero-title">
            {{ t().hero.titlePart1 }}<br />
            <span class="hero-accent">{{ t().hero.titleAccent }}</span>
          </h1>
          <div class="hero-divider"></div>
          <p class="hero-subtitle">{{ t().hero.subtitle }}</p>
          <a href="#services" class="btn">{{ t().hero.cta }}</a>
        </div>
        <div class="hero-image">
          <div class="hero-img-wrapper">
            <img
              src="hero.jpg"
              alt="Carta natal y cristales"
              class="hero-img"
              onerror="this.style.display='none'; this.parentElement.classList.add('hero-img-placeholder')"
            />
            <div class="hero-img-decoration"></div>
          </div>
        </div>
      </div>
      <!-- decorative stars -->
      <span class="deco deco-1" aria-hidden="true">✦</span>
      <span class="deco deco-2" aria-hidden="true">✦</span>
    </section>
  `,
  styles: [
    `
      .hero {
        background-color: var(--color-bg);
        padding-top: calc(6rem + 70px);
        position: relative;
        overflow: hidden;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 3rem;
      }

      .hero-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
      }

      .hero-title {
        font-size: clamp(2rem, 5vw, 3.5rem);
        line-height: 1.15;
        color: var(--color-text-dark);
        font-weight: 500;
      }

      .hero-accent {
        color: var(--color-accent);
        font-style: italic;
      }

      .hero-divider {
        width: 60px;
        height: 1.5px;
        background: var(--color-gold);
        margin: 0;
      }

      .hero-subtitle {
        font-size: 1rem;
        font-weight: 300;
        color: var(--color-text);
        max-width: 420px;
        line-height: 1.75;
      }

      /* Hero image */
      .hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .hero-img-wrapper {
        position: relative;
        width: 100%;
        max-width: 440px;
        aspect-ratio: 4/3;
        border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
        overflow: hidden;
        background: linear-gradient(
          135deg,
          #f0cdd8 0%,
          #e8b7c8 50%,
          #cfaf7b22 100%
        );
        box-shadow: 0 20px 50px rgba(232, 183, 200, 0.4);

        &.hero-img-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          &::after {
            content: '☽';
            font-size: 6rem;
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }

      .hero-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .hero-img-decoration {
        position: absolute;
        inset: -8px;
        border-radius: inherit;
        border: 1.5px solid rgba(207, 175, 123, 0.4);
        pointer-events: none;
      }

      /* Decorative stars */
      .deco {
        position: absolute;
        color: var(--color-gold);
        font-size: 1.2rem;
        opacity: 0.6;
        pointer-events: none;
      }

      .deco-1 {
        top: 15%;
        left: 48%;
      }
      .deco-2 {
        bottom: 20%;
        right: 5%;
        font-size: 0.8rem;
      }

      @media (max-width: 768px) {
        .hero-grid {
          grid-template-columns: 1fr;
          text-align: center;
        }

        .hero-text {
          align-items: center;
          order: 1;
        }

        .hero-image {
          order: 2;
        }

        .hero-subtitle {
          text-align: center;
        }

        .hero-img-wrapper {
          max-width: 280px;
          aspect-ratio: 1;
        }
      }
    `,
  ],
})
export class HeroComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
}
