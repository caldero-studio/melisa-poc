import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <p class="hero-greeting">{{ t().hero.greeting }}</p>
        <h1 class="hero-name">{{ t().hero.name }}</h1>
        <p class="hero-slogan">{{ t().hero.slogan }}</p>
        <a href="#services" class="btn btn--filled">{{ t().hero.cta }}</a>
      </div>
      <div class="hero-scroll-hint" aria-hidden="true">
        <span></span>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        position: relative;
        min-height: 100svh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: linear-gradient(
          135deg,
          #e8dff5 0%,
          #f3eef8 40%,
          #ddd2f0 100%
        );
      }

      /* Decorative blurred circles */
      .hero::before {
        content: '';
        position: absolute;
        width: 520px;
        height: 520px;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          rgba(169, 141, 214, 0.35) 0%,
          transparent 70%
        );
        top: -100px;
        right: -100px;
        pointer-events: none;
      }

      .hero::after {
        content: '';
        position: absolute;
        width: 380px;
        height: 380px;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          rgba(124, 92, 191, 0.18) 0%,
          transparent 70%
        );
        bottom: -80px;
        left: -80px;
        pointer-events: none;
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(250, 248, 253, 0.15);
      }

      .hero-content {
        position: relative;
        z-index: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
      }

      .hero-greeting {
        font-size: 1rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--color-primary);
        font-family: var(--font-body);
      }

      .hero-name {
        color: var(--color-primary-dark);
        font-style: italic;
        letter-spacing: 0.02em;
      }

      .hero-slogan {
        font-family: var(--font-heading);
        font-size: clamp(1.1rem, 3vw, 1.5rem);
        font-style: italic;
        color: var(--color-text-muted);
        max-width: 480px;
      }

      /* Scroll hint animation */
      .hero-scroll-hint {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);

        span {
          display: block;
          width: 20px;
          height: 30px;
          border: 2px solid var(--color-primary-light);
          border-radius: 10px;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 6px;
            border-radius: 2px;
            background: var(--color-primary-light);
            animation: scrollBob 1.6s infinite;
          }
        }
      }

      @keyframes scrollBob {
        0%,
        100% {
          top: 5px;
          opacity: 1;
        }
        60% {
          top: 13px;
          opacity: 0.3;
        }
      }
    `,
  ],
})
export class HeroComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
}
