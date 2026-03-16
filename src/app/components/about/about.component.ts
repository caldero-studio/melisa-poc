import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section section--alt about">
      <div class="container about-inner">
        <div class="about-image-wrap">
          <div class="about-placeholder">
            <span class="placeholder-initials">MC</span>
          </div>
        </div>
        <div class="about-text">
          <h2 class="section-title" style="text-align:left">
            {{ t().about.title }}
          </h2>
          <hr class="divider" style="margin-left:0" />
          <p>{{ t().about.p1 }}</p>
          <br />
          <p>{{ t().about.p2 }}</p>
          <br />
          <a href="#contact" class="btn" style="margin-top:0.5rem">{{
            t().nav.contact
          }}</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about-inner {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 4rem;
        align-items: center;
      }

      .about-image-wrap {
        display: flex;
        justify-content: center;
      }

      .about-placeholder {
        width: 280px;
        height: 340px;
        border-radius: var(--radius-lg);
        background: linear-gradient(
          145deg,
          var(--color-accent),
          var(--color-primary-light)
        );
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 16px 48px rgba(124, 92, 191, 0.2);
      }

      .placeholder-initials {
        font-family: var(--font-heading);
        font-size: 4rem;
        color: var(--color-white);
        opacity: 0.8;
        letter-spacing: 0.1em;
      }

      .about-text {
        .section-title {
          text-align: left;
        }
      }

      @media (max-width: 768px) {
        .about-inner {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .about-placeholder {
          width: 200px;
          height: 240px;
          margin-inline: auto;
        }
      }
    `,
  ],
})
export class AboutComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
}
