import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section about">
      <div class="container about-inner">
        <div class="about-image-wrap">
          <div class="about-img-circle">
            <img
              src="about.jpg"
              alt="Melisa"
              class="about-img"
              onerror="this.style.display='none'; this.parentElement.classList.add('about-img-placeholder')"
            />
          </div>
          <!-- decorative elements -->
          <div class="about-deco-circle"></div>
          <span class="about-deco-star" aria-hidden="true">✦</span>
        </div>
        <div class="about-text">
          <h2 style="text-align:left">{{ t().about.title }}</h2>
          <hr class="divider" style="margin-left:0" />
          <p>{{ t().about.p1 }}</p>
          <p style="margin-top:1rem">{{ t().about.p2 }}</p>
          <a href="#contact" class="btn" style="margin-top:1.5rem">{{
            t().about.cta
          }}</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about {
        background-color: var(--color-bg);
      }

      .about-inner {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 5rem;
        align-items: center;
      }

      .about-image-wrap {
        display: flex;
        justify-content: center;
        position: relative;
      }

      .about-img-circle {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
        background: linear-gradient(
          135deg,
          #f0cdd8 0%,
          var(--color-primary) 100%
        );
        box-shadow: 0 16px 50px rgba(232, 183, 200, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;

        &.about-img-placeholder {
          &::after {
            content: '☽';
            font-size: 5rem;
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }

      .about-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        display: block;
      }

      .about-deco-circle {
        position: absolute;
        width: 320px;
        height: 320px;
        border-radius: 50%;
        border: 1.5px dashed rgba(207, 175, 123, 0.4);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }

      .about-deco-star {
        position: absolute;
        top: 0;
        right: 10%;
        color: var(--color-gold);
        font-size: 1.2rem;
        opacity: 0.7;
      }

      .about-text {
        display: flex;
        flex-direction: column;
        gap: 0;

        p {
          line-height: 1.8;
        }
      }

      @media (max-width: 768px) {
        .about-inner {
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        .about-img-circle {
          width: 220px;
          height: 220px;
          margin-inline: auto;
        }

        .about-deco-circle {
          width: 240px;
          height: 240px;
        }
      }
    `,
  ],
})
export class AboutComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
}
